import Head from 'next/head';
import React from 'react';

import BottomNavBar from './BottomNavBar';
import UpperNavBar from './UpperNavBar';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Mock' : 'Mock'}</title>
        <meta name="description" content="Ecommerce Website" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex h-10 shadow-inner bg-slate-800">
          <p className="text-white">e-step</p>
        </div>
        <header>
          <nav className="flex flex-col px-4">
            <div className="w-full flex justify-between">
              <UpperNavBar></UpperNavBar>
            </div>
            <div className="bg-emerald-600">
              <BottomNavBar></BottomNavBar>
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
