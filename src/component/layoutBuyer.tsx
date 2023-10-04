import { Outlet } from 'react-router-dom';
import SidebarBuyer from './sidebarBuyer';

const LayoutBuyer = () => {
  return (
    <div className="flex">
      <div className="flex shadow-lg flex-col ">
        <SidebarBuyer />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex-1 flex-grow overflow-y-auto w-full bg-gray-200">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutBuyer;
