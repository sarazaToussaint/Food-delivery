import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import Logo from './img/logo.png';

const Header = () => (
  <header className="fixed z-50 w-screen p-6 px-16">

    <div className="hidden md:flex w-full h-full">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-8 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold"> City</p>
      </div>
      <ul className="flex ite items-center gap-8 ml-auto">
        <li
          className="text-base text-textColor hover:text-headingColor
          cursor-pointer duration-100 transition-all ease-in-out"
        >
          Home
        </li>
        <li
          className="text-base text-textColor hover:text-headingColor
        cursor-pointer duration-100 transition-all ease-in-out"
        >
          Menu
        </li>
        <li
          className="text-base text-textColor hover:text-headingColor
         cursor-pointer duration-100 transition-all ease-in-out"
        >
          About Us
        </li>
        <li
          className="text-base text-textColor hover:text-headingColor
         cursor-pointer duration-100 transition-all ease-in-out"
        >
          Services
        </li>
      </ul>

      <div className="relative flex items-center justify-center">
        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
          <p className="text-xs text-white font-semibold">3</p>
        </div>
      </div>
    </div>

    <div className="flex md:hidden w-full h-full" />
  </header>
);

export default Header;
