import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import Avatar from '../img/avatar.png';
import Logo from '../img/logo.png';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const { user: { providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center ml-auto">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
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
          </motion.ul>

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
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[30px] h-10 min-h-[30px]
            drop-shadow-xl ml-8 cursor-pointer rounded-full"
            alt="AvatarImage"
            onClick={login}
          />
          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg
              flex flex-col absolute top-12 right-0"
              >
                {
             user && user.email === 'tmsaraza@gmail.com' && (
             <Link to="/createItem">
               <p className="px-4 py-2 flex items-center gap-3
              cursor-pointer hover:bg-slate-100 transition-all
               duration-100 ease-in-out text-textColor text-base"
               >
                 New Item
                 {' '}
                 <MdAdd />
                 {' '}
               </p>
             </Link>
             )
           }
                <button
                  type="button"
                  className="px-4 py-2 flex items-center gap-3
                  cursor-pointer hover:bg-slate-100 transition-all
                  duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout
                  {' '}
                  <MdLogout />
                </button>
              </motion.div>
            )
          }
        </div>
      </div>

      {/* MOBIL VERSION */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <motion.div whileTap={{ scale: 0.6 }} className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg
            flex items-center justify-center"
          >
            <p className="text-xs text-white font-semibold">3</p>
          </div>
        </motion.div>

        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[30px] h-10 min-h-[30px]
            drop-shadow-xl ml-8 cursor-pointer rounded-full"
            alt="AvatarImage"
            onClick={login}
          />
          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg
              flex flex-col absolute top-12 right-0"
              >
                {
             user && user.email === 'tmsaraza@gmail.com' && (
             <Link to="/createItem">
               <p className="px-4 py-2 flex items-center gap-3
              cursor-pointer hover:bg-slate-100 transition-all
               duration-100 ease-in-out text-textColor text-base"
               >
                 New Item
                 {' '}
                 <MdAdd />
                 {' '}
               </p>
             </Link>
             )
           }

                <ul
                  className="flex flex-col"
                >
                  <li
                    className="text-base text-textColor hover:text-headingColor
                    cursor-pointer duration-100 transition-all ease-in-out  hover:bg-slate-100 px-4 py-2"
                  >
                    Home
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor
                    cursor-pointer duration-100 transition-all ease-in-out  hover:bg-slate-100 px-4 py-2"
                  >
                    Menu
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor
                    cursor-pointer duration-100 transition-all ease-in-out  hover:bg-slate-100 px-4 py-2"
                  >
                    About Us
                  </li>
                  <li
                    className="text-base text-textColor hover:text-headingColor
                    cursor-pointer duration-100 transition-all ease-in-out  hover:bg-slate-100 px-4 py-2"
                  >
                    Services
                  </li>
                </ul>
                <button
                  type="button"
                  className="m-2 p-2 rounded-md flex items-center justify-center gap-3
                   cursor-pointer text-red-500 bg-gray-200 hover:bg-red-100 transition-all
                   duration-100 ease-in-out text-base"
                  onClick={logout}
                >
                  Logout
                  {' '}
                  <MdLogout />
                </button>
              </motion.div>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
