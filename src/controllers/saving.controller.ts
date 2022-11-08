import { Request, Response } from "express";
import SavingService from "../services/saving.service";
import { BaseController } from "../types/base.controller";
class SavingController extends BaseController {
  async getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, await SavingService.getAll(), 200);
  }
  async create(_req: Request | any, res: Response) {
    this.responseHandler(res, await SavingService.createSaving(_req.body), 201);
  }
}

export default new SavingController();
