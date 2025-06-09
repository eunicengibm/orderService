# routes/orderRoutes.js


```js
1: const express = require('express');
 2: const orderController = require('../controllers/orderController');
 3: 
 4: const router = express.Router();
 5: 
 6: 
 7: router.post('/', orderController.createOrder);
 8: router.get('/:orderId', orderController.getOrder);
 9: router.put('/:orderId', orderController.updateOrder);
10: router.post('/validate', orderController.validateOrder);
11: 
12: module.exports = router;
```
