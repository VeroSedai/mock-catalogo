/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/solid';

export default function ProductItem({ product, addToCartHandler }) {
  const [quantity, setQuantity] = useState(0);
  const updateCartHandler = (item, qty) => {
    setQuantity(Number(qty));
  };
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md">
        <Link href={`/product/details/${product.slug}`}>
          <a>
            <img
              src={product.image}
              alt={product.name}
              classNameName="rounded-shadow"
            ></img>
          </a>
        </Link>
        <div className="px-5 pb-5">
          <Link href={`/product/details/${product.slug}`}>
            <a>
              <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                {product.name}
              </h2>
            </a>
          </Link>
          <p className="text-base font-semibold tracking-tight text-gray-900">
            {product.code}
          </p>

          <div className="flex-shrink items-center mt-2.5 mb-5">
            <div className=" text-xs font-semibold py-0.5 rounded">
              {product.description}
            </div>
            <div className=" text-xs font-semibold py-0.5 rounded">
              {product.quantity}
            </div>
            <div className=" text-xs font-semibold py-0.5 rounded text-gray-500">
              {product.note && (
                <div className=" text-xs py-0.5">Note Specifiche:</div>
              )}
              {product.note}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-900">
              Prezzo: {product.price}€
            </span>
            <div className="flex">
              <select
                className="flex-shrink-0 inline-flex items-center py-2.5 px-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                value={quantity}
                onChange={(e) => updateCartHandler(product, e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onClick={() => addToCartHandler(product, quantity)}
              >
                <ShoppingCartIcon className="text-slate-900  h-6 w-6"></ShoppingCartIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
