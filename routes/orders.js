const express = require("express");

const router = express.Router();

// The activity only needs in-memory storage, so an array is enough here.
let orders = [
  {
    id: 1,
    customerName: "Rahul",
    restaurant: "Burger Singh",
    item: "Chicken Burger",
    amount: 249,
    status: "Pending"
  },
  {
    id: 2,
    customerName: "Ananya",
    restaurant: "Domino's",
    item: "Farmhouse Pizza",
    amount: 399,
    status: "Preparing"
  },
  {
    id: 3,
    customerName: "Aman",
    restaurant: "Subway",
    item: "Veggie Sub",
    amount: 199,
    status: "Delivered"
  },
  {
    id: 4,
    customerName: "Priya",
    restaurant: "Biryani Blues",
    item: "Chicken Biryani",
    amount: 299,
    status: "Out for Delivery"
  },
  {
    id: 5,
    customerName: "Karan",
    restaurant: "Haldiram's",
    item: "Chole Bhature",
    amount: 180,
    status: "Delivered"
  }
];

let nextId = 6;

// Read all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// Read one order using its ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
});

// Create a new order
router.post("/", (req, res) => {
  const { customerName, restaurant, item, amount, status } = req.body;

  if (!customerName || !restaurant || !item || amount === undefined) {
    return res.status(400).json({
      message: "customerName, restaurant, item and amount are required"
    });
  }

  const newOrder = {
    id: nextId++,
    customerName,
    restaurant,
    item,
    amount,
    status: status || "Pending"
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

// Update an existing order
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const orderIndex = orders.findIndex((order) => order.id === id);

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  const { customerName, restaurant, item, amount, status } = req.body;

  if (!customerName || !restaurant || !item || amount === undefined || !status) {
    return res.status(400).json({
      message: "customerName, restaurant, item, amount and status are required"
    });
  }

  orders[orderIndex] = {
    id,
    customerName,
    restaurant,
    item,
    amount,
    status
  };

  res.json(orders[orderIndex]);
});

// Delete an order
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const orderIndex = orders.findIndex((order) => order.id === id);

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  const deletedOrder = orders.splice(orderIndex, 1)[0];

  res.json({
    message: "Order deleted successfully",
    order: deletedOrder
  });
});

module.exports = router;
