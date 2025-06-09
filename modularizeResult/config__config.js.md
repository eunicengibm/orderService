# config/config.js


```js
1: module.exports = {
 2:   PORT: process.env.PORT || 3000,
 3:   NODE_ENV: process.env.NODE_ENV || 'development',
 4: 
 5: 
 6:   PAYMENT_SUCCESS_RATE: 0.9,
 7: 
 8: 
 9:   ORDER_STATUSES: {
10:     PENDING: 'pending',
11:     PROCESSING: 'processing',
12:     COMPLETED: 'completed',
13:     CANCELLED: 'cancelled',
14:     SHIPPED: 'shipped',
15:     DELIVERED: 'delivered'
16:   },
17: 
18: 
19:   MESSAGES: {
20:     ORDER_CREATED: 'Order created successfully',
21:     ORDER_UPDATED: 'Order updated successfully',
22:     ORDER_NOT_FOUND: 'Order not found',
23:     VALIDATION_FAILED: 'Order validation failed',
24:     INTERNAL_ERROR: 'Internal server error',
25:     INVALID_ORDER_ID: 'Order ID is required',
26:     ORDER_ID_VALID: 'Order ID is valid',
27:     ORDER_ID_INVALID: 'Order ID is not valid'
28:   }
29: };
```
