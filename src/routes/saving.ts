import { Router } from "express";
import SavingController from "../controllers/saving.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
//Definition of every endpoint from source
export default Router().
get("/", authMiddleware, (req, res) =>
  SavingController.getAll(req, res)
)
.post("/", authMiddleware, (req, res) => SavingController.create(req, res));

