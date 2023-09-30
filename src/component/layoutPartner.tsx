import Sidebar from "./sidebarPartner";
import NavbarPartner from "./navbarPartner";
import { Outlet } from "react-router-dom";

const Layoutpartner = () => {
  return (
    <div className="flex">
      <div className="flex h-full">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col bg-bgOne">
        <NavbarPartner
          id=""
          title="Presensi"
          image="src\assets\person.png"
          job="Manager"
          name=" Jheni Doe"
        />
        <div className="flex-1 flex-grow overflow-y-auto w-full bg-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layoutpartner;
