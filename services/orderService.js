const { v4: uuidv4 } = require('uuid');
const dataAccess = require('../data/dataAccess');
const config = require('../config/config');

const validateOrder = (productId, quantity) => {
  const errors = [];
  
  if (!productId) errors.push('Product ID is required');
  if (!quantity || quantity <= 0) errors.push('Valid quantity is required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

const createOrder = async (orderData) => {
  const { productId, quantity, totalAmount } = orderData;
  
  // Validate order
  const validation = validateOrder(productId, quantity);
  if (!validation.isValid) {
    return {
      success: false,
      message: config.MESSAGES.VALIDATION_FAILED,
      errors: validation.errors
    };
  }
  
  // Create order
  const orderId = uuidv4();
  const newOrder = {
    id: orderId,
    productId,
    quantity,
    status: config.ORDER_STATUSES.PENDING,
    totalAmount: totalAmount || 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  dataAccess.createOrder(newOrder);
  
  return {
    success: true,
    message: config.MESSAGES.ORDER_CREATED,
    order: newOrder
  };
};

const getOrderById = (orderId) => {
  const order = dataAccess.findOrderById(orderId);
  if (!order) {
    return {
      success: false,
      message: config.MESSAGES.ORDER_NOT_FOUND
    };
  }
  
  return {
    success: true,
    order
  };
};

const updateOrder = (orderId, updateData) => {
  const existingOrder = dataAccess.findOrderById(orderId);
  if (!existingOrder) {
    return {
      success: false,
      message: config.MESSAGES.ORDER_NOT_FOUND
    };
  }
  
  const { status, quantity, totalAmount } = updateData;
  const updates = {};
  
  // Update allowed fields
  if (status) updates.status = status;
  if (quantity && quantity > 0) updates.quantity = quantity;
  if (totalAmount !== undefined) updates.totalAmount = totalAmount;
  
  const updatedOrder = dataAccess.updateOrder(orderId, updates);
  
  return {
    success: true,
    message: config.MESSAGES.ORDER_UPDATED,
    order: updatedOrder
  };
};

const getAllOrders = () => {
  const orders = dataAccess.getAllOrders();
  return {
    success: true,
    orders,
    total: orders.length
  };
};

const validateOrderId = (orderId) => {
  if (!orderId) {
    return {
      success: false,
      message: config.MESSAGES.INVALID_ORDER_ID
    };
  }
  
  const order = dataAccess.findOrderById(orderId);
  const isValid = !!order;
  
  return {
    success: true,
    isValid,
    message: isValid ? config.MESSAGES.ORDER_ID_VALID : config.MESSAGES.ORDER_ID_INVALID,
    orderId
  };
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrder,
  getAllOrders,
  validateOrderId
};