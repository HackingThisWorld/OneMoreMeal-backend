import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.post("/", async (req, res) => {
  const { name, shop_name, number, address, time, note } = req.body;

  try {
    await prisma.form.create({
      data: {
        name,
        shop_name,
        number,
        address,
        time,
        note,
      },
    });

    res.json({ success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
    return;
  }
});

export default router;
