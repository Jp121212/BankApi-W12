
import prisma from "../database/client";
import { Currency } from "@prisma/client";
class CurrencyService {
  getAll() {
    const currency = prisma.currency.findMany();
    return currency;
  }

  createCurrency(currency: Currency) {
    return prisma.currency.create({ data: currency });
  }
}

export default new CurrencyService();
