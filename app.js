const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const orderRoutes = require('./routes/orderRoutes');

// Import configuration and data initialization
const config = require('./config/config');
const dataAccess = require('./data/dataAccess');

// Create Express app
const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Initialize dummy data
dataAccess.initializeDummyData();

// Routes
app.use('/orders', orderRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Order Service is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(config.PORT, () => {
  console.log(`Order Service is running on port ${config.PORT}`);
  console.log(`Available endpoints:`);
  console.log(`- POST /orders - Create a new order`);
  console.log(`- GET /orders/{orderId} - Get order details`);
  console.log(`- PUT /orders/{orderId} - Update order`);
  console.log(`- POST /orders/validate - Validate order ID`);
  console.log(`- GET /health - Health check`);
});

module.exports = app;