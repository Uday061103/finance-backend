import prisma from "../lib/prisma.js";

export const getUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
    },
  });
};

export const updateUserRole = async (id, role) => {
  return await prisma.user.update({
    where: { id },
    data: { role },
  });
};

export const updateUserStatus = async (id, status) => {
  return await prisma.user.update({
    where: { id },
    data: { status },
  });
};