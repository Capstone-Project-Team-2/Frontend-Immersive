import SidebarAdmin from './sidebarAdmin';
import NavbarAdmin from '../page/Admin/navbarAdmin';
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div className="flex">
      <div className="flexshadow-lg flex-col w-1/5">
        <SidebarAdmin />
      </div>
      <div className="w-full flex flex-col">
        <NavbarAdmin />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
