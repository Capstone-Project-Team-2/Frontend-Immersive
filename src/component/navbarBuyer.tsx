import React, { useState } from 'react';
import logoBuyer from '../assets/logoBuyer1.png';

const NavbarBuyer = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-blue-950 p-4 flex items-center justify-between">
      <div className="flex">
        <img src={logoBuyer} alt="Brand Logo" className="w-14" />
        <div className="text-white  items-center pt-2 ">
          <p className="font-normal text-xs ">Event,easier with </p>
          <h1 className="font-extrabold text-xl">EVVE</h1>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/event-buyer" className="text-white">
              Event
            </a>
          </li>
          <li>
            <a href="/about" className="text-white">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right flex items-center space-x-4">
        <div className="relative group" onClick={toggleDropdown}>
          <img
            src="https://i.pinimg.com/236x/a3/09/ed/a309ed3530e0f365781d8c2607ac4e7e--profile-pictures.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 p-2 rounded shadow-lg z-10">
              <a href="/profile" className="block mb-2 hover:bg-blue-600">
                Profile
              </a>
              <a href="/ticket" className="block hover:bg-blue-600">
                Tiket
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarBuyer;
