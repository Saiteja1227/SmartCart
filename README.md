# 🛒 SmartCart E-Commerce Application

## 📖 Overview

**SmartCart** is a fully-featured e-commerce web application built with React, Node.js/Express, and MongoDB. It provides a complete online shopping experience with user authentication, product management, shopping cart, order processing, and an admin dashboard.

---

## ✨ Features

### 🛍️ Customer Features
- **User Authentication** - Register, login, password reset
- **Product Browsing** - Browse products by category with search and filters
- **Product Details** - View detailed product information with images
- **Shopping Cart** - Add, remove, and manage cart items
- **Checkout** - Complete purchase with address and payment details
- **Order History** - View past orders and track status
- **User Profile** - Manage personal information with avatar display
- **Wishlist** - Save favorite products
- **Responsive Design** - Works on desktop, tablet, and mobile

### 👨‍💼 Admin Features
- **Admin Dashboard** - Overview of sales, orders, and products
- **Product Management** - Add, edit, and delete products
- **Order Management** - View and update order status
- **User Management** - View registered users

---

## 🏗️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Axios** - HTTP client
- **Context API** - State management
- **Font Awesome** - Icons
- **Google Fonts (Poppins)** - Typography

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

---

## 🎨 Design Features

### Visual Elements
- **Professional Logo** - Custom SVG logo with branding
- **Dynamic Avatars** - Auto-generated user avatars based on initials
- **Product Images** - Category-based product images from Unsplash
- **Animated Hero Banner** - Auto-rotating promotional banners
- **Category Icons** - Emoji-based category visualization
- **Color Scheme**:
  - Primary: #FF6B6B (Coral Red)
  - Secondary: #4ECDC4 (Turquoise)
  - Dark: #2D3748
  - Light: #F7FAFC

### UI/UX Features
- Amazon-inspired navigation
- Card-based layouts
- Hover animations and transitions
- Responsive grid systems
- Modern glassmorphism effects
- Smooth scrolling
- Loading states

---

## 📂 Project Structure

```
smartcart/
├── frontend (something/)
│   ├── public/
│   │   ├── logo.svg          ← Brand logo
│   │   ├── favicon.ico       ← Favicon
│   │   ├── index.html        ← Entry HTML
│   │   └── manifest.json     ← PWA manifest
│   ├── src/
│   │   ├── assets/
│   │   │   ├── avatars.js    ← Avatar generator
│   │   │   └── productImages.js ← Product image utilities
│   │   ├── components/
│   │   │   ├── Navbar.jsx    ← Main navigation
│   │   │   ├── ProductCard.jsx ← Product display card
│   │   │   └── AdminSidebar.jsx ← Admin navigation
│   │   ├── context/
│   │   │   ├── AuthContext.js ← Authentication state
│   │   │   └── CartContext.js ← Shopping cart state
│   │   ├── pages/
│   │   │   ├── HomePage.jsx  ← Landing page
│   │   │   ├── ProductsPage.jsx ← Product listing
│   │   │   ├── CartPage.jsx   ← Shopping cart
│   │   │   ├── AccountPage.jsx ← User profile
│   │   │   └── (13+ pages)
│   │   ├── App.js            ← Main app component
│   │   ├── index.js          ← Entry point
│   │   └── index.css         ← Global styles
│   └── package.json
│
└── backend (firstproject/smartcart/)
    ├── src/
    │   ├── config/
    │   │   └── db.js         ← MongoDB connection
    │   ├── models/
    │   │   ├── User.js       ← User schema
    │   │   ├── Product.js    ← Product schema
    │   │   ├── Cart.js       ← Cart schema
    │   │   └── Order.js      ← Order schema
    │   └── routes/
    │       ├── auth.js       ← Authentication routes
    │       ├── products.js   ← Product routes
    │       ├── cart.js       ← Cart routes
    │       └── orders.js     ← Order routes
    ├── server.js             ← Express server
    ├── .env                  ← Environment variables
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd /Users/saiteja/Desktop/mini_p
```

2. **Setup Backend**
```bash
cd firstproject/smartcart
npm install

# Update .env file with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/smartcart
# or use MongoDB Atlas connection string

npm start
# Backend runs on http://localhost:5000
```

3. **Setup Frontend**
```bash
cd ../../something
npm install
npm start
# Frontend runs on http://localhost:3000
```

4. **Open your browser**
```
http://localhost:3000
```

---

## 🔑 Default Credentials

### Test User Account
- **Email**: test@example.com
- **Password**: test123

### Admin Account
- **Email**: admin@smartcart.com
- **Password**: admin123

---

## 📱 Pages & Routes

### Public Routes
- `/` - Home page with featured products
- `/products` - All products with filters
- `/product/:id` - Product details
- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password recovery

### Protected User Routes
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/my-orders` - Order history
- `/account` - Account dashboard
- `/account/profile` - Profile settings
- `/account/addresses` - Manage addresses
- `/account/payment` - Payment methods
- `/account/security` - Security settings

### Admin Routes
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/add-product` - Add new product
- `/admin/manage-products` - Manage products
- `/admin/orders` - Manage orders

---

## 🎯 Key Components

### Avatar System
Auto-generates colorful avatars based on user names:
```javascript
import { generateAvatar } from './assets/avatars';
const avatar = generateAvatar('John Doe', 100);
```

### Product Images
Category-based product images from Unsplash:
```javascript
import { generateProductImage } from './assets/productImages';
const image = generateProductImage('Electronics', 'Laptop', 0);
```

### State Management
- **AuthContext** - User authentication state
- **CartContext** - Shopping cart state

---

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password reset

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status (Admin)

---

## 🎨 Customization

### Colors
Update colors in `/something/src/index.css`:
```css
:root {
  --primary-color: #FF6B6B;
  --secondary-color: #4ECDC4;
  --dark-color: #2D3748;
}
```

### Logo
Replace `/something/public/logo.svg` with your logo

### Product Categories
Add categories in `/something/src/assets/productImages.js`

---

## 📦 Build for Production

### Frontend
```bash
cd something
npm run build
# Build files in build/ folder
```

### Backend
```bash
cd firstproject/smartcart
# Deploy to your hosting service (Heroku, AWS, etc.)
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Error
- Check if MongoDB is running
- Verify MONGODB_URI in .env file
- Check network connectivity for MongoDB Atlas

### Dependencies Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🚧 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Real-time notifications
- [ ] Email notifications
- [ ] Advanced search with filters
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA features (offline mode)
- [ ] Social media integration

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Developer

Created with ❤️ by the SmartCart Team

---

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- UI inspiration from Amazon and modern e-commerce sites

---

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Email: support@smartcart.com

---

**Happy Shopping! 🛍️**
