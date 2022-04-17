import { Router } from "express";
import prisma from "../lib/prisma";
import sendMessage from "../lib/twilio/sendMessage";

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

    await sendMessage(
      `Pickup request created by ${name}\n\nShop Name: ${shop_name}\nPhone Number: ${phone_number}\nTime: ${pickup_time}\nAddress: ${address}\nNote: ${note}`,
      process.env.ADMIN_MOBILE_NUMBER!!
    );

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

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(req.body);

  try {
    await prisma.contactRequests.create({
      data: {
        name,
        email,
        message,
      },
    });

    await sendMessage(
      `New contact request from ${name} (${email})\n\n${message}`,
      process.env.ADMIN_MOBILE_NUMBER!!
    );

    res.json({ success: true });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
    return;
  }
});

export default router;
