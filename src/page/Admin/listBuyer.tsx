import { MdRemoveRedEye } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

const ListBuyer = () => {
  return (
    <div className="p-10 h-full bg-bgMain">
      <div className="py-2 w-full bg-bgTwo rounded-lg">
        <div className="p-5 text-white ">
          <h1 className="font-semibold underline underline-offset-8">
            List Buyer
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
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
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
                <td className="px-6 py-4">john@mail.com</td>
                <td className="px-6 py-4">088192654096</td>
                <td className="px-6 py-4 ">
                  <div className="flex justify-center cursor-pointer">
                    <MdRemoveRedEye />
                  </div>
                </td>
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
                <td className="px-6 py-4">Robert</td>
                <td className="px-6 py-4">robert@mail.com</td>
                <td className="px-6 py-4">088187205946</td>
                <td className="px-6 py-4 ">
                  <div className="flex justify-center cursor-pointer">
                    <MdRemoveRedEye />
                  </div>
                </td>
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
    </div>
  );
};

export default ListBuyer;
