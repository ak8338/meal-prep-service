import { prisma } from '~/server/prisma'; // Assuming Prisma client is set up

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Read POST data
  const { userId, meals } = body;

  if (!userId || !meals) {
    return sendError(event, createError({ statusCode: 400, message: 'User ID and meals are required' }));
  }

  try {
    // Upsert the meal plan for the user (create if it doesn't exist, update if it does)
    const mealPlan = await prisma.mealPlan.upsert({
      where: { userId: userId },
      update: { meals },
      create: {
        userId: userId,
        meals: meals,
        name: 'My Meal Plan',
      },
    });
    
    return mealPlan;
  } catch (error) {
    return sendError(event, createError({ statusCode: 500, message: 'Error saving meal plan' }));
  }
});
