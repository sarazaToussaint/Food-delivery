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
           <li>About Us</li>
           <li>Services</li>
         </ul>
      </div>

      <div className="flex md:hidden w-full h-full"></div>
    </Header>
  )
}

export default Header;
