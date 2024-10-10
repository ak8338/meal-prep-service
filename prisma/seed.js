import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.meal.createMany({
    data: [
      { name: 'Bean Salad Bowl', description: 'Served with vegetables and rice.', calories: 450, price: 12.99, imageUrl: '/images/bean-salad-bowl.jpg' },
      { name: 'Chickpea Bowl', description: 'With mashed potatoes and greens.', calories: 600, price: 15.99, imageUrl: '/images/chickpea-bowl.jpg' },
      { name: 'Felafel Bowl', description: 'Quinoa, avocado, and chickpeas.', calories: 300, price: 10.99, imageUrl: '/images/felafel-bowl.jpg' },
      { name: 'Lentil Bowl', description: 'Served with vegetables and rice.', calories: 450, price: 12.99, imageUrl: '/images/lentil-bowl.jpg' },
      { name: 'Quinoa Bowl', description: 'With mashed potatoes and greens.', calories: 600, price: 15.99, imageUrl: '/images/quinoa-bowl.jpg' },
      { name: 'Rice Bowl', description: 'Quinoa, avocado, and chickpeas.', calories: 300, price: 10.99, imageUrl: '/images/rice-bowl.jpg' },
    ],
  });
}

main()
  .then(() => console.log('Seeding successful!'))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
