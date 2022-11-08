import { Application } from "express";
import authRouter from "./auth";
import currencyRouter from "./currency";
import paymentRouter from "./payment";
import savingRouter from "./saving";
import accountRouter from "./account";
export default function router(app: Application): void {
  /**
   * Every source are specifed here
   */
  app.use("/auth", authRouter);
  app.use("/currency", currencyRouter);
  app.use("/payment", paymentRouter);
  app.use("/saving", savingRouter);
  app.use("/account", accountRouter);
  

}
