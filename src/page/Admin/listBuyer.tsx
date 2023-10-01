import { MdRemoveRedEye } from 'react-icons/md';
import AnimatedPage from '../../component/animatedPage';

const ListBuyer = () => {
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold text-lg underline underline-offset-8">
              List Buyer
            </h1>
          </div>
          <div className="p-2">
            <table className="w-full text-sm text-left  font-semibold">
              <thead className="text-base uppercase text-white">
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
                </tr>
              </thead>
              <tbody className="text-white ">
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">john@mail.com</td>
                  <td className="px-6 py-4">088192654096</td>
                  <td className="px-6 py-4 ">
                    <div className="text-xl pl-8 cursor-pointer">
                      <MdRemoveRedEye />
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4">Robert</td>
                  <td className="px-6 py-4">robert@mail.com</td>
                  <td className="px-6 py-4">088187205946</td>
                  <td className="px-6 py-4 ">
                    <div className="text-xl pl-8 cursor-pointer">
                      <MdRemoveRedEye />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end gap-3 m-4 text-white font-semibold">
          <button className="border border-bgBtn hover:bg-bgBtn w-32 py-3 rounded-lg">
            Previous
          </button>
          <button className="border border-bgBtn hover:bg-bgBtn w-32 py-3 rounded-lg">
            Next
          </button>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default ListBuyer;
