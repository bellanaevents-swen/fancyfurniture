# Fancy Furniture Webstore

A modern, responsive e-commerce web application featuring handcrafted solid wood furniture, rich MongoDB-backed content management, Cloudinary media optimization, and multi-language support.

## 🚀 Deploying to Vercel.com

This repository is fully configured for one-click or automatic deployment on [Vercel](https://vercel.com).

### Step 1: Connect Repository to Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and log in.
2. Select your Git provider (GitHub / GitLab / Bitbucket) and import this repository.

### Step 2: Configure Environment Variables
In the Vercel project deployment settings, add the following Environment Variables (from your `.env.example`):

| Variable Name | Description | Example Value |
| --- | --- | --- |
| `MONGODB_URI` | MongoDB Atlas Connection String | `mongodb+srv://username:password@cluster.mongodb.net/fancy_furniture?retryWrites=true&w=majority` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary Cloud Name | `your_cloudinary_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API Key | `your_cloudinary_api_key` |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret | `your_cloudinary_api_secret` |

### Step 3: Deploy
1. Keep the default build settings:
   - **Framework Preset**: Vite / Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
2. Click **Deploy**. Vercel will automatically build the static assets and deploy the backend API routes via `api/index.js`!

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.
