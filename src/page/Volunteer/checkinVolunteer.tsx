import { FaTrashAlt } from 'react-icons/fa';
import AnimatedPage from '../../component/animatedPage';
import Button from '../../component/button';

const CheckinVolunteer = () => {
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold ">Ticket</h1>
            <h1 className="font-semibold mt-3">
              Mobile Legends: Bang Bang Sultan Cup Rising Star
            </h1>
          </div>
          <div className="flex gap-5 text-semibold me-5">
            <input
              type="text"
              placeholder="Search here..."
              className="w-60 h-10 ms-10 rounded-md"
            ></input>
            <Button
              id="add volunteer"
              label="Search"
              width="24"
              height="10"
              color="bg-bgBtn"
              hover="bg-blue-900"
            />
            <span className="ml-[26vw]">
              <Button
                id="add volunteer"
                label="Scan Ticket"
                width="36"
                height="10"
                color="bg-bgBtn"
                hover="bg-blue-900"
              />
            </span>
          </div>
          <div className="p-2">
            <table className="w-full text-sm text-left  font-semibold">
              <thead className="text-md uppercase  text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ticket Class
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status Use
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
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">VIP</td>
                  <td className="px-6 py-4 ">Not Used</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center text-red-500 cursor-pointer">
                      <FaTrashAlt />
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white text-center">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4">Windah Basudara</td>
                  <td className="px-6 py-4">Gold</td>
                  <td className="px-6 py-4 ">Used</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center text-red-500 cursor-pointer">
                      <FaTrashAlt />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default CheckinVolunteer;
