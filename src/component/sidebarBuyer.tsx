import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { HiTicket } from 'react-icons/hi';
import { BiLogOut } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import logoBuyer from '../assets/logoBuyerFix.png';

const SidebarBuyer = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const sideLink = [
    {
      to: '/profile-personal',
      icon: <MdAccountCircle />,
      name: 'Personal Data',
    },
    {
      to: '/profile-tiket',
      icon: <HiTicket />,
      name: 'Ticket',
    },
    {
      to: '/profile-refund',
      icon: <RiRefund2Line />,
      name: 'Refund',
    },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Successfully Logout");
    navigate("/");
  };

  return (
    <div className={`h-full bg-blue-950 ${open ? 'w-64' : 'w-20'}`}>
      <div className="p-5 pt-8 relative flex flex-col h-full duration-300">
        <img
          src={logoBuyer}
          className={`cursor-pointer duration-500 ${open ? 'scale-100' : 'scale-75'}`}
          alt="Logo"
        />
        <div className="flex gap-x-4 items-center">
          <button
            className={`absolute cursor-pointer right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col my-20 space-y-2">
          {sideLink.map((element, index) => (
            <Link key={index} to={element.to}>
              <div
                className={`flex rounded-md p-2 mb-3 cursor-pointer hover:bg-bgBtn active:bg-bgBtn text-white text-lg items-center font-semibold gap-x-4 
                 ${location.pathname === element.to ? 'bg-bgBtn' : ''}`}
              >
                <span>{element.icon}</span>
                <h1 className={`${!open && 'hidden'} origin-left duration-200`}>
                  {element.name}
                </h1>
              </div>
            </Link>
          ))}
          <div
            className='flex rounded-md p-2 mb-3 cursor-pointer hover:bg-bgBtn active:bg-bgBtn text-white text-lg items-center font-semibold gap-x-4'
            onClick={() => handleLogout()}
          >
            <span>{<BiLogOut />}</span>
            <h1 className={`${!open && 'hidden'} origin-left duration-200`}>
              Logout
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarBuyer;
