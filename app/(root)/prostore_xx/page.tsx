// import sampleData from '@/db/sample-data';
import ProductList_xx from '@/components/shared/product_xx/product-list_xx';
import { getLatestProducts_xx } from '@/lib/actions/product.actions_xx';

// import { auth } from '@/auth';
// import { redirect } from 'next/navigation';

const HomePage_xx = async () => {
  // const session = await auth();
  // console.log('homepage session', session);
  // if (!session) {
  //   redirect('/');
  // }
  const latestProducts = await getLatestProducts_xx();
  return (
    <>
      <ProductList_xx data={latestProducts} title='Newest Arrival' limit={4} />
    </>
  );
};

export default HomePage_xx;
