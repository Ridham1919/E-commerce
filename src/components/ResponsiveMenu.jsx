import React, { useEffect, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div
      ref={menuRef}
      className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className='flex items-center justify-start gap-3'>
          <SignedIn>
            <UserButton size={100} />
          </SignedIn>
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4 text-xl text-black flex flex-col">
            <Link to="/" onClick={() => setShowMenu(false)}><li>Home</li></Link>
            <Link to="/mens" onClick={() => setShowMenu(false)}><li>Mens</li></Link>
            <Link to="/womens" onClick={() => setShowMenu(false)}><li>Womens</li></Link>
            <Link to="/kids" onClick={() => setShowMenu(false)}><li>Kids</li></Link>

            <SignedOut>
              <SignInButton className='bg-red-500 text-white px-4 py-2 rounded-md' />
            </SignedOut>
          </ul>
        </nav>

        <div className="absolute left-5 pt-[350px]">
          <h1>
            Made with ❤️ by <a href="https://github.com/Ridham1919" target='_blank' className="font-bold pl-1">Ridham</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
