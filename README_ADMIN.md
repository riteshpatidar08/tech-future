# Admin Panel Setup Guide

## Backend Setup

1. **Install Dependencies**

   ```bash
   npm install express mongoose cors dotenv bcryptjs jsonwebtoken
   ```

2. **MongoDB Setup**

   - Make sure MongoDB is running on your system
   - Update `.env` file with your MongoDB connection string:
     ```
     MONGODB_URI=mongodb://localhost:27017/syntaxim
     JWT_SECRET=your-secret-key-change-in-production
     PORT=5000
     ```

3. **Start the Server**

   ```bash
   npm run server
   ```

   Or run both frontend and backend:

   ```bash
   npm run dev:all
   ```

4. **Create Admin User**
   - Make a POST request to `http://localhost:5000/api/admin/create`:
   ```json
   {
     "username": "admin",
     "email": "admin@syntaxim.com",
     "password": "your-password",
     "role": "admin"
   }
   ```

## Frontend Setup

1. **Environment Variables**
   Create a `.env` file in the root:

   ```
   VITE_API_URL=http://localhost:5000/api
   ```

2. **Access Admin Panel**
   - Navigate to `/admin/login`
   - Login with your admin credentials
   - Access dashboard at `/admin/dashboard`
   - View all leads at `/admin/leads`

## Features

- **Lead Management**: View, filter, search, and update lead statuses
- **Statistics Dashboard**: View leads statistics (today, week, month, all time)
- **Charts**: Visual representation of leads over time
- **Authentication**: Secure JWT-based authentication
- **Protected Routes**: Admin routes are protected and require authentication

## API Endpoints

### Public

- `POST /api/leads` - Create a new lead (from website form)

### Protected (Requires Authentication)

- `GET /api/leads` - Get all leads
- `GET /api/leads/stats` - Get lead statistics
- `PATCH /api/leads/:id` - Update lead status
- `DELETE /api/leads/:id` - Delete a lead
- `POST /api/admin/login` - Admin login
- `GET /api/admin/verify` - Verify token
