# controllers/orderController.js


```js
1: const orderService = require('../services/orderService');
 2: const config = require('../config/config');
 3: 
 4: 
 5: const createOrder = async (req, res) => {
 6:   try {
 7:     const { productId, quantity, totalAmount } = req.body;
 8: 
 9:     const result = await orderService.createOrder({ productId, quantity, totalAmount });
10: 
11:     if (!result.success) {
12:       return res.status(400).json(result);
13:     }
14: 
15:     res.status(201).json(result);
16: 
17:   } catch (error) {
18:     res.status(500).json({
19:       success: false,
20:       message: config.MESSAGES.INTERNAL_ERROR,
21:       error: error.message
22:     });
23:   }
24: };
25: 
26: 
27: const getOrder = (req, res) => {
28:   try {
29:     const { orderId } = req.params;
30: 
31:     const result = orderService.getOrderById(orderId);
32: 
33:     if (!result.success) {
34:       return res.status(404).json(result);
35:     }
36: 
37:     res.json(result);
38: 
39:   } catch (error) {
40:     res.status(500).json({
41:       success: false,
42:       message: config.MESSAGES.INTERNAL_ERROR,
43:       error: error.message
44:     });
45:   }
46: };
47: 
48: 
49: const updateOrder = (req, res) => {
50:   try {
51:     const { orderId } = req.params;
52:     const updateData = req.body;
53: 
54:     const result = orderService.updateOrder(orderId, updateData);
55: 
56:     if (!result.success) {
57:       return res.status(404).json(result);
58:     }
59: 
60:     res.json(result);
61: 
62:   } catch (error) {
63:     res.status(500).json({
64:       success: false,
65:       message: config.MESSAGES.INTERNAL_ERROR,
66:       error: error.message
67:     });
68:   }
69: };
70: 
71: 
72: const validateOrder = (req, res) => {
73:   try {
74:     const { orderId } = req.body;
75: 
76:     const result = orderService.validateOrderId(orderId);
77: 
78:     if (!result.success) {
79:       return res.status(400).json(result);
80:     }
81: 
82:     res.json(result);
83: 
84:   } catch (error) {
85:     res.status(500).json({
86:       success: false,
87:       message: config.MESSAGES.INTERNAL_ERROR,
88:       error: error.message
89:     });
90:   }
91: };
92: 
93: module.exports = {
94:   createOrder,
95:   getOrder,
96:   updateOrder,
97:   validateOrder
98: };
```
