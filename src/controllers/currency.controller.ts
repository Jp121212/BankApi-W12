import { Request, Response } from "express";
import CurrencyService from "../services/currency.service";
import { BaseController } from "../types/base.controller";
class CurrencyController extends BaseController {
  async getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, await CurrencyService.getAll(), 200);
  }
  async create(_req: Request | any, res: Response) {
    this.responseHandler(res, await CurrencyService.createCurrency(_req.body), 201);
  }
}

export default new CurrencyController();
