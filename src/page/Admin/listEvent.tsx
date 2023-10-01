import AnimatedPage from '../../component/animatedPage';

const ListEvent = () => {
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold text-lg underline underline-offset-8">
              List Event
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
                    Name Event
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    End Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-white ">
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">
                    Mobile Legends: Bang Bang Sultan Cup Rising Star
                  </td>
                  <td className="px-6 py-4">Tournament</td>
                  <td className="px-6 py-4">12/09/23</td>
                  <td className="px-6 py-4">17/09/23</td>
                  <td className="px-6 py-4 ">On Progress</td>
                  <td className="px-6 py-4 ">
                    <div>
                      <button className="bg-bgBtn hover: px-4 py-2  rounded-md">
                        Details
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4">
                    Bergembira Bersama Musik Festival
                  </td>
                  <td className="px-6 py-4">Music</td>
                  <td className="px-6 py-4">12/09/23</td>
                  <td className="px-6 py-4">17/09/23</td>
                  <td className="px-6 py-4 ">Done</td>
                  <td className="px-6 py-4 ">
                    <div>
                      <button className="bg-bgBtn px-4 py-2  rounded-md">
                        Details
                      </button>
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

export default ListEvent;
