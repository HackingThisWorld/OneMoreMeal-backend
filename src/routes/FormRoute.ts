import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

router.post("/requests", async (req, res) => {
  console.log(req.body);
  const { name, shop_name, phone_number, address, pickup_time, note } =
    req.body;

  const pickupDate = new Date(pickup_time);

  console.log({ pickup_time, pickupDate });

  try {
    await prisma.requests.create({
      data: {
        name,
        shop_name,
        phone_number,
        address,
        note,
        pickup_time: pickupDate,
      },
    });

    res.json({ success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
    return;
  }
});

router.post("/donate", async (req, res) => {
  const { name, email, contact_number, amount } = req.body;

  console.log(req.body);

  try {
    await prisma.donation.create({
      data: {
        name,
        email,
        contact_number,
        amount,
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
