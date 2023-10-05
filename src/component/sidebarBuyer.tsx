import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { HiTicket } from 'react-icons/hi2';
import logoBuyer from '../assets/logoBuyerFix.png';
import { useState } from 'react';

import { RiRefund2Line } from "react-icons/ri";

const SidebarBuyer = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const sideLink = [
    {
      to: '/profile-personal',
      url: <MdAccountCircle />,
      name: 'Personal Data',
    },
    {
      to: '/profile-tiket',
      url: <HiTicket />,
      name: 'Ticket',
    },
    {
        to: '/profile-refund',
        url: <RiRefund2Line />,
        name: 'Refund',
      },
  ];

  return (
    <div className={`h-screen bg-blue-950 ${open ? 'w-64' : 'w-20'}`}>
      <div className="p-5 pt-8 relative flex flex-col h-full duration-300">
        <img
          src="src\assets\control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoBuyer}
            className={`cursor-pointer duration-500 ${open ? 'scale-100' : 'scale-75'}`}
          />
        </div>
        <div className="flex flex-col my-20 space-y-2">
          {sideLink.map((element, index) => (
            <Link key={index} to={element.to}>
              <div
                className={`flex rounded-md p-2 mb-3 cursor-pointer hover:bg-bgBtn active:bg-bgBtn text-white text-lg items-center font-semibold gap-x-4 
                 ${location.pathname === element.to ? 'bg-bgBtn' : ''}`}
              >
                <span>{element.url}</span>
                <h1 className={`${!open && 'hidden'} origin-left duration-200`}>
                  {element.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarBuyer;
