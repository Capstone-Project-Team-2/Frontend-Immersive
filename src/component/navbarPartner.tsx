import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

interface headerProps {
  id: string;
  title?: string;
  name?: string;
  job?: string;
  image?: string;
}

const NavbarPartner: FC<headerProps> = ({ id, name, job, image }) => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //fungsi ganti title header sesuai setiap halaman
  useEffect(() => {
    const getTitleFromPath = (pathname: string) => {
      switch (pathname) {
        case "/dashboard-partner":
          return "Dashboard";
        case "/myevents":
          return "Event Saya";
        case "/myevents/:id":
          return "Detail Event";
        case "/myevents/:id/transaksi":
          return "Detail Event";
        case "/myevents/:id/ticket":
          return "Detail Event";
        case "/myevents/:id/volunteer":
          return "Detail Event";
        case "/validation":
          return "Validation";
        case "/ticket":
          return "Ticket";
        case "/chat":
          return "Chat";
        default:
          return "Halaman Tidak Ditemukan";
      }
    };
    setPageTitle(getTitleFromPath(location.pathname));
  }, [location.pathname]);

  //fungsi logika untuk logout
  //   const handleLogout = () => {
  //     Swal.fire({
  //       title: "Apakah anda ingin Logout?",
  //       icon: "question",
  //       showCancelButton: true,
  //       confirmButtonText: "YES",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         Cookies.remove("username");
  //         Cookies.remove("token");
  //         Swal.fire({
  //           icon: "success",
  //           title: "Success",
  //           text: "Success Logout",
  //           confirmButtonText: "OK",
  //           cancelButtonText: "Cancel",
  //         }).then((response) => {
  //           if (response?.isConfirmed) {
  //             navigate("/");
  //           }
  //         });
  //       }
  //     });
  //   };

  // logika untuk tida menampilkan header pada landingpage
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className=" flex h-20  bg-bgOne rounded-lg shadow items-center p-6 justify-between ">
      <div className=" justify-between items-center">
        <h4 className="text-white text-base font-semibold">{pageTitle}</h4>
      </div>
      <div className="relative inline-block text-left">
        <button
          className="flex items-center space-x-2"
          onClick={toggleDropdown}
          id={id}
        >
          <img className="w-12 h-12 rounded-full" src={image} />
          <div className="flex-col justify-start items-start inline-flex ">
            <h4 className="text-sky-900 text-base font-medium">{name}</h4>
            <p className="text-neutral-500 text-xs font-medium">{job}</p>
          </div>
          <IoIosArrowDown />
        </button>
        {dropdownOpen && (
          <div className="origin-top-right absolute mt-2 w-40 rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </a>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarPartner;
