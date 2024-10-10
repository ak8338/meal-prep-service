---

# Meal Prep Service

This project is a Nuxt3 application that allows users to organize meal plans, add them to a cart, and checkout. It integrates a SQLite database via Prisma to manage user data, meal plans, and orders. The app features user authentication, customizable meal options, and secure checkout.

## Table of Contents

- [Project Setup](#project-setup)
- [Prisma Database Setup](#prisma-database-setup)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ak8338/meal-prep-service.git
   cd meal-prep-service
   ```

2. **Install the dependencies:**

   Make sure you have Node.js and npm installed. Install project dependencies:

   ```bash
   npm install
   ```

3. **Create environment variables:**

   Create a `.env` file at the root of your project and add the following environment variables:

   ```bash
   DATABASE_URL="file:./dev.db"
   ```

   This will set up your database as a local file-based SQLite solution.

4. **Nuxt Configuration:**

   Update `nuxt.config.ts` if needed, ensuring that Prisma is correctly configured for a SQLite environment.

   ```ts
   import { defineNuxtConfig } from 'nuxt3'

   export default defineNuxtConfig({
     runtimeConfig: {
       public: {
         apiUrl: process.env.API_URL || 'http://localhost:3000',
       },
     },
     modules: ['@nuxtjs/prisma'],
   })
   ```

## Prisma Database Setup

Prisma is used to manage the SQLite database for this application. Follow these steps to set up Prisma.

1. **Install Prisma and its dependencies:**

   Install Prisma and the required client:

   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```

2. **Initialize Prisma:**

   Run the following command to initialize Prisma in your project, which will create the `prisma` folder and `schema.prisma` file.

   ```bash
   npx prisma init
   ```

   The `DATABASE_URL` should point to the local database file, as configured in your `.env` file.

3. **Define your database schema:**

   Edit the `prisma/schema.prisma` file to define your models (e.g., `User`, `Meal`, `Order`). Here is an example schema for your SQLite setup:

   ```prisma
   datasource db {
      provider = "sqlite"
      url      = "file:./dev.db"
    }
    
    generator client {
      provider = "prisma-client-js"
    }
    
    model User {
      id        Int      @id @default(autoincrement())
      email     String   @unique
      password  String
      mealPlans MealPlan[]
      orders    Order[] 
    }
    
    model Meal {
      id          Int      @id @default(autoincrement())
      name        String
      description String
      calories    Int
      price       Float
      imageUrl    String
      mealPlans   MealPlanMeal[]
    }
    
    model MealPlan {
      id        Int      @id @default(autoincrement())
      name      String
      userId    Int
      user      User      @relation(fields: [userId], references: [id])
      meals     MealPlanMeal[]
      orders    Order[]  
    }
    
    model MealPlanMeal {
      mealPlan   MealPlan @relation(fields: [mealPlanId], references: [id])
      mealPlanId Int
      meal       Meal     @relation(fields: [mealId], references: [id])
      mealId     Int
    
      @@id([mealPlanId, mealId])
    }
    
    model Order {
      id        Int      @id @default(autoincrement())
      mealPlanId Int
      userId    Int
      mealPlan  MealPlan  @relation(fields: [mealPlanId], references: [id])
      user      User      @relation(fields: [userId], references: [id])
    }
   ```

4. **Generate Prisma Client:**

   After defining the schema, generate the Prisma client to use in your application:

   ```bash
   npx prisma generate
   ```

5. **Migrate your database:**

   Apply the schema to your SQLite database by running the following migration command:

   ```bash
   npx prisma migrate dev --name init
   ```

   This creates the necessary database structure based on your schema.

6. **Using Prisma in Nuxt3:**

   Now, you can use Prisma in your Nuxt3 application to interact with the SQLite database. For example, retrieving users from the database:

   ```ts
   import { PrismaClient } from '@prisma/client'
   const prisma = new PrismaClient()

   export default defineEventHandler(async (event) => {
     const users = await prisma.user.findMany()
     return { users }
   })
   ```

## Development

To start the development server:

```bash
npm run dev
```

This will start the application at `http://localhost:3000`.

## Deployment

When deploying the application, ensure your environment variables (like `DATABASE_URL`) are correctly set up. If you're deploying to services like Vercel or Netlify, be sure to configure the environment variables in their dashboard.

To build and start the application in production mode:

```bash
npm run build
npm run start
```

## Contributing

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/your-feature`)
3. **Commit your changes** (`git commit -m 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/your-feature`)
5. **Open a pull request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify any sections or details specific to your project as you continue development!