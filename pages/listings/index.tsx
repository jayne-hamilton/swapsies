import { Listing, PrismaClient } from '@prisma/client';

interface ListingProps { 
  listings: Listing[];
}

function Listings({ listings }: ListingProps) {
  return (
    <>
      <h1>Listings page</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>{listing.name}</li> 
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const listings = await prisma.listing.findMany();

  return {
    props: { listings },
  };
}

export default Listings;
