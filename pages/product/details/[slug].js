import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import data from '../../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../../../utils/Store';
import { ArrowCircleLeftIcon } from '@heroicons/react/solid';

export default function ProductDetails() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">
          <ArrowCircleLeftIcon className="bg-slate-900 text-white h-8 w-6"></ArrowCircleLeftIcon>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={540}
            height={400}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-semibold tracking-tight text-gray-900">
                {product.name}
              </h1>
            </li>
            <li className="text-base font-semibold tracking-tight text-gray-900">
              Codice Prodotto: {product.code}
            </li>
            <li className=" text-xs font-semibold py-0.5 rounded">
              Descrizione: {product.description}
            </li>
            <li className=" text-xs font-semibold py-0.5 rounded">
              Quantità: {product.quantity}
            </li>
            <li className=" text-xs font-semibold py-0.5 rounded text-gray-500">
              {product.note && (
                <div className=" text-xs py-0.5">Note Specifiche:</div>
              )}
              {product.note}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Prezzo</div>
              <div>{product.price}€</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Stato</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button text-white w-full"
              onClick={addToCartHandler}
            >
              Aggiungi al carrello
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
