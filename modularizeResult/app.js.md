# app.js


```js
1: const express = require('express');
 2: const cors = require('cors');
 3: const helmet = require('helmet');
 4: 
 5: 
 6: const orderRoutes = require('./routes/orderRoutes');
 7: 
 8: 
 9: const config = require('./config/config');
10: const dataAccess = require('./data/dataAccess');
11: 
12: 
13: const app = express();
14: 
15: 
16: app.use(helmet());
17: app.use(cors());
18: app.use(express.json());
19: 
20: 
21: dataAccess.initializeDummyData();
22: 
23: 
24: app.use('/orders', orderRoutes);
25: 
26: 
27: app.get('/health', (req, res) => {
28:   res.json({
29:     success: true,
30:     message: 'Order Service is running',
31:     timestamp: new Date().toISOString()
32:   });
33: });
34: 
35: 
36: app.listen(config.PORT, () => {
37:   console.log(`Order Service is running on port ${config.PORT}`);
38:   console.log(`Available endpoints:`);
39:   console.log(`- POST /orders - Create a new order`);
40:   console.log(`- GET /orders/{orderId} - Get order details`);
41:   console.log(`- PUT /orders/{orderId} - Update order`);
42:   console.log(`- POST /orders/validate - Validate order ID`);
43:   console.log(`- GET /health - Health check`);
44: });
45: 
46: module.exports = app;
```
