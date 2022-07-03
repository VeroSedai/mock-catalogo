import Link from 'next/link';
import { Fragment } from 'react';
import { links } from './Mylinks';
import { Menu } from '@headlessui/react';

const NavLinks = () => {
  return (
    <>
      {links.map((link, i) => (
        <Menu
          key={i}
          as="div"
          className="pt-4 text-base w-full md:justify-between md:pt-0"
        >
          <Menu.Button className="md:text-white px-2 py-2 ">
            {link.name}
          </Menu.Button>
          {link.submenu && (
            <Menu.Items className="md:absolute z-40 md:w-96 w-full bg-white shadow-lg">
              {link.sublinks.map((mysublinks, i) => (
                <Menu key={i} as="div" className="relative">
                  <Menu.Button className="flex w-full rounded-md px-2 py-2 text-sm">
                    {mysublinks.Head}
                  </Menu.Button>

                  <hr></hr>
                  <Menu.Items className="relative md:w-96 bg-white">
                    {mysublinks.sublink.map((slink, i) => (
                      <Menu.Item
                        as="div"
                        key={i}
                        className="text-sm text-gray-600 my-2.5"
                      >
                        <Link href={slink.link} className="hover:text-primary">
                          {slink.name}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              ))}
            </Menu.Items>
          )}
        </Menu>
      ))}
    </>
  );
};

export default NavLinks;
