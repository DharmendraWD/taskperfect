import React, { useEffect, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2'; // Import icons from Heroicons
import Button2 from '../utilities/Button2';

import Logo1 from "../../assets/img/Logo1.png"
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavProfile from './NavProfile';

const Navbar = () => {
    // State to manage the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // List of navigation items
    const navItems = [
        { name: 'Promo Share', href: '/promoshare' },
        { name: 'Blog', href: '/blogs' },
        { name: 'News', href: '/news' },
        { name: 'Download', href: '/downloads' },
        { name: 'Nepse', href: '/nepse' },
        { name: 'Protected', href: '/protected' },
        
    ];


 const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
    return (
        <header className={`sticky top-0 z-[9] animated-div ${isVisible ? 'blured' : 'unblur'}` }>
            <div  className={`mx-auto  h-20 flex max-w-[1440px] items-center justify-between border-b border-[darkolivegreen] md:border-none`}>
                
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    {/* Placeholder for the bull icon - use an actual SVG or Image component */}
                  <Link to="/">  <img src={Logo1} className='w-[60px]' alt="" /></Link>
                </div>

                {/* Desktop Navigation Links (Hidden on small screens) */}
                <nav className="hidden lg:flex space-x-8">
                    {navItems.map((item) => (
                       <NavLink
  key={item.name}
  to={item.href}
  className={({ isActive }) =>
    `text-base font-medium py-2 px-3 transition duration-300 ease-in-out hover:text-green-300 hover:scale-105 hover:underline decoration-green-300 underline-offset-4 ${
      isActive ? 'text-green-700' : 'text-white'
    }`
  }
>
  {item.name}
</NavLink>
                    ))}
                </nav>

                {/* Login / Signup Button */}
                <div className="flex items-center space-x-4">
               {
                isAuthenticated ? (
                //   <Button2 widthValue={"fit"} clr={"#f70000"} label="Logout" link="/logout"></Button2>
                <>
                <NavProfile></NavProfile>
                
                </>
                ) : (
                  <>
                    <div className='lg:inline-block hidden'>
                        <Button2 widthValue={"fit"} clr={"green-900"} label="Login/Signup" link="/login"></Button2>
                    </div>
                  </>
                )
               }

                    {/* Mobile Menu Button (Visible on small screens) */}
                    <button
                        className="lg:hidden text-white p-2 rounded-md hover:bg-[#002336] transition"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {/* Use React Icons (HiXMark or HiBars3) */}
                        {isMenuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />} 
                    </button>
                </div>
            </div>

            {/* --------------------------- */}
            {/* Mobile Menu (Responsive)    */}
            {/* --------------------------- */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
                } bg-[#002366]`}
            >
                <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navItems.map((item) => (
                    <NavLink
  key={item.name}
  to={item.href}
  className={({ isActive }) =>
    `text-base font-medium py-2 px-3 transition duration-300 ease-in-out hover:text-green-300 hover:scale-105 hover:underline decoration-green-300 underline-offset-4 ${
      isActive ? 'text-green-700' : 'text-white'
    }`
  }
>
  {item.name}
</NavLink>
                    ))}
                    {/* Mobile Login Button */}
                    {/* <Link to={'/login'}
                        className="mt-4 bg-white text-green-900 font-semibold px-3 py-2 rounded-full transition duration-300 hover:bg-gray-200 w-full"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Login / Signup
                    </Link> */}

                       {
                isAuthenticated ? (
                    <>
                    <Button2 widthValue={"fit"} clr={'#f70000'} label="Logout" link="/logout"></Button2>
                {/* <NavProfile></NavProfile> */}
                </>
                ) : (
                  <>
                    <Button2 widthValue={"fit"} label="Login/Signup" clr={"green-900"} link="/login"></Button2>
                  </>
                )
               }
                </div>
            </div>
        </header>
    );
};

export default Navbar;