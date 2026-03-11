# 🚀 Quick Start Guide

## Start the Application

### Option 1: Using the Start Script (Recommended)
```bash
cd /Users/saiteja/Desktop/mini_p
chmod +x start.sh
./start.sh
```

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd /Users/saiteja/Desktop/mini_p/firstproject/smartcart
npm start
```

**Terminal 2 - Frontend:**
```bash
cd /Users/saiteja/Desktop/mini_p/something
npm start
```

## Access the Application

- 🌐 **Frontend**: [http://localhost:3000](http://localhost:3000)
- 🔧 **Backend**: [http://localhost:5000](http://localhost:5000)

## Test Accounts

### User Account
- Email: `test@example.com`
- Password: `test123`

### Admin Account
- Email: `admin@smartcart.com`
- Password: `admin123`

## Quick Tour

1. **Browse Products** - Visit homepage to see featured products
2. **Search** - Use the search bar to find specific products
3. **Add to Cart** - Click "Add to Cart" on any product
4. **Login** - Sign in to manage your cart and orders
5. **Checkout** - Complete your purchase
6. **View Orders** - Check your order history
7. **Admin Panel** - Login as admin to manage products

## Troubleshooting

### MongoDB Not Running?
```bash
# Mac (Homebrew)
brew services start mongodb-community

# Or manually
mongod --dbpath /path/to/data/db
```

### Port Already in Use?
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Need to Reset?
```bash
# Clear and reinstall dependencies
cd something
rm -rf node_modules package-lock.json
npm install

cd ../firstproject/smartcart
rm -rf node_modules package-lock.json
npm install
```

## Features to Try

✅ User registration and login  
✅ Browse products by category  
✅ Search products  
✅ View product details  
✅ Add products to cart  
✅ Update cart quantities  
✅ Checkout process  
✅ View order history  
✅ User profile with avatar  
✅ Admin dashboard  
✅ Admin product management  
✅ Admin order management  

## Next Steps

Check out the full [README.md](README.md) for:
- Complete feature list
- API documentation
- Customization guide
- Deployment instructions

---

**Enjoy shopping! 🛍️**
