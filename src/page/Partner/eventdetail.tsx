import { GiWallet } from "react-icons/gi";
import { HiTicket } from "react-icons/hi2";
import { MdPeople } from "react-icons/md";
import { BsCalculatorFill } from "react-icons/bs";
import { IoHandRightSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import AnimatedPage from "../../component/animatedPage";

const Eventdetail = () => {
  const token = Cookies.get("token");
  const [data, setData] = useState<any>([]);
  const eventId = useParams();
  const navigate = useNavigate();

  const volunteer = (event: any) => {
    navigate(`/myevents/${event}/volunteer`),
      {
        state: {
          id: event.id,
        },
      };
  };

  const getalldata = () => {
    axios
      .get(`/events/${eventId.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getalldata();
  }, []);
  return (
    <div className="p-10 h-full bg-bgMain text-white">
      <AnimatedPage>
        <div>
          <h1 className="text-[24px] font-semibold">{data.name}</h1>
        </div>
        <div className="flex mt-2">
          <div className="w-1/2">
            <div className="">
              <img src={data.banner_picture} className="w-full h-full" />
              <div className="flex flex-col gap-5">
                <div>
                  <div className="text-lg font-semibold">Nama Event</div>
                  <p className="text-md">{data.name}</p>
                </div>
                <div>
                  <div className="text-lg font-semibold">Date</div>
                  <div className="text-md">{data.start_date}</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">Alamat</div>
                  <div className="text-md">{data.location}</div>
                </div>
                <div>
                  <div className="text-lg font-semibold">Deskripsi</div>
                  <div className="text-md">{data.description}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-80">
            <div className="ms-[10vw] w-full h-16 border rounded-sm border-gray-500 shadow-md">
              <div className="grid grid-cols-3">
                <div className="">
                  <div className=" text-blue-500 w-50 cursor-pointer flex justify-center mt-1 border-r border-gray-500">
                    <GiWallet size={55} />
                  </div>
                </div>
                <div className="col-span-2 ml-3">
                  <div className="mt-2 text-gray-300 font-bold">Pendapatan</div>
                  <div className=" font-semibold">1000000</div>
                </div>
              </div>
            </div>
            <div className="ms-[10vw] w-full h-16 border border-gray-500 rounded-sm mt-2">
              <div className="grid grid-cols-3">
                <div className="">
                  <div className=" text-yellow-500 w-50 cursor-pointer flex justify-center mt-1 border-r border-gray-500">
                    <HiTicket
                      size={55}
                      onClick={() => navigate("/myevents/:id/ticket")}
                    />
                  </div>
                </div>
                <div className="col-span-2 ml-3">
                  <div className="mt-2  text-gray-300 font-bold">
                    Penjualan Tiket
                  </div>
                  <div className=" font-semibold">200/1000</div>
                </div>
              </div>
            </div>
            <div className="ms-[10vw] w-full h-16 border border-gray-500 rounded-sm mt-2">
              <div className="grid grid-cols-3">
                <div className="">
                  <div className=" text-green-400 w-50 cursor-pointer flex justify-center mt-1 border-r border-gray-500 ">
                    <BsCalculatorFill
                      size={55}
                      onClick={() => navigate("/myevents/:id/transaksi")}
                    />
                  </div>
                </div>
                <div className="col-span-2 ml-3">
                  <div className="mt-2  text-gray-300 font-bold ">
                    Transaksi
                  </div>
                  <div className="font-semibold">1000000</div>
                </div>
              </div>
            </div>
            <div className="ms-[10vw] w-full h-16 border border-gray-500 rounded-sm mt-2">
              <div className="grid grid-cols-3">
                <div className="">
                  <div className=" text-orange-500 w-50 cursor-pointer flex justify-center mt-1 border-r border-gray-500 ">
                    <MdPeople size={55} />
                  </div>
                </div>
                <div className="col-span-2 ml-3">
                  <div className="mt-2  text-gray-300 font-bold ">
                    Pengunjung
                  </div>
                  <div className="font-semibold">200</div>
                </div>
              </div>
            </div>
            <div className="ms-[10vw] w-full h-16 border border-gray-500 rounded-sm mt-2">
              <div className="grid grid-cols-3">
                <div className="">
                  <div className=" text-orange-300 w-50 cursor-pointer flex justify-center mt-1 border-r border-gray-500 ">
                    <IoHandRightSharp
                      size={55}
                      onClick={() => volunteer(data.id)}
                    />
                  </div>
                </div>
                <div className="col-span-2 ml-3">
                  <div className="mt-2  text-gray-300 font-bold">Volunteer</div>
                  <div className="font-semibold">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Eventdetail;
