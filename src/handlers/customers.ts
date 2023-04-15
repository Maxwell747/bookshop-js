import { Request, Response } from "express";
import * as db from "../db";

export const createCustomer = async (req: Request, res: Response) => {
  const { name, shippingAddress } = req.body;
  await db.createCustomer(name, shippingAddress);
  res.status(201).json({ status: "success" });
};

export const updateCustomerAddress = async (req: Request, res: Response) => {
  try {
    const { cid, address } = req.body;
    await db.updateCustomerAddress(cid, address);
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(404).send("Customer Not Found");
  }
};

export const getCustomerBalance = async (req: Request, res: Response) => {
  try {
    const { cid } = req.body;
    const balance = await db.customerBalance(cid);
    res.status(200).json({ balance });
  } catch (err) {
    res.status(404).send("Customer Not Found");
  }
};
