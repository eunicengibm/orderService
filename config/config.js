module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Payment processing settings
  PAYMENT_SUCCESS_RATE: 0.9, // 90% success rate for simulation
  
  // Order status options
  ORDER_STATUSES: {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered'
  },
  
  // API response messages
  MESSAGES: {
    ORDER_CREATED: 'Order created successfully',
    ORDER_UPDATED: 'Order updated successfully',
    ORDER_NOT_FOUND: 'Order not found',
    VALIDATION_FAILED: 'Order validation failed',
    INTERNAL_ERROR: 'Internal server error',
    INVALID_ORDER_ID: 'Order ID is required',
    ORDER_ID_VALID: 'Order ID is valid',
    ORDER_ID_INVALID: 'Order ID is not valid'
  }
};