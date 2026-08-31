// api/index.js
import app from '../server.js';
import { connectMongoDB } from '../backend/mongodb.js';

connectMongoDB().catch(err => console.warn('MongoDB Vercel connection attempt:', err.message));

export default app;