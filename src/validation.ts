import { Request, Response, NextFunction } from "express";

export const validation = (req: Request, res: Response, next: NextFunction) => {
  const endpoint = req.originalUrl.split("/")[1];
  switch (endpoint) {
    case "books":
      if (req.originalUrl.endsWith("/new")) {
        if (
          typeof req.body.title === "string" &&
          typeof req.body.author === "string" &&
          typeof req.body.price === "number"
        ) {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else if (req.originalUrl.endsWith("/price")) {
        if (
          typeof req.body.title === "string" &&
          typeof req.body.author === "string"
        ) {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else {
        res.status(404).send("Invalid endpoint");
      }
      break;
    case "customers":
      if (req.originalUrl.endsWith("/new")) {
        if (
          typeof req.body.name === "string" &&
          typeof req.body.shippingAddress === "string"
        ) {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else if (req.originalUrl.endsWith("/address")) {
        if (
          typeof req.body.cid === "number" &&
          typeof req.body.address === "string"
        ) {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else if (req.originalUrl.endsWith("/balance")) {
        if (typeof req.body.cid === "number") {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else {
        res.status(404).send("Invalid endpoint");
      }
      break;
    case "orders":
      if (
        req.originalUrl.endsWith("/new") ||
        req.originalUrl.endsWith("/shipped")
      ) {
        if (
          typeof req.body.title === "string" &&
          typeof req.body.author === "string" &&
          typeof req.body.name === "string" &&
          typeof req.body.shippingAddress === "string"
        ) {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else if (req.originalUrl.endsWith("/ship")) {
        if (typeof req.body.pid === "number") {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else if (req.originalUrl.endsWith("/status")) {
        if (
          typeof req.body.cid === "number" &&
          typeof req.body.bid === "number"
        ) {
          next();
        } else {
          res.status(400).send("Invalid request body");
        }
      } else {
        res.status(404).send("Invalid endpoint");
      }
      break;
    default:
      res.status(404).send("Invalid endpoint");
  }
};
