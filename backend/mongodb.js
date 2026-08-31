import mongoose from 'mongoose';

// Lazy MongoDB connection state
let isConnected = false;
let connectionError = null;

const DEFAULT_MONGO_URI = 'mongodb+srv://bellaakarki_db_user:Oj17hjRLSY4ZqzJK@cluster0.cv43h4r.mongodb.net/fancy_furniture?retryWrites=true&w=majority&appName=Cluster0';

export async function connectMongoDB() {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URL || DEFAULT_MONGO_URI;

  if (!mongoUri) {
    return {
      connected: false,
      message: 'MONGODB_URI not set in environment variables. Operating in JSON fallback mode.'
    };
  }

  if (isConnected && mongoose.connection.readyState === 1) {
    return { connected: true, dbName: mongoose.connection.name };
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000
    });
    isConnected = true;
    connectionError = null;
    console.log('MongoDB connected successfully to:', mongoose.connection.name);
    return { connected: true, dbName: mongoose.connection.name };
  } catch (err) {
    isConnected = false;
    connectionError = err.message;
    console.warn('MongoDB connection warning:', err.message);
    return { connected: false, error: err.message };
  }
}

export function getMongoStatus() {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URL || DEFAULT_MONGO_URI;
  return {
    configured: !!mongoUri,
    connected: mongoose.connection.readyState === 1,
    readyState: mongoose.connection.readyState,
    dbName: mongoose.connection.name || null,
    error: connectionError
  };
}

// 1. Content Description Schema & Model
const contentDescriptionSchema = new mongoose.Schema({
  productId: { type: String, required: true, index: true },
  title: { type: String, default: '' },
  shortSummary: { type: String, default: '' },
  fullStory: { type: String, default: '' },
  materials: [{ type: String }],
  dimensions: { type: String, default: '' },
  careInstructions: { type: String, default: '' },
  designerNotes: { type: String, default: '' },
  craftsmanshipOrigin: { type: String, default: 'Transylvania, Romania' },
  tags: [{ type: String }],
  updatedAt: { type: Date, default: Date.now }
});

// 2. Product Update / Changelog Schema & Model
const productUpdateSchema = new mongoose.Schema({
  productId: { type: String, required: true, index: true },
  productName: { type: String, default: '' },
  title: { type: String, required: true },
  updateType: { 
    type: String, 
    enum: ['restock', 'price_change', 'craftsmanship_note', 'new_finish', 'general'], 
    default: 'general' 
  },
  details: { type: String, required: true },
  author: { type: String, default: 'Master Craftsman' },
  badge: { type: String, default: 'Update' },
  createdAt: { type: Date, default: Date.now }
});

// 3. Site Content & Banner Announcements Schema & Model
const siteContentSchema = new mongoose.Schema({
  sectionKey: { type: String, required: true, unique: true },
  headline: { type: String, required: true },
  subheading: { type: String, default: '' },
  bannerText: { type: String, default: '' },
  activePromotion: { type: String, default: '' },
  updatedBy: { type: String, default: 'Store Admin' },
  updatedAt: { type: Date, default: Date.now }
});

export const ContentDescription = mongoose.models.ContentDescription || mongoose.model('ContentDescription', contentDescriptionSchema);
export const ProductUpdate = mongoose.models.ProductUpdate || mongoose.model('ProductUpdate', productUpdateSchema);
export const SiteContent = mongoose.models.SiteContent || mongoose.model('SiteContent', siteContentSchema);
