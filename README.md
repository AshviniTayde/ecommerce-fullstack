# Amazon Clone - Full Stack E-commerce Application

A full-stack e-commerce web application built with React.js frontend and Node.js/Express backend, featuring user authentication, product catalog, shopping cart, and order management.

## 🚀 Features

- **User Authentication**: Sign up, sign in, and secure user sessions
- **Product Catalog**: Browse and search through products
- **Shopping Cart**: Add, remove, and manage cart items
- **Responsive Design**: Mobile-friendly interface using Material-UI
- **State Management**: Redux for efficient state handling
- **Real-time Updates**: Dynamic cart and product updates

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Redux & Redux Toolkit** - State management
- **Material-UI (@mui/material)** - Component library
- **React Router DOM** - Navigation
- **React Toastify** - Notifications
- **React Carousel** - Product image sliders

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── Components/    # React components
│   │   │   ├── Header/    # Navigation components
│   │   │   ├── home/      # Home page components
│   │   │   ├── cart/      # Shopping cart
│   │   │   ├── buynow/    # Checkout process
│   │   │   ├── footer/    # Footer component
│   │   │   └── signup_signin/ # Authentication
│   │   ├── redux/         # Redux store and actions
│   │   └── images/        # Static images
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   ├── db/              # Database connection
│   ├── constant/        # Static data
│   └── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amazon-clone
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the server directory:
   ```env
   PORT=8005
   MONGODB_URI=mongodb://localhost:27017/amazonclone
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Run the Application**
   
   **Start Backend Server:**
   ```bash
   cd server
   npm start
   ```

   **Start Frontend (in a new terminal):**
   ```bash
   cd client
   npm start
   ```

   The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8005

## 📱 Usage

1. **Browse Products**: View the product catalog on the home page
2. **User Registration**: Create a new account or sign in
3. **Add to Cart**: Add products to your shopping cart
4. **Checkout**: Proceed through the buying process
5. **Order Management**: View and manage your orders

## 🔧 API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/cart/add` - Add item to cart
- `DELETE /api/cart/remove/:id` - Remove item from cart

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Your Name** - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Inspired by Amazon's user interface
- Built with modern React and Node.js best practices
- Material-UI for beautiful components

---

⭐ Star this repo if you found it helpful!
