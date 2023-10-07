import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";

const NavbarPartner = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const [data, setData] = useState<any>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.get("token");
  const partner_id = Cookies.get("id");

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    toast.success("Successfully Logout");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const get_data = () => {
    axios
      .get(`/partners/${partner_id}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data?.data.profile_picture);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //fungsi ganti title header sesuai setiap halaman
  useEffect(() => {
    get_data();
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
        case "/buat-event-partner":
          return "Buat Event";
        case "/ticket":
          return "Ticket";
        case "/promo":
          return "Promo";
        case "/chat-partner":
          return "Chat";
        default:
          return "";
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
      <div className="ms-auto mr-8">
        <button
          className="text-white  border border-gray-700 rounded-md shadow-xl p-2 px-4"
          onClick={() => navigate("/buat-event-partner")}
        >
          Buat Event
        </button>
      </div>
      <div className="relative inline-block text-left">
        <button
          className="flex items-center space-x-2"
          onClick={toggleDropdown}
          id={data?.id}
        >
          <img className="w-12 h-12 rounded-full" src={data?.profile_picture} />
          <div className="flex-col justify-start items-start inline-flex ">
            <h4 className="text-white text-base font-semibold">{data?.name}</h4>
            <p className="text-neutral-500 text-xs font-medium">partner</p>
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
                onClick={() => navigate("/profil-partner")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </a>
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleLogout()}
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
