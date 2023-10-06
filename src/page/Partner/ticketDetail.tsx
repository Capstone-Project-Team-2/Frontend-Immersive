import { BiDetail } from "react-icons/bi";
import AnimatedPage from "../../component/animatedPage";
const TicketDetail = () => {
  return (
    <div className="p-10 h-full bg-gradient-to-r from-bgTwo from-10% via-gray-700 via-50% to-bgTwo to-100%">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold ">Ticket</h1>
            <h1 className="font-semibold mt-3">
              Mobile Legends: Bang Bang Sultan Cup Rising Star
            </h1>
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
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ticket Class
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status Use
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
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
                  <td className="px-6 py-4">Digidaw</td>
                  <td className="px-6 py-4">VIP</td>
                  <td className="px-6 py-4 ">Not Used</td>
                  <td className="px-6 py-4 ">01231312313</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center text-green-400 cursor-pointer">
                      <BiDetail />
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white text-center">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4">Windah Basudara</td>
                  <td className="px-6 py-4">Dramagon</td>
                  <td className="px-6 py-4">Gold</td>
                  <td className="px-6 py-4 ">Used</td>
                  <td className="px-6 py-4 ">013123131</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center text-green-400 cursor-pointer">
                      <BiDetail />
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

export default TicketDetail;
