import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



async function main() {
  await prisma.listing.deleteMany({});
  await prisma.user.deleteMany({});


  const user1 = await prisma.user.create(
    {
      data: {
        name:'Phil McCrakin',
        email: 'phil@gmail.com',
      }
    }
  )
  const user2 = await prisma.user.create(
    {
      data: {
        name:'Theresa Green',
        email:'theresa@gmail.com',

      }
    }
  )
  const user3 = await prisma.user.create(
    {
      data: {
        name:'Biggie Smalls',
        email: 'biggie@gmail.com',

      }
    }
  )
  const user4 = await prisma.user.create(
    {
      data: {
        name:'Latisha Roundbottom',
        email:'latisha@gmail.com',

      }
    }
  )

  await prisma.listing.create({
    data: {
      name: 'Waiheke Dreaming',
      location: 'Waiheke, New Zealand',
      description: 'Escape to native bush and bird song',
      owner:{
        connect: {
          id: user1.id
        }
      }
    }
  });
  await prisma.listing.create({
    data: {
      name: 'Queenstown Explorer',
      location: 'Queenstown, New Zealand',
      description: 'An adventure enthusiasts destination',
      owner:{
        connect: {
          id: user2.id
        }
      }
    }
  });
  await prisma.listing.create({
    data: {
      name: 'City Apartment Living',
      location: 'Wellington',
      description: 'Right in the heart of the city, enjoy the hustle and bustle all in walking distance',
      owner:{
        connect: {
          id: user3.id
        }
      }
    }
  });
  await prisma.listing.create({
    data: {
      name: 'West Coast dreams',
      location: 'New Plymouth',
      description: 'Explore the surf, taste the cuisine or see the gardens',
      owner:{
        connect: {
          id: user4.id
        }
      }
    }
  });

  console.log('Done!');
}

main().catch((e) => console.error(e)).finally(async () => {
  await prisma.$disconnect();
})