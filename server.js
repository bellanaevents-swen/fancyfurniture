import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { v2 as cloudinary } from 'cloudinary';
import { connectMongoDB, getMongoStatus, ContentDescription, ProductUpdate, SiteContent } from './backend/mongodb.js';

// In-memory fallbacks when MongoDB is not connected
const memoryContentDescriptions = new Map();
const memoryProductUpdates = [];
const memorySiteContent = {
  sectionKey: 'main_announcement',
  headline: 'Handcrafted Timeless Elegance',
  subheading: 'Each piece is sustainably sculpted from certified Transylvanian solid oak & walnut.',
  bannerText: '✨ FREE White-Glove Worldwide Delivery on Orders Over $2,500',
  activePromotion: 'SPRING-CRAFT-2026',
  updatedBy: 'Master Artisan',
  updatedAt: new Date().toISOString()
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));
app.use('/images', express.static(path.join(process.cwd(), 'public', 'images')));

// Lazy Cloudinary client initialization
function getCloudinary() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'fufpfh6x';
  const apiKey = process.env.CLOUDINARY_API_KEY || '499768757425853';
  const apiSecret = process.env.CLOUDINARY_API_SECRET || 'dPbUUfkXZTWCqVNDvyy0FEwUtDQ';
  const cloudinaryUrl = process.env.CLOUDINARY_URL;

  if (cloudinaryUrl) {
    cloudinary.config({ cloudinary_url: cloudinaryUrl });
    return cloudinary;
  }
  if (cloudName && apiKey && apiSecret) {
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true
    });
    return cloudinary;
  }
  return null;
}

// Helper to safely read JSON files from backend/data
const readJsonFile = (filename, fallback = []) => {
  try {
    const filePath = path.join(process.cwd(), 'backend', 'data', filename);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
  }
  return fallback;
};

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Fancy Furniture Backend API', timestamp: new Date().toISOString() });
});

app.get('/api/products', (req, res) => {
  const products = readJsonFile('products.json');
  res.json({
    success: true,
    products,
    count: products.length
  });
});

app.get('/api/orders', (req, res) => {
  const orders = readJsonFile('orders.json');
  res.json({
    success: true,
    orders
  });
});

app.get('/api/users', (req, res) => {
  const users = readJsonFile('users.json');
  res.json({
    success: true,
    users
  });
});

app.get('/api/showrooms', (req, res) => {
  const showrooms = readJsonFile('showrooms.json');
  res.json({
    success: true,
    showrooms
  });
});

app.post('/api/orders', (req, res) => {
  const { cart, customer, total } = req.body || {};
  const newOrder = {
    id: 'FF-' + Math.floor(100000 + Math.random() * 900000),
    customer,
    cart,
    total,
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };
  res.json({
    success: true,
    order: newOrder
  });
});

// Cloudinary Storage Endpoints
app.get('/api/cloudinary/config', (req, res) => {
  const instance = getCloudinary();
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || null;
  res.json({
    success: true,
    configured: !!instance,
    cloudName: cloudName,
    message: instance 
      ? 'Cloudinary connection active' 
      : 'Cloudinary environment variables missing (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET).'
  });
});

app.post('/api/cloudinary/upload', async (req, res) => {
  try {
    const { image, folder = 'fancy_furniture' } = req.body || {};
    if (!image) {
      return res.status(400).json({ success: false, error: 'No image provided' });
    }

    const instance = getCloudinary();
    if (instance) {
      const result = await instance.uploader.upload(image, {
        folder: folder,
        resource_type: 'auto'
      });
      return res.json({
        success: true,
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
        cloudinary: true
      });
    }

    // Fallback response when keys are not provided in environment variables
    res.json({
      success: true,
      url: image,
      configured: false,
      cloudinary: false,
      message: 'Image received. For full Cloudinary CDN hosting, configure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in .env.'
    });
  } catch (err) {
    console.error('Cloudinary Upload Error:', err);
    res.status(500).json({ success: false, error: err.message || 'Upload failed' });
  }
});

// MongoDB Status & Content Management Routes
app.get('/api/mongodb/status', async (req, res) => {
  const conn = await connectMongoDB();
  const status = getMongoStatus();
  res.json({
    success: true,
    mongo: status,
    connectionResult: conn,
    message: status.connected 
      ? `Connected to MongoDB database: ${status.dbName}` 
      : 'MongoDB URI not configured or unreachable. Server is operating with active in-memory store.'
  });
});

// GET & POST Content Description (Rich stories, materials, care guides)
app.get('/api/mongodb/content-descriptions/:productId', async (req, res) => {
  const { productId } = req.params;
  const status = getMongoStatus();

  if (status.connected) {
    try {
      const doc = await ContentDescription.findOne({ productId });
      if (doc) {
        return res.json({ success: true, source: 'mongodb', description: doc });
      }
    } catch (e) {
      console.warn('MongoDB query error:', e.message);
    }
  }

  // Memory fallback
  const fallbackDoc = memoryContentDescriptions.get(productId) || {
    productId,
    title: 'Artisanal Furniture Piece',
    shortSummary: 'Hand-sculpted premium wood furniture piece crafted with heritage techniques.',
    fullStory: 'Every single joint and grain line is meticulously finished by experienced woodcraft artisans. Sourced from FSC-certified sustainable timber reserves.',
    materials: ['Solid Transylvanian Oak', 'Brass Hardware', 'Organic Oil Finish'],
    dimensions: 'W: 120cm × D: 60cm × H: 75cm',
    careInstructions: 'Wipe with soft damp lint-free cloth. Apply natural beeswax polish twice yearly.',
    designerNotes: 'Inspired by Scandinavian minimalism fused with Transylvanian joinery heritage.',
    craftsmanshipOrigin: 'Transylvania, Romania',
    tags: ['Handcrafted', 'Solid Wood', 'Sustainable', 'Eco-Friendly'],
    updatedAt: new Date()
  };

  res.json({ success: true, source: status.connected ? 'mongodb_empty' : 'memory_fallback', description: fallbackDoc });
});

