import { Router } from "express";
import CurrencyController from "../controllers/currency.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
//Definition of every endpoint from source
export default Router().
get("/", authMiddleware, (req, res) =>
  CurrencyController.getAll(req, res)
)
.post("/", authMiddleware, (req, res) => CurrencyController.create(req, res));

