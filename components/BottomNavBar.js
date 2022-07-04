import { ArrowLeftIcon, MenuAlt1Icon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';
const BottomNavBar = () => {
  const [open, setOpen] = useState(false);
  const clickOnCategory = (open) => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="flex font-medium p-1 w-full justify-between">
        <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          {!open && (
            <MenuAlt1Icon className="h-6 w-6 text-white items-center cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <div className="md:flex hidden font-sans">
          <NavLinks />
        </div>
        <div className="md:block hidden">
          <SearchBox></SearchBox>
        </div>
        {/* Mobile nav */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen overflow-y-auto bg-white transform ${
            open ? '-translate-x-0' : '-translate-x-full'
          } transition-transform duration-500 ease-in-out filter drop-shadow-md `}
        >
          <div
            className="md:hidden cursor-pointer ml-1 mt-1"
            onClick={() => setOpen(!open)}
          >
            {open && <ArrowLeftIcon className="h-6 w-6"></ArrowLeftIcon>}
          </div>
          <div className="py-5">
            <SearchBox></SearchBox>
          </div>
          <Link href="/" passHref className="py-7 px-3">
            <a>
              <NavLinks onClickCategory={clickOnCategory} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;
