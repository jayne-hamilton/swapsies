import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.listing.deleteMany({});
  await prisma.user.deleteMany({});

  const user1 = await prisma.user.create({
    data: {
      name: 'Phil McCrakin',
      email: 'phil@gmail.com',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'Theresa Green',
      email: 'theresa@gmail.com',
    },
  });
  const user3 = await prisma.user.create({
    data: {
      name: 'Biggie Smalls',
      email: 'biggie@gmail.com',
    },
  });
  const user4 = await prisma.user.create({
    data: {
      name: 'Latisha Roundbottom',
      email: 'latisha@gmail.com',
    },
  });

  await prisma.listing.create({
    data: {
      name: 'Waiheke Dreaming',
      location: 'Waiheke, New Zealand',
      description: 'Escape to native bush and bird song',
      owner: {
        connect: {
          id: user1.id,
        },
      },
      images: {
        create: [
          {
            path: 'images/waiheke01.webp',
          },
          {
            path: 'images/waiheke02.webp',
          },
          {
            path: 'images/waiheke03.webp',
          },
        ],
      },
    },
  });

  await prisma.listing.create({
    data: {
      name: 'Queenstown Explorer',
      location: 'Queenstown, New Zealand',
      description: 'An adventure enthusiasts destination',
      owner: {
        connect: {
          id: user2.id,
        },
      },
      images: {
        create: [
          {
            path: 'images/qt01.webp',
          },
          {
            path: 'images/qt02.webp',
          },
          {
            path: 'images/qt03.webp',
          },
        ],
      },
    },
  });
  await prisma.listing.create({
    data: {
      name: 'City Apartment Living',
      location: 'Wellington',
      description:
        'Right in the heart of the city, enjoy the hustle and bustle all in walking distance',
      owner: {
        connect: {
          id: user3.id,
        },
      },
      images: {
        create: [
          {
            path: 'images/wellington01.jpeg',
          },
          {
            path: 'images/wellington02.jpeg',
          },
          {
            path: 'images/wellington03.jpeg',
          },
        ],
      },
    },
  });
  await prisma.listing.create({
    data: {
      name: 'West Coast dreams',
      location: 'New Plymouth',
      description: 'Explore the surf, taste the cuisine or see the gardens',
      owner: {
        connect: {
          id: user4.id,
        },
      },
      images: {
        create: [
          {
            path: 'images/newplymouth01.webp',
          },
          {
            path: 'images/newplymouth02.webp',
          },
          {
            path: 'images/newplymouth03.webp',
          },
        ],
      },
    },
  });

  console.log('Done!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
