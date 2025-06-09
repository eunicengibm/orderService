// In-memory storage for demo purposes
let orders = [];

// Initialize dummy data
const initializeDummyData = () => {
  // Dummy orders
  orders = [
    {
      id: 'order-001',
      productId: 'prod-001',
      quantity: 2,
      status: 'completed',
      totalAmount: 1999.98,
      createdAt: new Date('2024-01-15T10:30:00Z'),
      updatedAt: new Date('2024-01-15T10:35:00Z')
    },
    {
      id: 'order-002',
      productId: 'prod-002',
      quantity: 1,
      status: 'pending',
      totalAmount: 29.99,
      createdAt: new Date('2024-01-16T14:20:00Z'),
      updatedAt: new Date('2024-01-16T14:20:00Z')
    }
  ];
};

// Order data access
const getAllOrders = () => {
  return orders;
};

const findOrderById = (orderId) => {
  return orders.find(order => order.id === orderId);
};

const createOrder = (orderData) => {
  orders.push(orderData);
  return orderData;
};

const updateOrder = (orderId, updateData) => {
  const orderIndex = orders.findIndex(o => o.id === orderId);
  if (orderIndex === -1) return null;
  
  const order = orders[orderIndex];
  Object.assign(order, updateData);
  order.updatedAt = new Date();
  
  return order;
};

module.exports = {
  initializeDummyData,
  getAllOrders,
  findOrderById,
  createOrder,
  updateOrder
};