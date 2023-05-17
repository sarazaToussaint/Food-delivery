import React from 'react'
import Logo from './img/logo.png'

const Header = () => {
  return (
    <Header className="fixed z-50 w-screen p-6 px-16">
      
      <div className="hidden md:flex w-full h-full">
         <div className="flex items-center gap-2">
           <img src={Logo} className="w-8 object-cover" alt="logo"/>
         </div>
         <ul>
           <li>Home</li>
           <li>Menu</li>
           <li>About</li>
           <li>Services</li>
         </ul>
      </div>

      <div className="flex text-center md:hidden w-full h-full bg-slate-200"></div>
    </Header>
  )
}

export default Header;
