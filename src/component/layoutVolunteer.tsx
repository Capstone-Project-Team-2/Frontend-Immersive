import { Outlet } from 'react-router-dom';
import SidebarVolunteer from './sidebarVolunteer';

const LayoutVolunteer = () => {
  return (
    <div className="flex">
      <div className="flex shadow-lg flex-col ">
        <SidebarVolunteer />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex-1 flex-grow overflow-y-auto w-full bg-bgMain">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutVolunteer;
