
import prisma from "../database/client";
import { Account } from "@prisma/client";

class AccountService {
  
  getAll() {
    const Account = prisma.account.findMany();
    return Account;
  }

  createAccount(account: Account) {
    return prisma.account.create({ data: account });
  }
  updateAccount(body: any): any {
    return prisma.account.update({
      where: {
        id: body.id,
      },
      data: body,
    });
  }
  }
  
  export default new AccountService();