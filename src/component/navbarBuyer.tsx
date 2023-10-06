import React, { useState, useEffect } from 'react';
import logoBuyer from '../assets/logoBuyer1.png';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const NavbarBuyer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate(); 
  const name = Cookies.get("name");
  const token = Cookies.get("token");
  const buyer_id = Cookies.get("id");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    toast.success('Successfully Logout');
    navigate('/login-buyer'); 
  };

  const getTimezone = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Selamat Pagi");
    } else if (currentHour >= 12 && currentHour < 15) {
      setGreeting("Selamat Siang");
    } else if (currentHour >= 15 && currentHour < 18) {
      setGreeting("Selamat Sore");
    } else {
      setGreeting("Selamat Malam");
    }
  };

  const get_data = () => {
    axios
      .get(`/buyers/${buyer_id}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data?.data.profile_picture)
      })
      .catch(() => {
        toast.error("Anda Belum Melakukan Login");
      });
  };
  console.log(data);

  useEffect(() => {
    getTimezone();
    get_data();
  }, []);

  return (
    <nav className="bg-blue-950 p-4 flex fixed top-0 items-center justify-between w-full z-50">
      <div className="flex">
        <img src={logoBuyer} alt="Brand Logo" className="w-14"
        onClick={() => navigate("/")} />
        <div className="text-white items-center pt-2">
          <p className="font-normal text-xs">Event, easier with</p>
          <h1 className="font-extrabold text-xl">EVVE</h1>
        </div>
      </div>
      <div className="ml-14">
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
      <div className="navbar-right flex items-center space-x-4 relative">
        <div className='flex flex-row'>
        <div className="text-white mr-2 font-semibold text-xl">
            {greeting}, {data.name}
          </div>
          <div className="relative group" onClick={toggleDropdown}>
            <img
              src="https://i.pinimg.com/236x/a3/09/ed/a309ed3530e0f365781d8c2607ac4e7e--profile-pictures.jpg"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
            />
            {isOpen && (
              <div className="absolute right-0 z-10  mt-2 origin-top-right bg-blue-950 border border-gray-300 rounded-md shadow-lg">
                <div className="py-1">
                  <a
                    href="/profile-personal"
                    className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    Profile
                  </a>
                  <a
                    href="/profile-tiket"
                    className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    Tiket
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default NavbarBuyer;
