import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdEvent,
  MdChat,
  MdDiscount,
} from "react-icons/md";
import { SiSymantec } from "react-icons/si";
import { HiTicket } from "react-icons/hi2";
import logoAdmin from "../assets/logoAdmin1.png";
import slide from "../assets/control.png";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");

  const Menus: any = [
    {
      title: "Dashboard",
      url: <MdDashboardCustomize />,
      path: "/dashboard-partner",
    },
    { title: "Event Saya", url: <MdEvent />, path: "/myevents" },
    { title: "Detail Event", url: <MdEvent />, path: "/myevents/:id" },
    { title: "Validation", url: <SiSymantec />, path: "/validation" },
    { title: "Ticket", url: <HiTicket />, path: `/ticket` },
    { title: "Promo", url: <MdDiscount />, path: "/promo" },
    { title: "Chat", url: <MdChat />, path: "/chat-partner" },
  ];

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="flex h-screen">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-bgOne h-full p-5  pt-8 relative duration-300`}
      >
        <img
          src={slide}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoAdmin}
            className={`cursor-pointer duration-500 ${open && "scale-75"}`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((Menu: any, index: any) => (
            <Link to={Menu.path} key={index}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-bgBtn active:bg-bgBtn text-white text-lg items-center font-semibold gap-x-4 
                ${Menu.gap ? "mt-12" : "mt-3"} ${
                  location.pathname === Menu.path ? "bg-bgBtn" : ""
                } `}
                onClick={() => setActiveMenu(Menu.title)}
              >
                <span>{Menu.url}</span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200 `}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
