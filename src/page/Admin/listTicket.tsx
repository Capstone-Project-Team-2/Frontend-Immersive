import AnimatedPage from '../../component/animatedPage';
import { MdCheckCircle, MdDisabledByDefault } from 'react-icons/md';

const ListTicket = () => {
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold text-lg underline underline-offset-8">
              List Ticket
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
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ticket Class
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status Use
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Methode Payment
                  </th>
                </tr>
              </thead>
              <tbody className="text-white ">
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">
                    Mobile Legends: Bang Bang Sultan Cup Rising Star
                  </td>
                  <td className="px-6 py-4">Regular</td>
                  <td className="px-6 py-4">Use</td>
                  <td className="px-6 py-4 ">Gopay</td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">Robert Downey</td>
                  <td className="px-6 py-4">
                    Bergembira Bersama Musik Festival
                  </td>
                  <td className="px-6 py-4">VIP</td>
                  <td className="px-6 py-4">Not Yet</td>
                  <td className="px-6 py-4 ">Dana</td>
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

export default ListTicket;
