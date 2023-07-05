"use server"
const { PrismaClient } = require("@prisma/client");

export const getProducts = async (): Promise<Product[]> => {
    "use server";
    const prisma = new PrismaClient();
    return await prisma.product.findMany();
  };