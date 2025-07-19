# 🛒 Ecommerce Fullstack - Setup Guide

A complete step-by-step guide to clone, install, and run the fullstack ecommerce application.

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Detailed Setup](#detailed-setup)
- [Running the Project](#running-the-project)
- [Database Setup](#database-setup)
- [Troubleshooting](#troubleshooting)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

---

## 🔧 Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **MongoDB** (optional for backend) - [Download here](https://www.mongodb.com/try/download/community)

### Verify Installation
```bash
node --version
npm --version
git --version
```

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/AshviniTayde/ecommerce-fullstack.git
cd ecommerce-fullstack

# 2. Install all dependencies
npm run install-all

# 3. Set up environment
copy server\.env.example server\.env    # Windows
# cp server/.env.example server/.env    # Mac/Linux

# 4. Start the application
npm run dev
```

**That's it!** Open http://localhost:3000 to see your app.

---

## 📖 Detailed Setup

### Step 1: Clone the Repository
```bash
# Navigate to your desired directory
cd C:\Users\YourName\Documents\Projects

# Clone the repository
git clone https://github.com/AshviniTayde/ecommerce-fullstack.git

# Enter the project directory
cd ecommerce-fullstack
```

### Step 2: Install Dependencies

#### Root Dependencies
```bash
# Install concurrently (for running client & server together)
npm install
```

#### Frontend Dependencies
```bash
# Navigate to client folder and install React dependencies
cd client
npm install
cd ..
```

#### Backend Dependencies
```bash
# Navigate to server folder and install Node.js dependencies
cd server
npm install
cd ..
```

#### Or Install All at Once
```bash
# From root directory - installs both client and server dependencies
npm run install-all
```

### Step 3: Environment Configuration

#### Create Environment File
```bash
# Windows
copy server\.env.example server\.env

# Mac/Linux
cp server/.env.example server/.env
```

#### Edit Environment Variables
Open `server/.env` and configure:

```env
# Server Configuration
PORT=8005
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/amazonclone
DB_NAME=amazonclone

# Security
JWT_SECRET=your_super_secret_jwt_key_here
BCRYPT_ROUNDS=10

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

**Important:** Replace `your_super_secret_jwt_key_here` with a strong secret key.

---

## 🚀 Running the Project

### Option 1: Run Both Frontend & Backend (Recommended)
```bash
npm run dev
```
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8005

### Option 2: Run Frontend Only
```bash
npm run client
# OR
cd client && npm start
```
- **Frontend**: http://localhost:3000

### Option 3: Run Backend Only
```bash
npm run server
# OR
cd server && npm start
```
- **Backend API**: http://localhost:8005

### Option 4: Run in Separate Terminals
**Terminal 1 (Frontend):**
```bash
cd client
npm start
```

**Terminal 2 (Backend):**
```bash
cd server
npm start
```

---

## 💾 Database Setup

### Option A: Local MongoDB (Recommended for Development)

#### Install MongoDB
1. Download from [MongoDB Official Site](https://www.mongodb.com/try/download/community)
2. Follow installation instructions for your OS

#### Start MongoDB Service
```bash
# Windows (run as administrator)
net start MongoDB

# Mac (using Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### Verify MongoDB is Running
```bash
# Check if MongoDB is running on default port
mongosh
# OR
mongo
```

### Option B: MongoDB Atlas (Cloud Database)

1. **Sign up** at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create a free cluster**
3. **Create a database user**
4. **Whitelist your IP address**
5. **Get connection string** and update your `.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/amazonclone?retryWrites=true&w=majority
```

### Option C: Start Without Database

You can run the frontend without the backend for UI development:
```bash
npm run client
```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 8005  
npx kill-port 8005

# Or find and kill manually
netstat -ano | findstr :3000    # Windows
lsof -ti:3000 | xargs kill      # Mac/Linux
```

#### Issue 2: MongoDB Connection Error
- ✅ Verify MongoDB service is running
- ✅ Check connection string in `.env` file
- ✅ Ensure database name is correct
- ✅ For Atlas: verify IP whitelist and credentials

#### Issue 3: Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# For client
cd client
rm -rf node_modules package-lock.json
npm install

# For server
cd ../server
rm -rf node_modules package-lock.json
npm install
```

#### Issue 4: Permission Errors
```bash
# Clear npm cache
npm cache clean --force

# On Windows, run terminal as administrator
# On Mac/Linux, use sudo if necessary
```

#### Issue 5: Git Clone Issues
```bash
# If HTTPS doesn't work, try SSH
git clone git@github.com:AshviniTayde/ecommerce-fullstack.git

# Or check your Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 💻 Development Workflow

### Making Changes

#### Frontend Changes
- Edit files in `client/src/`
- Components are in `client/src/Components/`
- Styles are in respective `.css` files
- Hot reload is enabled - changes appear automatically

#### Backend Changes
- Edit files in `server/`
- Routes are in `server/routes/`
- Models are in `server/models/`
- Restart server to see changes (or use nodemon)

### Adding New Features

#### New React Component
```bash
# Create component directory
mkdir client/src/Components/NewComponent

# Create component files
touch client/src/Components/NewComponent/NewComponent.js
touch client/src/Components/NewComponent/NewComponent.css
```

#### New API Route
```bash
# Create new route file
touch server/routes/newRoute.js

# Add to main app.js
```

### Git Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Add new feature: description"

# Push to repository
git push origin master
```

---

## 📁 Project Structure

```
ecommerce-fullstack/
├── client/                     # React Frontend
│   ├── public/                 # Static files
│   ├── src/
│   │   ├── Components/         # React Components
│   │   │   ├── Header/         # Navigation
│   │   │   ├── home/           # Homepage
│   │   │   ├── cart/           # Shopping Cart
│   │   │   ├── buynow/         # Checkout
│   │   │   ├── footer/         # Footer
│   │   │   └── signup_signin/  # Authentication
│   │   ├── redux/              # State Management
│   │   └── App.js              # Main App Component
│   └── package.json            # Frontend Dependencies
├── server/                     # Node.js Backend
│   ├── models/                 # Database Models
│   ├── routes/                 # API Routes
│   ├── db/                     # Database Connection
│   ├── constant/               # Static Data
│   ├── app.js                  # Server Entry Point
│   └── package.json            # Backend Dependencies
├── README.md                   # Project Documentation
├── DEPLOYMENT.md               # Deployment Guide
├── SETUP.md                    # This Setup Guide
├── package.json                # Root Package File
└── .gitignore                  # Git Ignore Rules
```

---

## 📜 Available Scripts

### Root Directory Scripts
```bash
npm run dev              # Start both client and server
npm run client           # Start frontend only
npm run server           # Start backend only
npm run build           # Build client for production
npm run install-all     # Install client and server dependencies
npm run install-client  # Install client dependencies only
npm run install-server  # Install server dependencies only
```

### Client Scripts
```bash
cd client
npm start               # Start development server
npm run build          # Build for production
npm test               # Run tests
npm run eject          # Eject from Create React App
```

### Server Scripts
```bash
cd server
npm start              # Start server
npm run dev            # Start with nodemon (if configured)
```

---

## 🎯 What You Should See

### Frontend (http://localhost:3000)
- ✅ **Homepage** with product carousels
- ✅ **Navigation bar** with search functionality
- ✅ **Product listings** with Material-UI design
- ✅ **Authentication pages** (Sign up/Sign in)
- ✅ **Shopping cart** functionality
- ✅ **Responsive design** for mobile/desktop

### Backend (http://localhost:8005)
- ✅ **API endpoints** responding
- ✅ **Database connection** established
- ✅ **CORS** configured for frontend
- ✅ **Authentication routes** working

### Console Output
```
> npm run dev

[0] > server@1.0.0 start
[0] > node app.js
[0] server is running on port 8005
[1] > client@0.1.0 start
[1] > react-scripts start
[1] webpack compiled with 0 errors
[1] Local:            http://localhost:3000
```

---

## 🎉 Success Checklist

- ✅ Repository cloned successfully
- ✅ All dependencies installed (root, client, server)
- ✅ Environment variables configured
- ✅ Database connection established (if using backend)
- ✅ Frontend accessible at http://localhost:3000
- ✅ Backend accessible at http://localhost:8005
- ✅ No console errors in browser or terminal
- ✅ Hot reload working for development

---

## 🆘 Need Help?

If you encounter any issues:

1. **Check this troubleshooting section** above
2. **Verify all prerequisites** are installed
3. **Check console errors** in browser and terminal
4. **Ensure ports 3000 and 8005** are available
5. **Try clearing node_modules** and reinstalling

## 🚀 Next Steps

Once your project is running:
- Explore the codebase in `client/src/Components/`
- Test the authentication flow
- Add products to cart
- Customize the styling
- Set up your own MongoDB database
- Deploy to production

---

## 📞 Support

For additional support:
- **Repository**: https://github.com/AshviniTayde/ecommerce-fullstack
- **Issues**: Create an issue on GitHub
- **Documentation**: Check README.md and DEPLOYMENT.md

---

**Happy Coding!** 🎊
