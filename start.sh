#!/bin/bash

echo "🛒 Starting SmartCart E-Commerce Application..."
echo ""

# Check if MongoDB is running
echo "📦 Checking MongoDB..."
if pgrep -x "mongod" > /dev/null
then
    echo "✅ MongoDB is running"
else
    echo "⚠️  MongoDB is not running. Please start MongoDB first."
    echo "   Run: brew services start mongodb-community"
    echo "   Or: mongod --dbpath /path/to/your/db"
fi

echo ""

# Start backend
echo "🚀 Starting Backend Server..."
cd firstproject/smartcart
npm start &
BACKEND_PID=$!
echo "✅ Backend started on http://localhost:5000 (PID: $BACKEND_PID)"

echo ""

# Wait for backend to start
sleep 3

# Start frontend
echo "🎨 Starting Frontend..."
cd ../../something
BROWSER=none npm start &
FRONTEND_PID=$!
echo "✅ Frontend starting on http://localhost:3000 (PID: $FRONTEND_PID)"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ SmartCart is running!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend:  http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all servers"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Wait for user to press Ctrl+C
wait
