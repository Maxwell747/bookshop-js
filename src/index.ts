import express, { Express } from "express";
import * as handlers from "./handlers";
import bodyParser from "body-parser";
import { validation } from "./validation";
import { Logger } from "tslog";
import { appendFileSync } from "fs";

const logger = new Logger();
logger.attachTransport((logObj) => {
  appendFileSync("logs.txt", JSON.stringify(logObj) + "\n");
});

const app: Express = express();
const port = 8080;

app.use(bodyParser.json());
app.use(validation);

app.post("/books/new", (req, res) => {
  handlers.createBook(req, res);
  logger.info("Created a new book");
});

app.get("/books/price", (req, res) => {
  handlers.getPrice(req, res);
  logger.info("Retrieved book prices");
});

app.post("/customers/new", (req, res) => {
  handlers.createCustomer(req, res);
  logger.info("Created a new customer");
});

app.put("/customers/address", (req, res) => {
  handlers.updateCustomerAddress(req, res);
  logger.info("Updated customer address");
});

app.get("/customers/balance", (req, res) => {
  handlers.getCustomerBalance(req, res);
  logger.info("Retrieved customer balance");
});

app.post("/orders/new", (req, res) => {
  handlers.createOrder(req, res);
  logger.info("Created a new order");
});

app.get("/orders/shipped", (req, res) => {
  handlers.getShipmentStatus(req, res);
  logger.info("Retrieved shipment status");
});

app.put("/orders/ship", (req, res) => {
  handlers.shipOrder(req, res);
  logger.info("Shipped an order");
});

app.get("/orders/status", (req, res) => {
  handlers.getOrderStatus(req, res);
  logger.info("Retrieved order status");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
