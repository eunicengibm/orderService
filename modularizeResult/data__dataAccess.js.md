# data/dataAccess.js


```js
1: let orders = [];
 2: 
 3: 
 4: const initializeDummyData = () => {
 5: 
 6:   orders = [
 7:     {
 8:       id: 'order-001',
 9:       productId: 'prod-001',
10:       quantity: 2,
11:       status: 'completed',
12:       totalAmount: 1999.98,
13:       createdAt: new Date('2024-01-15T10:30:00Z'),
14:       updatedAt: new Date('2024-01-15T10:35:00Z')
15:     },
16:     {
17:       id: 'order-002',
18:       productId: 'prod-002',
19:       quantity: 1,
20:       status: 'pending',
21:       totalAmount: 29.99,
22:       createdAt: new Date('2024-01-16T14:20:00Z'),
23:       updatedAt: new Date('2024-01-16T14:20:00Z')
24:     }
25:   ];
26: };
27: 
28: 
29: const getAllOrders = () => {
30:   return orders;
31: };
32: 
33: const findOrderById = (orderId) => {
34:   return orders.find(order => order.id === orderId);
35: };
36: 
37: const createOrder = (orderData) => {
38:   orders.push(orderData);
39:   return orderData;
40: };
41: 
42: const updateOrder = (orderId, updateData) => {
43:   const orderIndex = orders.findIndex(o => o.id === orderId);
44:   if (orderIndex === -1) return null;
45: 
46:   const order = orders[orderIndex];
47:   Object.assign(order, updateData);
48:   order.updatedAt = new Date();
49: 
50:   return order;
51: };
52: 
53: module.exports = {
54:   initializeDummyData,
55:   getAllOrders,
56:   findOrderById,
57:   createOrder,
58:   updateOrder
59: };
```
