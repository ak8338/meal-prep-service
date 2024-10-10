import { prisma } from '~/server/prisma'; // Assuming Prisma client is set up

export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  try {
    const mealPlan = await prisma.mealPlan.findUnique({
      where: { userId: Number(userId) },
    });

    if (!mealPlan) {
      return sendError(event, createError({ statusCode: 404, message: 'Meal plan not found' }));
    }

    return mealPlan;
  } catch (error) {
    return sendError(event, createError({ statusCode: 500, message: 'Error fetching meal plan' }));
  }
});
