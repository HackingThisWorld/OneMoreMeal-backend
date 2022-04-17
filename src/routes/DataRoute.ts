import { Router } from "express";
import prisma from "../lib/prisma";
import sendMessage from "../lib/twilio/sendMessage";
const router = Router();

router.get("/requests", async (req, res) => {
  const requests = await prisma.requests.findMany({
    where: { completed: false },
  });

  res.json(requests);
  return;
});

router.put("/requests", async (req, res) => {
  const { id } = req.body;
  const request = await prisma.requests.update({
    where: { id },
    data: { completed: true },
  });

  await sendMessage(
    `Our volunteers are coming to your location for pickup`,
    request.phone_number
  );

  res.json(request);
  return;
});

export default router;
