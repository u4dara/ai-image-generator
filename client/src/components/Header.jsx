import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets';

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white rounded-md px-3 py-2 hover:bg-gray-900'
      : 'text-black rounded-md px-3 py-2 hover:bg-gray-600 hover:text-white';

  return (
    <nav className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <div className="">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </NavLink>
      </div>
      <div className="flex space-x-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/create-post" className={linkClass}>
          Create
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
