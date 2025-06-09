const orderService = require('../services/orderService');
const config = require('../config/config');

// POST /orders - Create a new order
const createOrder = async (req, res) => {
  try {
    const { productId, quantity, totalAmount } = req.body;
    
    const result = await orderService.createOrder({ productId, quantity, totalAmount });
    
    if (!result.success) {
      return res.status(400).json(result);
    }
    
    res.status(201).json(result);
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: config.MESSAGES.INTERNAL_ERROR,
      error: error.message
    });
  }
};

// GET /orders/{orderId} - Get order details and status
const getOrder = (req, res) => {
  try {
    const { orderId } = req.params;
    
    const result = orderService.getOrderById(orderId);
    
    if (!result.success) {
      return res.status(404).json(result);
    }
    
    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: config.MESSAGES.INTERNAL_ERROR,
      error: error.message
    });
  }
};

// PUT /orders/{orderId} - Update order
const updateOrder = (req, res) => {
  try {
    const { orderId } = req.params;
    const updateData = req.body;
    
    const result = orderService.updateOrder(orderId, updateData);
    
    if (!result.success) {
      return res.status(404).json(result);
    }
    
    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: config.MESSAGES.INTERNAL_ERROR,
      error: error.message
    });
  }
};

// POST /orders/validate - Check if an order ID is valid
const validateOrder = (req, res) => {
  try {
    const { orderId } = req.body;
    
    const result = orderService.validateOrderId(orderId);
    
    if (!result.success) {
      return res.status(400).json(result);
    }
    
    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: config.MESSAGES.INTERNAL_ERROR,
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  validateOrder
};