import { Menu, Transition } from '@headlessui/react';

import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Fragment } from 'react/cjs/react.production.min';
import { ImUser } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';
import React from 'react';

const AdminNav = () => {
  return (
    <div className="flex justify-end bg-white shadow-lg w-full h-16">
      <div className="flex space-x-2 my-auto mr-16 border border-gray-600 rounded-md  bg-white hover:bg-gray-100 hover:cursor-pointer py-1 px-4">
        <Menu>
          <Menu.Button className="my-auto flex flex-row space-x-2">
            <ImUser className="my-auto" />
            <p className="my-auto"> Admin </p>
            <IoIosArrowDown className="my-auto" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="transform opacity-0 scale-100"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute mt-7 right-14 bg-white border border-gray-200 rounded-sm shadow-lg">
              <div className="w-full ">
                <Menu.Item>
                  <button className="flex transition-all duration-300 hover:bg-gray-200 items-center px-6 py-2 w-full text-md">
                    <FaUserCircle className="text-lg mr-5" />
                    Profile
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className="flex transition-all duration-300 hover:bg-gray-200 items-center px-6 py-2 w-full text-md">
                    <FiLogOut className="text-lg mr-5" />
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default AdminNav;
