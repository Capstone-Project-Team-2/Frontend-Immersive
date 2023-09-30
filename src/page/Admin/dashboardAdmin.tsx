import { MdPerson, MdPeople, MdEvent } from 'react-icons/md';

const DashboardAdmin = () => {
  return (
    <div className="container mx-auto h-full bg-bgMain">
      <div className="py-4 px-4">
        <h1 className="text-xl font-bold text-white">
          Welcome to Dashboard Admin
        </h1>
      </div>
      <div className=" grid grid-cols-2 gap-5 mx-5 py-5 items-center">
        <div className=" ">
          <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
            <div className="flex items-center gap-2 text-xl font-bold">
              <MdPerson />
              <h1>All Buyer</h1>
            </div>
            <div className="h-full flex justify-center py-10">
              <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                100
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
            <div className="flex items-center gap-2 text-xl font-bold">
              <MdPeople />
              <h1>All Partner</h1>
            </div>
            <div className="h-full flex justify-center py-10">
              <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                15
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
            <div className="flex items-center gap-2 text-xl font-bold">
              <MdEvent />
              <h1>All Event</h1>
            </div>
            <div className="h-full flex justify-center py-10">
              <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                20
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
