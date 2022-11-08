import { Request, Response } from "express";
import AccountService from "../services/account.service";
import { BaseController } from "../types/base.controller";
class AccountController extends BaseController {
  async getAll(_req: Request | any, res: Response) {
    this.responseHandler(res, await AccountService.getAll(), 200);
  }
  async create(_req: Request | any, res: Response) {
    this.responseHandler(res, await AccountService.createAccount(_req.body), 201);
  }
  async update (_req: Request | any, res: Response) {
    this.responseHandler(res, await AccountService.updateAccount(_req.body), 200);
  }

}

export default new AccountController();
