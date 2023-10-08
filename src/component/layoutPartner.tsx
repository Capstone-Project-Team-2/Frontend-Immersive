import Sidebar from "./sidebarPartner";
import NavbarPartner from "./navbarPartner";
import { Outlet } from "react-router-dom";
import fotoorang from "../assets//tony.jpg";

const Layoutpartner = () => {
  return (
    <div className="flex">
      <div className="flex h-full">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col bg-bgOne">
        <NavbarPartner
          id="2222"
          title="Presensi"
          image={fotoorang}
          job="Partner"
          name=" Ujang"
        />
        <div className="flex-1 flex-grow overflow-y-auto w-full bg-bgMain">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layoutpartner;
