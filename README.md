# Food Delivery CRUD API

This is a small REST API made for the CRUD API classroom activity. It manages food-delivery orders using Node.js and Express.

## Technology Used

- Node.js
- Express.js
- JavaScript
- In-memory array for storage
- Postman for testing

No database is used in this activity.

## Order Data

Each order has:

- `id` - unique number
- `customerName` - name of the customer
- `restaurant` - restaurant name
- `item` - food item
- `amount` - order amount
- `status` - current order status

## How to Run

Make sure Node.js is installed.

Open a terminal in this folder and run:

```bash
npm install
npm start
```

The API will run on:

`http://localhost:3000`

## API Operations

### 1. Get all orders

`GET /orders`

Returns all available orders.

### 2. Create an order

`POST /orders`

Example body:

```json
{
  "customerName": "Jyatin",
  "restaurant": "Burger King",
  "item": "Whopper",
  "amount": 329,
  "status": "Pending"
}
```

A successful request returns status `201`.

### 3. Get an order by ID

`GET /orders/1`

If the ID does not exist, the API returns status `404`.

### 4. Update an order

`PUT /orders/1`

Example body:

```json
{
  "customerName": "Rahul",
  "restaurant": "Burger Singh",
  "item": "Chicken Burger",
  "amount": 279,
  "status": "Delivered"
}
```

### 5. Delete an order

`DELETE /orders/1`

The selected order is removed from the array.

## Postman Testing

The file `postman_collection.json` contains requests for:

1. Reading all orders
2. Creating an order
3. Reading an order by ID
4. Updating an order
5. Deleting an order
6. Checking the 404 response

Import the collection into Postman after starting the server.

## Storage Note

The orders are stored in a JavaScript array because the activity specifically asks for in-memory storage. Therefore, the data goes back to the five initial orders when the server is restarted.
