import { Listing, Image as DbImage, PrismaClient } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image'
interface ListingsProps {
  listings: (Listing & { images: DbImage[] })[];
}

function Listings({ listings }: ListingsProps) {
  return (
    <>
      <h1 className="listings-title" >Listings page</h1>
      <ul>
        {listings.map((listing) => (
          <section className="ind-listing" key={listing.id}>
            <h3>{listing.name}</h3>
            <h4>{listing.location}</h4>
            <Link href={`/listings/${listing.id}`}>click for more</Link>
            <Image className="listing-img" src={`/${listing.images[0].path}`} alt="me" width="550" height="400" />

          </section>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const listings = await prisma.listing.findMany({
    include: {
      images: true,
    },
  });

  return {
    props: { listings },
  };
}

export default Listings;
