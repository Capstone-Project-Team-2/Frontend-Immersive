import { GiWallet } from "react-icons/gi";
import { HiTicket } from "react-icons/hi2";
import { MdPeople } from "react-icons/md";
import { BsCalculatorFill } from "react-icons/bs";
import { IoHandRightSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../component/animatedPage";
import foto from "../../assets/poster.png";

const Eventdetail = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10 h-full bg-gradient-to-r from-bgTwo from-10% via-gray-700 via-50% to-bgTwo to-100% text-white">
      <AnimatedPage>
        <div>
          <h1>Mobile Legends: Bang Bang Sultan Cup Rising Star</h1>
        </div>
        <div className="flex mt-2">
          <div className="w-1/2">
            <div className="">
              <img src={foto} className="w-full h-full" />
              <div className="flex gap-10">
                <div>
                  <div>Nama Event</div>
                  <p>
                    Mobile Legends: Bang Bang
                    <br></br>Sultan Cup Rising Star
                  </p>
                  <div className="mt-5">Kategori</div>
                  <div>Tournament</div>
                </div>
                <div>
                  <div>Date</div>
                  <div>25/09/2023</div>
                </div>
                <div>
                  <div>Alamat</div>
                  <div>Digidaw</div>
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
                      onClick={() => navigate("/myevents/:id/volunteer")}
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