app.post('/api/mongodb/content-descriptions/:productId', async (req, res) => {
  const { productId } = req.params;
  const data = req.body || {};
  const status = getMongoStatus();

  data.productId = productId;
  data.updatedAt = new Date();

  if (status.connected) {
    try {
      const updated = await ContentDescription.findOneAndUpdate(
        { productId },
        { $set: data },
        { new: true, upsert: true }
      );
      return res.json({ success: true, source: 'mongodb', description: updated });
    } catch (e) {
      console.error('Error saving to MongoDB:', e.message);
    }
  }

  // Save to memory fallback
  memoryContentDescriptions.set(productId, data);
  res.json({ success: true, source: 'memory_fallback', description: data });
});

// GET & POST Product Updates / Changelog
app.get('/api/mongodb/updates', async (req, res) => {
  const { productId } = req.query;
  const status = getMongoStatus();

  if (status.connected) {
    try {
      const query = productId ? { productId } : {};
      const updates = await ProductUpdate.find(query).sort({ createdAt: -1 }).limit(30);
      return res.json({ success: true, source: 'mongodb', updates });
    } catch (e) {
      console.warn('MongoDB updates fetch error:', e.message);
    }
  }

  // Return memory updates with seed defaults if empty
  let updates = productId 
    ? memoryProductUpdates.filter(u => u.productId === productId)
    : [...memoryProductUpdates];

  if (updates.length === 0) {
    updates = [
      {
        id: 'up-1',
        productId: productId || 'p-1',
        productName: 'Transylvanian Solid Oak Dining Table',
        title: 'New Organic Beeswax Coating Finish Added',
        updateType: 'new_finish',
        details: 'Craftsmen have introduced a non-toxic organic beeswax sealing layer for heightened spill resistance.',
        author: 'Master Artisan Vasile',
        badge: 'New Finish',
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
      },
      {
        id: 'up-2',
        productId: productId || 'p-1',
        productName: 'All Collections',
        title: 'Spring Workshop Restock Complete',
        updateType: 'restock',
        details: '20 freshly handcrafted solid wood units have been quality checked and prepared for white-glove shipping.',
        author: 'Inventory Manager',
        badge: 'Restocked',
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
      }
    ];
  }

  res.json({ success: true, source: status.connected ? 'mongodb_empty' : 'memory_fallback', updates });
});

app.post('/api/mongodb/updates', async (req, res) => {
  const updateData = req.body || {};
  const status = getMongoStatus();

  if (status.connected) {
    try {
      const newUpdate = new ProductUpdate(updateData);
      await newUpdate.save();
      return res.json({ success: true, source: 'mongodb', update: newUpdate });
    } catch (e) {
      console.error('MongoDB update save error:', e.message);
    }
  }

  const memoryItem = {
    ...updateData,
    id: 'up-' + Date.now(),
    createdAt: new Date().toISOString()
  };
  memoryProductUpdates.unshift(memoryItem);
  res.json({ success: true, source: 'memory_fallback', update: memoryItem });
});

// GET & POST Site Content
app.get('/api/mongodb/site-content', async (req, res) => {
  const status = getMongoStatus();

  if (status.connected) {
    try {
      const doc = await SiteContent.findOne({ sectionKey: 'main_announcement' });
      if (doc) {
        return res.json({ success: true, source: 'mongodb', content: doc });
      }
    } catch (e) {
      console.warn('MongoDB site content fetch error:', e.message);
    }
  }

  res.json({ success: true, source: status.connected ? 'mongodb_empty' : 'memory_fallback', content: memorySiteContent });
});

app.post('/api/mongodb/site-content', async (req, res) => {
  const contentData = req.body || {};
  const status = getMongoStatus();

  if (status.connected) {
    try {
      const updated = await SiteContent.findOneAndUpdate(
        { sectionKey: 'main_announcement' },
        { $set: { ...contentData, updatedAt: new Date() } },
        { new: true, upsert: true }
      );
      return res.json({ success: true, source: 'mongodb', content: updated });
    } catch (e) {
      console.error('MongoDB site content save error:', e.message);
    }
  }

  Object.assign(memorySiteContent, contentData, { updatedAt: new Date().toISOString() });
  res.json({ success: true, source: 'memory_fallback', content: memorySiteContent });
});

// Local dev vs. Production setup

async function startServer() {
  // Attempt MongoDB connection
  connectMongoDB().catch(err => console.warn('MongoDB connection attempt:', err.message));

  // Serve local static images
  app.use('/images', express.static(path.join(process.cwd(), 'images')));

  // In local development, attach Vite middleware for hot-reloading
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Fancy Furniture server running on http://localhost:${PORT}`);
  });
}

// Only start the local HTTP server when NOT running inside Vercel Serverless
if (!process.env.VERCEL) {
  startServer();
}

// Single export default statement for Vercel functions
export default app;