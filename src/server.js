import app from './app.js';
import prisma from "./lib/prisma.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to connect DB:", err);
    process.exit(1);
  }
}

startServer();