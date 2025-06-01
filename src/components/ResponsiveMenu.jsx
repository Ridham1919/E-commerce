import React, { useEffect, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <div
      ref={menuRef}
      className={`${showMenu ? "left-0" : "-left-[100%]"} fixed  z-20 flex  w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className=''>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4 text-xl text-black flex flex-col">
            <Link to="/"><li onClick={() => setShowMenu(false)}>Home</li></Link>
            <Link to="/mens"><li onClick={() => setShowMenu(false)}>Mens</li></Link>
            <Link to="/womens"><li onClick={() => setShowMenu(false)}>Womens</li></Link>
            <Link to="/kids"><li onClick={() => setShowMenu(false)}>Kids</li></Link>
            <Link to="/login">
              <button
                onClick={() => setShowMenu(false)}
                className="bg-red-500 text-white px-4 py-1 rounded-md"
              >
                Login
              </button>
            </Link>
          </ul>
        </nav>
        <div className="absolute bottom-[-1px] left-5 pb-20">
            <h1>
              Made with ❤️ by <a href="https://github.com/Ridham1919" target='blank' className="font-bold pl-1 ">Ridham</a>
            </h1>
          </div>
      </div>
    </div>
  );
};


export default ResponsiveMenu