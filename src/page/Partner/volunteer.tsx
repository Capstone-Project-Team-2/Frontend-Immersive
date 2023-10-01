import { FaTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import AnimatedPage from "../../component/animatedPage";
import Button from "../../component/button";
import Modal from "../../component/modal";
import { useState } from "react";

const Volunteer = () => {
  const [popup, setPopup] = useState<boolean>(false);

  const addvolunteer = () => {
    setPopup(!popup);
  };
  return (
    <div className="p-10 h-full bg-bgMain">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold ">Volunteer</h1>
            <h1 className="font-semibold mt-3">
              Mobile Legends: Bang Bang Sultan Cup Rising Star
            </h1>
          </div>
          <div className="flex justify-end text-semibold me-5">
            <Button
              id="add volunteer"
              label="Add Volunteer"
              width="24"
              height="10"
              onClick={() => addvolunteer()}
            />
          </div>
          <div className="p-2">
            <table className="w-full text-sm text-left  font-semibold">
              <thead className="text-md uppercase  text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white text-center">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4 text-left">John Doe</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center gap-4 cursor-pointer">
                      <span className="text-green-400">
                        <BiDetail />
                      </span>
                      <span className="text-red-500">
                        <FaTrashAlt />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white text-center">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4 text-left">Windah Basudara</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center gap-4 cursor-pointer">
                      <span className="text-green-400">
                        <BiDetail />
                      </span>
                      <span className="text-red-500">
                        <FaTrashAlt />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Modal isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[30vw] h-[60vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold my-2">
                Add Volunteer
              </div>
              <div className="flex flex-col mx-10">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  placeholder="Ujang"
                  className="mt-1 input input-bordered rounded-sm w-full max-w-xs focus:outline-none bg-white"
                />
              </div>
              <div className="flex flex-col mx-10 mt-2">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="ujang@gmail.com"
                  className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none bg-white"
                />
              </div>
              <div className="flex flex-col mx-10 mt-2">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Password
                </label>
                <input
                  type="text"
                  placeholder="123n1i2321"
                  className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
                />
              </div>
              <div className="mx-auto mt-5">
                <Button id="Add" label="Save" color="bg-gray-800" width="40" />
              </div>
            </div>
          </Modal>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Volunteer;
