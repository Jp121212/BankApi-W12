import { Router } from "express";
import PaymentController from "../controllers/payment.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
//Definition of every endpoint from source
export default Router().
get("/", authMiddleware, (req, res) =>
  PaymentController.getAll(req, res)
)
.post("/", authMiddleware, (req, res) => PaymentController.create(req, res));

