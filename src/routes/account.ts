import { Router } from "express";
import AccountController from "../controllers/account.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
//Definition of every endpoint from source
export default Router().
get("/", authMiddleware, (req, res) =>
  AccountController.getAll(req, res)
)
.post("/", authMiddleware, (req, res) => AccountController.create(req, res))
.put("/", authMiddleware, (req, res) => AccountController.update(req, res))


