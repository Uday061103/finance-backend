import prisma from "../lib/prisma.js";

export const getSummary = async () => {
  const income = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: { type: "INCOME" },
  });

  const expense = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: { type: "EXPENSE" },
  });

  const totalIncome = income._sum.amount || 0;
  const totalExpense = expense._sum.amount || 0;

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  };
};

export const getCategoryBreakdown = async () => {
  return await prisma.financialRecord.groupBy({
    by: ["category"],
    _sum: { amount: true },
  });
};

export const getRecentActivity = async () => {
  return await prisma.financialRecord.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
};

export const getMonthlyTrends = async () => {
  return await prisma.financialRecord.groupBy({
    by: ["date"],
    _sum: { amount: true },
  });
};