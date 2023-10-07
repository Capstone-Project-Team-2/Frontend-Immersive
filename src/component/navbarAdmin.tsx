import { useState } from 'react';
import profile from '../assets/person.png';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const NavbarAdmin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('id');
    toast.success('Successfully Logout');
    navigate('/');
  };
  return (
    <div className="shadow-lg w-full  bg-bgOne flex justify-end py-4 px-4">
      <div className="relative inline-block text-left">
        <button
          className="flex items-center space-x-2"
          onClick={toggleDropdown}
        >
          <img className="w-12 h-12 rounded-full" src={profile} />
          <div className="flex-col justify-start items-start inline-flex ">
            <h4 className="text-white text-base font-semibold">Imam</h4>
            <p className="text-neutral-500 text-xs font-medium">admin</p>
          </div>
          <IoIosArrowDown />
        </button>
        {dropdownOpen && (
          <div className="origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                onClick={() => navigate('/profile-admin')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </a>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLogout()}
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarAdmin;
