const express = require("express");
const orderRoutes = require("./routes/orders");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Food Delivery Orders API",
    routes: [
      "POST /orders",
      "GET /orders",
      "GET /orders/:id",
      "PUT /orders/:id",
      "DELETE /orders/:id"
    ]
  });
});

app.use("/orders", orderRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
