import React, { useState } from 'react';

const NavbarBuyer = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-blue-950 p-4 flex items-center justify-between">
      <div className="navbar-left">
        <img src="/logo_eve2.jpg" alt="Brand Logo" className="h-15 w-20" />
      </div>
      <div className="navbar-center">
        <ul className="flex space-x-4">
          <li><a href="/event" className="text-white">Event</a></li>
          <li><a href="/ticket" className="text-white">Tiket</a></li>
          <li><a href="/about" className="text-white">About</a></li>
        </ul>
      </div>
      <div className="navbar-right flex items-center space-x-4">
        <div className="relative group" onClick={toggleDropdown}>
          <img src="https://i.pinimg.com/236x/a3/09/ed/a309ed3530e0f365781d8c2607ac4e7e--profile-pictures.jpg" alt="Profile" className="h-8 w-8 rounded-full cursor-pointer" />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 p-2 rounded shadow-lg z-10">
              <a href="/profile" className="block mb-2 hover:bg-blue-600">Profile</a>
              <a href="/ticket" className="block hover:bg-blue-600">Tiket</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarBuyer;
