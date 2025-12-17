# Environment Variables Setup Guide

## ⚠️ Important: Environment Variables Are NOT Automatically Filled

You need to **manually edit** the `.env` files for local development and **manually set** environment variables in Vercel for deployment.

---

## 📝 Local Development Setup

### 1. Frontend `.env` (Root Directory)

**Current value:**
```env
VITE_API_URL=http://localhost:5000/api
```

**For local development:** ✅ Already correct - no changes needed

**For production build:** Update to your production backend URL:
```env
VITE_API_URL=https://your-backend-url.vercel.app/api
```

### 2. Backend `server/.env`

**Already configured:**
- ✅ `MONGODB_URI` - Already set with your MongoDB Atlas connection string

**You need to edit:**
- ❌ `JWT_SECRET` - Currently set to default value, needs a secure secret
- ❌ `FRONTEND_URL` - Currently set to localhost, needs your production frontend URL

**Current values that need updating:**
```env
JWT_SECRET=your-secret-key-change-in-production  # ⚠️ CHANGE THIS
FRONTEND_URL=http://localhost:8080              # ⚠️ CHANGE THIS for production
```

**Updated example:**
```env
JWT_SECRET=your-very-secure-random-secret-here
FRONTEND_URL=https://your-frontend.vercel.app
```

---

## 🚀 Vercel Deployment Setup

### Environment Variables in Vercel Dashboard

**You MUST manually add these in Vercel:**

1. Go to your Vercel project → **Settings** → **Environment Variables**

2. Add these variables:

#### Backend Variables:
- `MONGODB_URI` = `mongodb+srv://riteshpatidar088:j0eG38RfUP1AROum@cluster0.b2vgi2d.mongodb.net/syntaxim?appName=Cluster0`
- `JWT_SECRET` = (Generate a secure secret - see below)
- `FRONTEND_URL` = `https://your-frontend.vercel.app` (Your actual Vercel frontend URL)
- `NODE_ENV` = `production`

#### Frontend Variables:
- `VITE_API_URL` = `https://your-backend.vercel.app/api` (Your Vercel backend URL)

---

## 🔐 How to Generate a Secure JWT Secret

### Option 1: Using OpenSSL (Recommended)
```bash
openssl rand -base64 32
```

### Option 2: Using Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Option 3: Online Generator
Use a secure random string generator (at least 32 characters)

**Example output:**
```
aB3xK9mP2qR7sT5vW8yZ1cD4fG6hJ0kL3nM6pQ9rS2tU5vW8xY1zA4bC7dE0fG
```

---

## 📋 Quick Setup Checklist

### Local Development:
- [x] MongoDB URI - Already set
- [ ] Generate and set `JWT_SECRET` in `server/.env`
- [ ] Keep `FRONTEND_URL` as `http://localhost:8080` for local dev

### Vercel Deployment:
- [ ] Add `MONGODB_URI` in Vercel dashboard
- [ ] Generate and add `JWT_SECRET` in Vercel dashboard
- [ ] Add `FRONTEND_URL` (your Vercel frontend URL) in Vercel dashboard
- [ ] Add `NODE_ENV=production` in Vercel dashboard
- [ ] Add `VITE_API_URL` (your Vercel backend URL) in Vercel dashboard

---

## ⚡ Quick Commands

### Generate JWT Secret:
```bash
openssl rand -base64 32
```

### Update server/.env (after generating secret):
```bash
# Edit server/.env and replace JWT_SECRET with your generated secret
```

---

## 🔄 After Vercel Deployment

1. **Get your deployment URLs:**
   - Frontend: `https://your-project.vercel.app`
   - Backend API: `https://your-project.vercel.app/api`

2. **Update Vercel environment variables:**
   - Set `FRONTEND_URL` = Your frontend URL
   - Set `VITE_API_URL` = Your backend API URL

3. **Redeploy** if you change environment variables

---

## ⚠️ Security Notes

- **Never commit `.env` files** - They're in `.gitignore`
- **Use different JWT secrets** for development and production
- **Keep secrets secure** - Don't share them publicly
- **Rotate secrets** if they're ever exposed

