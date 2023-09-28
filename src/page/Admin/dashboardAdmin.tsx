const DashboardAdmin = () => {
  return (
    <div className="container mx-auto">
      <div className="py-4 px-4">
        <h1 className="text-xl font-bold">Welcome to Dashboard Admin</h1>
      </div>
      <div className=" grid grid-cols-2 gap-5 mx-5 py-5 items-center">
        <div className=" ">
          <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4">
            <h1 className=" font-semibold text-sm md:text-lg lg:text-lg">
              All User
            </h1>

            <div className="h-full flex justify-center py-10">
              <p className="text-sm md:text-6xl lg:text-6xl font-semibold">
                80
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4">
            <h1 className=" font-semibold text-sm md:text-lg lg:text-lg">
              All Event
            </h1>

            <div className="h-full flex justify-center py-10">
              <p className="text-sm md:text-6xl lg:text-6xl font-semibold">
                100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
