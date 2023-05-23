import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import Avatar from '../img/avatar.png';
import Logo from '../img/logo.png';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>

        <div className="flex items-center ml-auto">
          <ul className="flex items-center gap-8">
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

        </div>
        <motion.div whileTap={{ scale: 0.6 }} className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer ml-8" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg
        flex items-center justify-center"
          >
            <p className="text-xs text-white font-semibold">3</p>
          </div>
        </motion.div>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[30px] h-10 min-h-[30px]
        drop-shadow-xl ml-8 cursor-pointer"
            alt="AvatarImage"
            onClick={login}
          />
        </div>
      </div>

      <div className="flex md:hidden w-full h-full" />
    </header>
  );
};

export default Header;
