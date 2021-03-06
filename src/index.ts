require("dotenv").config();
import express from "express";
import cors from "cors";
import FormRoute from "./routes/FormRoute";
import DataRoute from "./routes/DataRoute";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/form", FormRoute);
app.use("/data", DataRoute);

app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`🚀 Server ready at: ${process.env.PORT || 3000}`)
);
