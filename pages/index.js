import { useContext } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
import { Store } from '../utils/Store';

export default function Home() {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = (product, qta) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const addQta = qta ? qta : 1;
    const quantity = existItem ? existItem.quantity + addQta : addQta;

    if (product.countInStock < quantity) {
      alert('out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product, i) => (
          <ProductItem
            product={product}
            key={i}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
