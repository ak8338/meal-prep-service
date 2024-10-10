import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = 'your_secret_key'; // Replace with a secure key

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body; // Use email instead of username

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email }, // Adjust this to find by `email`
  });

  // If user is not found, return an error
  if (!user) {
    return { error: 'Invalid email or password' };
  }

  // Compare entered password with hashed password in the database
  const isValidPassword = await bcrypt.compare(password, user.password);

  // If the password is incorrect, return an error
  if (!isValidPassword) {
    return { error: 'Invalid email or password' };
  }

  // If the email and password are correct, generate a JWT token
  const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: '1h',
  });

  // Return the token and user info
  return {
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  };
});
