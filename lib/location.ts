import { GetServerSideProps } from 'next';

export const getCurrentVisitorLocation: GetServerSideProps = async ({
  query
}) => {
  const city = decodeURIComponent(query.city as string);
  const country = decodeURIComponent(query.country as string);
  return {
    props: {
      location: { city, country }
    }
  };
};
