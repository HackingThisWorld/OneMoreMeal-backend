import { Router } from "express";
import prisma from "../lib/prisma";
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

  res.json(request);
  return;
});

export default router;
