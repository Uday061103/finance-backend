import prisma from "../lib/prisma.js";

export const createRecord = async (data, userId) => {
  return await prisma.financialRecord.create({
    data: {
      ...data,
      date: new Date(data.date),
      userId,
    },
  });
};

export const getRecords = async (filters) => {
  const { type, category, from, to } = filters;

  return await prisma.financialRecord.findMany({
    where: {
      type: type || undefined,
      category: category || undefined,
      date: {
        gte: from ? new Date(from) : undefined,
        lte: to ? new Date(to) : undefined,
      },
    },
    orderBy: { date: "desc" },
  });
};

export const updateRecord = async (id, data) => {
  return await prisma.financialRecord.update({
    where: { id },
    data,
  });
};

export const deleteRecord = async (id) => {
  return await prisma.financialRecord.delete({
    where: { id },
  });
};