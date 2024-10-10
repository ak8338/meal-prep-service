import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const meals = await prisma.meal.findMany();
  return meals;
});
