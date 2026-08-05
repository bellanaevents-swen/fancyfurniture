import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/images', express.static(path.join(process.cwd(), 'public', 'images')));

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

async function start() {
  // Serve static images folder
  app.use('/images', express.static(path.join(process.cwd(), 'images')));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: 3000 },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Fancy Furniture server running on http://0.0.0.0:${PORT}`);
  });
}

start();
