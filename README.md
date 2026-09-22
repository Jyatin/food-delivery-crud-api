# 🍔 Food Delivery CRUD API

A simple RESTful CRUD API for managing food-delivery orders, built with **Node.js, Express.js, and JavaScript**.

This project was created as a classroom CRUD API activity. It uses an **in-memory JavaScript array** instead of a database, keeping the implementation focused on understanding REST API fundamentals.

## ✨ Features

- Create a new food-delivery order
- View all orders
- View a single order by ID
- Update an existing order
- Delete an order
- JSON request and response handling
- Basic request validation
- `404 Not Found` handling for missing orders
- `201 Created` response when an order is successfully created
- Five sample orders available when the server starts
- Ready-to-use Postman collection for API testing

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| JavaScript | Application logic |
| JSON | API request/response format |
| Postman | API testing |

No MongoDB, Mongoose, Firebase, or other database is required.

## 📁 Project Structure

```text
food-delivery-crud-api/
│
├── data/
│   └── sample-orders.json       # Sample order data
│
├── routes/
│   └── orders.js                # CRUD routes and in-memory data
│
├── postman_collection.json      # Ready-to-import Postman requests
├── .gitignore
├── package.json
├── README.md
└── server.js                    # Express application entry point
```

## 📦 Installation

Make sure **Node.js** and **npm** are installed on your system.

Clone the repository and enter the project directory:

```bash
git clone https://github.com/Jyatin/food-delivery-crud-api.git
cd food-delivery-crud-api
```

Install the dependencies:

```bash
npm install
```

## ▶️ Run the API

Start the server with:

```bash
npm start
```

The server runs at:

```text
http://localhost:3000
```

For development, you can also use:

```bash
npm run dev
```

## 🔗 API Endpoints

Base URL:

```text
http://localhost:3000
```

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Shows API information and available routes |
| `GET` | `/orders` | Returns all orders |
| `GET` | `/orders/:id` | Returns one order by ID |
| `POST` | `/orders` | Creates a new order |
| `PUT` | `/orders/:id` | Updates an existing order |
| `DELETE` | `/orders/:id` | Deletes an order |

## 📋 Order Format

Every order follows this structure:

```json
{
  "id": 1,
  "customerName": "Rahul",
  "restaurant": "Burger Singh",
  "item": "Chicken Burger",
  "amount": 249,
  "status": "Pending"
}
```

### Fields

- **id** — unique identifier for the order
- **customerName** — name of the customer
- **restaurant** — restaurant handling the order
- **item** — food item ordered
- **amount** — total order amount
- **status** — current order status

## ➕ Create an Order

**POST** `/orders`

Request body:

```json
{
  "customerName": "Jyatin",
  "restaurant": "Burger King",
  "item": "Whopper",
  "amount": 329,
  "status": "Pending"
}
```

A successful request returns **HTTP 201 Created** and the newly created order.

If `status` is not supplied, the API uses `Pending` by default.

## 🔍 Read Orders

### Get all orders

**GET** `/orders`

The API starts with five sample orders.

### Get one order

**GET** `/orders/1`

If the requested ID does not exist, the API returns:

```json
{
  "message": "Order not found"
}
```

with **HTTP 404 Not Found**.

## ✏️ Update an Order

**PUT** `/orders/1`

Request body:

```json
{
  "customerName": "Rahul",
  "restaurant": "Burger Singh",
  "item": "Chicken Burger",
  "amount": 279,
  "status": "Delivered"
}
```

The API replaces the order with the updated values while keeping the same ID.

## 🗑️ Delete an Order

**DELETE** `/orders/5`

A successful request removes the order from the in-memory array and returns the deleted order.

If the ID does not exist, the API returns **HTTP 404 Not Found**.

## 🧪 Testing with Postman

A ready-to-use collection is included in:

```text
postman_collection.json
```

It contains requests for:

1. Get all orders
2. Create an order
3. Get an order by ID
4. Update an order
5. Delete an order
6. Test a missing order and the `404` response

Start the API first, then import `postman_collection.json` into Postman.

## 💾 Data Storage

This project intentionally uses an in-memory array for storing orders. There is no database connection.

This means any changes made through POST, PUT, or DELETE exist only while the Node.js server is running. Restarting the server resets the data to the five original sample orders.

## ⚠️ Validation and Error Handling

The API checks that required order fields are provided when creating or updating an order.

Examples of responses include:

**Successful creation:**

```text
201 Created
```

**Order not found:**

```text
404 Not Found
```

**Invalid or incomplete request:**

```text
400 Bad Request
```

## 🎯 Learning Objectives

This project demonstrates the basic concepts behind a REST API:

- HTTP methods and their purpose
- RESTful route design
- Express routing
- JSON request bodies
- HTTP status codes
- CRUD operations
- URL parameters
- Basic input validation
- In-memory data management

## 📄 License

This project was created for educational purposes as part of a classroom CRUD API activity.