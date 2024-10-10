import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient(); // Instantiate Prisma client

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, password } = body;

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: 'User with this email already exists.' };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user (remove the `mealPlans` field)
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { message: 'User registered successfully', user: newUser };
});