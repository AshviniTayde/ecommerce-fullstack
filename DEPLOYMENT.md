# Deployment Guide

## Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running
- Git

### Quick Start
1. Clone the repository
2. Install dependencies for both client and server:
   ```bash
   npm run install-all
   ```
3. Create environment file:
   ```bash
   cp server/.env.example server/.env
   ```
4. Update the `.env` file with your MongoDB connection string and JWT secret
5. Start both client and server:
   ```bash
   npm run dev
   ```

## Production Deployment

### Option 1: Heroku Deployment
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Connect to MongoDB Atlas
4. Deploy using Heroku Git

### Option 2: Traditional Server Deployment
1. Build the React app:
   ```bash
   cd client && npm run build
   ```
2. Configure server to serve static files
3. Set up reverse proxy (nginx)
4. Configure environment variables
5. Use PM2 for process management

### Option 3: Docker Deployment
Create docker-compose.yml for containerized deployment with MongoDB.

## Environment Variables

### Required Server Variables:
- `PORT` - Server port (default: 8005)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT token generation
- `NODE_ENV` - Environment (development/production)

### Optional Variables:
- `CORS_ORIGIN` - Allowed CORS origins
- `BCRYPT_ROUNDS` - Password hashing rounds

## Database Setup
1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `amazonclone`
3. The application will auto-create collections

## Production Checklist
- [ ] Environment variables configured
- [ ] Database connection tested
- [ ] CORS origins configured
- [ ] HTTPS enabled
- [ ] Error logging implemented
- [ ] Performance monitoring setup
- [ ] Backup strategy in place
