import { Request, Response } from "express";
import PaymentService from "../services/payment.service";
import { BaseController } from "../types/base.controller";
class PaymentController extends BaseController {
  async getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, await PaymentService.getAll(), 200);
  }
  async create(_req: Request | any, res: Response) {
    this.responseHandler(res, await PaymentService.createPayment(_req.body), 201);
  }
}

export default new PaymentController();
