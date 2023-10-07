import { Link, useLocation } from 'react-router-dom';
import { MdDashboardCustomize } from 'react-icons/md';
import logoAdmin from '../assets/logoAdmin1.png';
import slide from '../assets/control.png';
import { useState } from 'react';

const SidebarVolunteer = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const sideLink = [
    {
      to: '/checkin-volunteer',
      url: <MdDashboardCustomize />,
      name: 'Check In',
    },
  ];

  return (
    <div className="h-full">
      <div
        className={` ${
          open ? 'w-64' : 'w-20 '
        } bg-bgOne h-full p-5 pt-8 relative duration-300`}
      >
        <img
          src={slide}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoAdmin}
            className={`cursor-pointer duration-500 ${open && 'scale-75'}`}
          />
        </div>
        {sideLink.map((element, index) => {
          return (
            <div key={index}>
              <div className="space-y-2 font-medium">
                <Link to={element.to}>
                  <div
                    className={`flex mt-4 rounded-md p-2 cursor-pointer hover:bg-bgBtn active:bg-bgBtn text-white text-lg items-center font-semibold gap-x-4 
                     ${location.pathname === element.to ? 'bg-bgBtn' : ''} `}
                  >
                    <span>{element.url}</span>
                    <h1
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200 `}
                    >
                      {element.name}
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarVolunteer;
