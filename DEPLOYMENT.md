# Deployment Guide

This guide explains how to configure environment variables for both frontend and backend deployment.

## Environment Variables Setup

### Frontend Environment Variables

The frontend uses Vite, which requires environment variables to be prefixed with `VITE_`.

**Location**: `.env` (root directory)

**Required Variables**:
- `VITE_API_URL` - The backend API URL
  - Development: `http://localhost:5000/api`
  - Production: `https://api.yourdomain.com/api` (replace with your production backend URL)

**Example `.env` file**:
```env
VITE_API_URL=http://localhost:5000/api
```

**For Production**:
```env
VITE_API_URL=https://api.yourdomain.com/api
```

### Backend Environment Variables

**Location**: `server/.env`

**Required Variables**:

1. **PORT** - Server port number
   - Default: `5000`
   - Example: `PORT=5000`

2. **NODE_ENV** - Environment mode
   - Development: `development`
   - Production: `production`
   - Example: `NODE_ENV=production`

3. **MONGODB_URI** - MongoDB connection string
   - Local: `mongodb://localhost:27017/syntaxim`
   - Production (MongoDB Atlas): `mongodb+srv://username:password@cluster.mongodb.net/syntaxim?retryWrites=true&w=majority`
   - Example: `MONGODB_URI=mongodb://localhost:27017/syntaxim`

4. **JWT_SECRET** - Secret key for JWT token signing
   - **IMPORTANT**: Use a strong, random secret in production
   - Generate a secure secret: `openssl rand -base64 32`
   - Example: `JWT_SECRET=your-very-secure-random-secret-key-here`

5. **FRONTEND_URL** - Frontend URL for CORS configuration
   - Development: `http://localhost:8080` or `http://localhost:5173`
   - Production: `https://yourdomain.com` (your frontend domain)
   - Example: `FRONTEND_URL=https://yourdomain.com`

**Example `server/.env` file**:
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/syntaxim
JWT_SECRET=your-very-secure-random-secret-key-here
FRONTEND_URL=https://yourdomain.com
```

## Setup Instructions

### 1. Frontend Setup

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and set your production backend URL:
   ```env
   VITE_API_URL=https://api.yourdomain.com/api
   ```

3. Build the frontend:
   ```bash
   npm run build
   ```

### 2. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Copy the example file:
   ```bash
   cp .env.example .env
   ```

3. Edit `server/.env` and configure all required variables:
   - Set `NODE_ENV=production`
   - Update `MONGODB_URI` with your production database connection string
   - Generate and set a secure `JWT_SECRET`
   - Set `FRONTEND_URL` to your production frontend domain
   - Optionally change `PORT` if needed

4. Start the server:
   ```bash
   npm run server
   ```

## Security Notes

1. **Never commit `.env` files** - They are already in `.gitignore`
2. **Use strong JWT secrets** - Generate using `openssl rand -base64 32`
3. **Use HTTPS in production** - Set `NODE_ENV=production` to enable secure cookies
4. **Restrict CORS in production** - The backend will only allow requests from `FRONTEND_URL` in production mode

## CORS Configuration

The backend CORS is configured to:
- **Development**: Allow all origins (for easier testing)
- **Production**: Only allow requests from `FRONTEND_URL` and common localhost ports

Make sure to set `FRONTEND_URL` correctly in production to ensure your frontend can communicate with the backend.

## Troubleshooting

### Frontend can't connect to backend
- Check that `VITE_API_URL` in `.env` matches your backend URL
- Ensure the backend is running and accessible
- Check CORS configuration in backend if you see CORS errors

### Backend CORS errors
- Verify `FRONTEND_URL` in `server/.env` matches your frontend domain exactly
- Check that `NODE_ENV=production` is set in production
- Ensure the frontend URL includes the protocol (http:// or https://)

### Database connection issues
- Verify `MONGODB_URI` is correct
- Check network connectivity to MongoDB
- Ensure MongoDB credentials are correct

