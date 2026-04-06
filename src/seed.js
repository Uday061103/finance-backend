import prisma from "./src/lib/prisma.js";
import bcrypt from "bcrypt";

async function main() {
  const password = await bcrypt.hash("123456", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Admin",
        email: "admin@test.com",
        password,
        role: "ADMIN",
      },
      {
        name: "Analyst",
        email: "analyst@test.com",
        password,
        role: "ANALYST",
      },
      {
        name: "Viewer",
        email: "viewer@test.com",
        password,
        role: "VIEWER",
      },
    ],
  });

  console.log("Seeded users");
}

main();