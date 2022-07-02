import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';
import { Menu } from '@headlessui/react';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + ' - Mock' : 'Mock'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">AGOS</a>
            </Link>
            <div className="flex justify-between">
              <Link href="/cart">
                <a>
                  <ShoppingCartIcon className="h-5 w-5 right-0" />
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full align-top bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
            </div>
            <div className="flex justify-between">
              <a className="p-2">
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-black">
                    <UserIcon className="h-5 w-5" />
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item disabled>
                      <span className="opacity-75 flex p-2 hover:bg-gray-200">
                        test2
                      </span>
                    </Menu.Item>
                    <Menu.Item disabled>
                      <span className="opacity-75 flex p-2 hover:bg-gray-200">
                        test1
                      </span>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </a>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-slate-800">
          <p className="text-white">Copyright © 2022 e-step</p>
        </footer>
      </div>
    </>
  );
}
