import { Link, useLocation } from 'react-router-dom';
import {
  MdDashboardCustomize,
  MdPerson,
  MdPeople,
  MdEvent,
  MdChat,
} from 'react-icons/md';
import { SiSymantec } from 'react-icons/si';
import { HiTicket } from 'react-icons/hi2';

const SidebarAdmin = () => {
  const location = useLocation();
  const sideLink = [
    {
      to: '/dashboard-admin',
      url: <MdDashboardCustomize />,
      name: 'Dashboard',
    },
    {
      to: '/list-buyer',
      url: <MdPerson />,
      name: 'List Buyer',
    },
    {
      to: '/list-partner',
      url: <MdPeople />,
      name: 'List Partner',
    },
    {
      to: '/list-event',
      url: <MdEvent />,
      name: 'List Event',
    },
    {
      to: '/list-event',
      url: <SiSymantec />,
      name: 'Validation',
    },
    {
      to: '/list-event',
      url: <HiTicket />,
      name: 'Ticket',
    },
    {
      to: '/list-event',
      url: <MdChat />,
      name: 'Chat',
    },
  ];

  return (
    <div>
      <div className="space-y-4 h-screen bg-bgOne">
        <div className="px-4 py-5">
          <h1 className="font-bold  text-white text-2xl">Logo</h1>
        </div>
        {sideLink.map((element, index) => {
          return (
            <div key={index}>
              <div className="space-y-2 font-medium">
                <Link to={element.to}>
                  <div
                    className={`cursor-pointer flex items-center py-2 px-4 text-white hover:bg-bgThird hover:text-white ${
                      location.pathname === element.to
                        ? 'bg-bgThird text-white'
                        : ''
                    }`}
                  >
                    <span>{element.url}</span>
                    <h1 className="px-4 hidden md:block lg:block font-semibold text-sm">
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

export default SidebarAdmin;
