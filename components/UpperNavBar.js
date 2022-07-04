import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function UpperNavBar() {
  const { state } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Link href="/">
        <a>
          <Image
            src="/images/agos.jpg"
            alt="agos"
            className="rounded-shadow"
            width={70}
            height={50}
          ></Image>
        </a>
      </Link>
      <div>
        <ul className="flex mt-4 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <Link href="/cart">
              <a>
                <ShoppingCartIcon className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute top-10 ml-1 rounded-full align-top bg-red-600 w-4 h-4 p-0 m-0 font-mono text-sm leading-tight text-center font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </a>
            </Link>
          </li>
          <li>
            <UserIcon className="h-6 w-6" />
          </li>
        </ul>
      </div>
    </>
  );
}
