import { GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Listing, Image as DbImage, PrismaClient } from '@prisma/client';
import Image from 'next/image'


interface ListingProps {
  listing: (Listing & { images: DbImage[] });
}

function ListingPage({ listing }: ListingProps) {

  
  return (
    <div>
      <h1>{listing.name}</h1>
      <h4>{listing.location}</h4>
      <p>{listing.description} </p>
      {listing.images.map((item,i)=> <Image src={`/${item.path}`} key={i} width="550" height="400" />)}
    </div>
  );


}
interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const listingIds = await prisma.listing.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: listingIds.map((l) => ({ params: { id: l.id } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params as Params;

  if (id) {
    const prisma = new PrismaClient();
    const listing = await prisma.listing.findFirst({
      where: {
        id,
      },
      include: {
        images: true,
      },
    });
    if (!listing) {
      return {
        notFound: true,
      };
    }

    return {
      props: { listing },
    };
  }
  return {
    notFound: true,
  };
}

export default ListingPage;
