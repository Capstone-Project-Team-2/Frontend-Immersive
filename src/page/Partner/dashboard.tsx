import { MdPeople, MdEvent } from "react-icons/md";
import { HiTicket } from "react-icons/hi2";
import { GiWallet } from "react-icons/gi";
import AnimatedPage from "../../component/animatedPage";

const Dashboard = () => {
  return (
    <div className="container mx-auto h-full bg-black">
      <AnimatedPage>
        <div className=" grid grid-cols-2 gap-5 mx-5 py-5 items-center">
          <div className=" ">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <MdEvent />
                <h1>Semua Event</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  15
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <GiWallet />
                <h1>Total Penjualan</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  10000000
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <HiTicket />
                <h1>Total Tiket Terjual</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  500
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <MdPeople />
                <h1>Total Pengunjung</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  500
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Dashboard;
