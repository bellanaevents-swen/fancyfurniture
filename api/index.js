import app from '../server.js';
import { connectMongoDB } from '../backend/mongodb.js';

// Ensure MongoDB connection attempt on serverless function invocation
connectMongoDB().catch(err => console.warn('MongoDB Vercel connection attempt:', err.message));

export default app;
