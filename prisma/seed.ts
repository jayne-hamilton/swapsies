import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



async function main() {
  await prisma.listing.deleteMany({});

  await prisma.listing.create({
    data: {
      name: 'Waiheke Dreaming',
      location: 'Waiheke, New Zealand',
      description: 'Escape to native bush and bird song'
    }
  });
  await prisma.listing.create({
    data: {
      name: 'Queenstown Explorer',
      location: 'Queenstown, New Zealand',
      description: 'An adventure enthusiasts destination'
    }
  });
  await prisma.listing.create({
    data: {
      name: 'City Apartment Living',
      location: 'Wellington',
      description: 'Right in the heart of the city, enjoy the hustle and bustle all in walking distance'
    }
  });
  await prisma.listing.create({
    data: {
      name: 'West Coast dreams',
      location: 'New Plymouth',
      description: 'Explore the surf, taste the cuisine or see the gardens'
    }
  });

  console.log('Done!');
}

main().catch((e) => console.error(e)).finally(async () => {
  await prisma.$disconnect();
})