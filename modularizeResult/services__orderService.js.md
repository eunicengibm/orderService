# services/orderService.js


```js
1: const { v4: uuidv4 } = require('uuid');
  2: const dataAccess = require('../data/dataAccess');
  3: const config = require('../config/config');
  4: 
  5: const validateOrder = (productId, quantity) => {
  6:   const errors = [];
  7: 
  8:   if (!productId) errors.push('Product ID is required');
  9:   if (!quantity || quantity <= 0) errors.push('Valid quantity is required');
 10: 
 11:   return {
 12:     isValid: errors.length === 0,
 13:     errors
 14:   };
 15: };
 16: 
 17: const createOrder = async (orderData) => {
 18:   const { productId, quantity, totalAmount } = orderData;
 19: 
 20: 
 21:   const validation = validateOrder(productId, quantity);
 22:   if (!validation.isValid) {
 23:     return {
 24:       success: false,
 25:       message: config.MESSAGES.VALIDATION_FAILED,
 26:       errors: validation.errors
 27:     };
 28:   }
 29: 
 30: 
 31:   const orderId = uuidv4();
 32:   const newOrder = {
 33:     id: orderId,
 34:     productId,
 35:     quantity,
 36:     status: config.ORDER_STATUSES.PENDING,
 37:     totalAmount: totalAmount || 0,
 38:     createdAt: new Date(),
 39:     updatedAt: new Date()
 40:   };
 41: 
 42:   dataAccess.createOrder(newOrder);
 43: 
 44:   return {
 45:     success: true,
 46:     message: config.MESSAGES.ORDER_CREATED,
 47:     order: newOrder
 48:   };
 49: };
 50: 
 51: const getOrderById = (orderId) => {
 52:   const order = dataAccess.findOrderById(orderId);
 53:   if (!order) {
 54:     return {
 55:       success: false,
 56:       message: config.MESSAGES.ORDER_NOT_FOUND
 57:     };
 58:   }
 59: 
 60:   return {
 61:     success: true,
 62:     order
 63:   };
 64: };
 65: 
 66: const updateOrder = (orderId, updateData) => {
 67:   const existingOrder = dataAccess.findOrderById(orderId);
 68:   if (!existingOrder) {
 69:     return {
 70:       success: false,
 71:       message: config.MESSAGES.ORDER_NOT_FOUND
 72:     };
 73:   }
 74: 
 75:   const { status, quantity, totalAmount } = updateData;
 76:   const updates = {};
 77: 
 78: 
 79:   if (status) updates.status = status;
 80:   if (quantity && quantity > 0) updates.quantity = quantity;
 81:   if (totalAmount !== undefined) updates.totalAmount = totalAmount;
 82: 
 83:   const updatedOrder = dataAccess.updateOrder(orderId, updates);
 84: 
 85:   return {
 86:     success: true,
 87:     message: config.MESSAGES.ORDER_UPDATED,
 88:     order: updatedOrder
 89:   };
 90: };
 91: 
 92: const getAllOrders = () => {
 93:   const orders = dataAccess.getAllOrders();
 94:   return {
 95:     success: true,
 96:     orders,
 97:     total: orders.length
 98:   };
 99: };
100: 
101: const validateOrderId = (orderId) => {
102:   if (!orderId) {
103:     return {
104:       success: false,
105:       message: config.MESSAGES.INVALID_ORDER_ID
106:     };
107:   }
108: 
109:   const order = dataAccess.findOrderById(orderId);
110:   const isValid = !!order;
111: 
112:   return {
113:     success: true,
114:     isValid,
115:     message: isValid ? config.MESSAGES.ORDER_ID_VALID : config.MESSAGES.ORDER_ID_INVALID,
116:     orderId
117:   };
118: };
119: 
120: module.exports = {
121:   createOrder,
122:   getOrderById,
123:   updateOrder,
124:   getAllOrders,
125:   validateOrderId
126: };
```
