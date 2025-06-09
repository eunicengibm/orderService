# Order Service

A Node.js-based Order Service that handles basic order operations.

## Features

- ✅ Order creation and validation (product ID, quantity)
- ✅ Order status updates and retrieval
- ✅ Order validation functionality

## API Endpoints

### Core Endpoints

- `POST /orders` - Creates a new order
- `GET /orders/{orderId}` - Gets order details and status  
- `PUT /orders/{orderId}` - Update order
- `POST /orders/validate` - Checks if an order ID is valid

### Helper Endpoints

- `GET /health` - Health check

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will start on port 3000 by default.

## Usage Examples

### Create a New Order

```bash
curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "prod-001",
    "quantity": 1,
    "totalAmount": 999.99
  }'
```

### Get Order Details

```bash
curl http://localhost:3000/orders/order-001
```

### Update Order

```bash
curl -X PUT http://localhost:3000/orders/order-001 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "shipped",
    "quantity": 2,
    "totalAmount": 1999.98
  }'
```

### Validate Order ID

```bash
curl -X POST http://localhost:3000/orders/validate \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "order-001"
  }'
```

## Dummy Data

The service comes pre-loaded with 2 sample orders for testing.

## Error Handling

The service includes comprehensive error handling for:
- Invalid order data
- Missing required fields
- Order not found scenarios

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **helmet**: Security middleware
- **uuid**: Unique identifier generation
- **nodemon**: Development auto-reload (dev dependency)