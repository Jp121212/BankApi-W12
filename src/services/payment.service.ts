import prisma from "../database/client";
import { Payment } from "@prisma/client";

class PaymentService {
  getAll() {
    const payment = prisma.payment.findMany();
    return payment;
  }

  createPayment(payment: Payment) {
    return prisma.payment.create({ data: payment });
  }
}

export default new PaymentService();
