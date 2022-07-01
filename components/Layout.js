import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/solid';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
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
                <a className="right-0">
                  <ShoppingCartIcon className="h-5 w-5" />
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full align-top bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
            </div>
            <div className="flex justify-between">
              <Link href="/login">
                <a className="p-2">
                  <UserIcon className="h-5 w-5" />
                </a>
              </Link>
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
