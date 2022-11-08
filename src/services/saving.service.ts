import prisma from "../database/client";
import { Saving } from "@prisma/client";

class SavingService {
  getAll() {
    const Saving = prisma.saving.findMany();
    return Saving;
  }

  createSaving(saving: Saving) {
    return prisma.saving.create({ data: saving });
  }
}

export default new SavingService();
