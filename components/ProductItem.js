/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/details/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-shadow"
          ></img>
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/details/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>{product.price}€</p>
        <button
          className="primary-button text-white"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
}
