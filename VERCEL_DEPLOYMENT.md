# Vercel Deployment Guide

This guide explains how to deploy both the frontend and backend to Vercel.

## Prerequisites

1. A Vercel account
2. MongoDB Atlas connection string (already configured)
3. Git repository connected to Vercel

## Deployment Steps

### 1. Environment Variables Setup in Vercel

**IMPORTANT**: Set these environment variables in your Vercel project dashboard (Settings → Environment Variables):

#### Backend Environment Variables:
- `MONGODB_URI` = `mongodb+srv://riteshpatidar088:j0eG38RfUP1AROum@cluster0.b2vgi2d.mongodb.net/syntaxim?appName=Cluster0`
- `JWT_SECRET` = Your secure JWT secret (generate with `openssl rand -base64 32`)
- `FRONTEND_URL` = Your Vercel frontend URL (e.g., `https://your-project.vercel.app`)
- `NODE_ENV` = `production`
- `PORT` = (optional, Vercel handles this automatically)

#### Frontend Environment Variables:
- `VITE_API_URL` = Your backend API URL
  - If deploying backend to Vercel: `https://your-project.vercel.app/api`
  - Or use a separate backend URL if deploying backend separately

### 2. Project Structure

The project is configured with:
- **Frontend**: Built with Vite, output to `dist/` directory
- **Backend**: Express server deployed as Vercel serverless function at `api/index.js`
- **Routes**: 
  - `/api/*` → Backend serverless function
  - `/*` → Frontend (React app)

### 3. Build Configuration

The `vercel.json` file is configured to:
1. Build the frontend using `npm run build` (Vite build)
2. Deploy the backend as a serverless function at `/api/index.js`
3. Route API requests to the backend
4. Route all other requests to the frontend

### 4. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Option B: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add all environment variables (see step 1)
6. Click "Deploy"

### 5. Post-Deployment

After deployment:

1. **Update Frontend Environment Variable**:
   - Go to Vercel project settings
   - Update `VITE_API_URL` to your deployed backend URL
   - Redeploy the frontend

2. **Update Backend CORS**:
   - Update `FRONTEND_URL` in backend environment variables to your frontend URL
   - This ensures CORS works correctly

3. **Test the API**:
   - Visit `https://your-project.vercel.app/api/health`
   - Should return: `{"status":"OK","message":"Server is running"}`

## Important Notes

### Environment Variables

- **Never commit `.env` files** - They are in `.gitignore`
- **Set all environment variables in Vercel dashboard** - They won't be read from `.env` files in production
- **Use different values for production** - Especially `JWT_SECRET`

### CORS Configuration

The backend CORS is configured to:
- Allow all origins in development
- Only allow `FRONTEND_URL` in production

Make sure `FRONTEND_URL` matches your actual frontend domain.

### MongoDB Connection

The MongoDB connection string is already configured. Make sure:
- MongoDB Atlas allows connections from Vercel's IP ranges (or allow all IPs: `0.0.0.0/0`)
- The database user has proper permissions

### Serverless Function Limits

Vercel serverless functions have:
- **Timeout**: 10 seconds (Hobby), 60 seconds (Pro)
- **Memory**: 1024 MB
- **Request size**: 4.5 MB

For longer operations, consider:
- Using Vercel Pro plan
- Optimizing database queries
- Using background jobs for heavy operations

## Troubleshooting

### API Routes Not Working

1. Check that `api/index.js` exists and exports the Express app
2. Verify environment variables are set in Vercel
3. Check Vercel function logs for errors

### CORS Errors

1. Verify `FRONTEND_URL` is set correctly in backend environment variables
2. Check that the frontend URL matches exactly (including https://)
3. Ensure `NODE_ENV=production` is set

### MongoDB Connection Errors

1. Check MongoDB Atlas network access settings
2. Verify the connection string is correct
3. Check Vercel function logs for connection errors

### Build Errors

1. Check that all dependencies are in `package.json`
2. Verify build command: `npm run build`
3. Check Vercel build logs for specific errors

## Local Development

For local development, the setup remains the same:

```bash
# Start backend
npm run server

# Start frontend
npm run dev

# Or both together
npm run dev:all
```

The `.env` files in the project are for local development only.

