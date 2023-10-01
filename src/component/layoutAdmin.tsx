import SidebarAdmin from './sidebarAdmin';
import NavbarAdmin from './navbarAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div className="flex">
      <div className="flex shadow-lg flex-col ">
        <SidebarAdmin />
      </div>
      <div className="w-full flex flex-col bg-bgOne">
        <NavbarAdmin />
        <div className="flex-1 flex-grow overflow-y-auto w-full bg-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
