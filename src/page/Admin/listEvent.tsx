import { useState, useEffect } from 'react';
import AnimatedPage from '../../component/animatedPage';
import axios from 'axios';
import toast from 'react-hot-toast';

const ListEvent = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`/events`)
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data?.data);
      })
      .catch(() => {
        toast.error('Gagal mendapatkan data');
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
                    Name Partner
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
                </tr>
              </thead>
              <tbody className="text-white ">
                {data.map((item: any, index: any) => {
                  const startDateParts = item.start_date
                    .split(' ')[0]
                    .split('-');
                  const startDate = new Date(
                    `${startDateParts[2]}-${startDateParts[1]}-${startDateParts[0]}`
                  );

                  const endDateParts = item.end_date.split(' ')[0].split('-');
                  const endDate = new Date(
                    `${endDateParts[2]}-${endDateParts[1]}-${endDateParts[0]}`
                  );

                  const currentDate = new Date();

                  let status = 'On Progress';
                  if (currentDate > endDate) {
                    status = 'Done';
                  } else if (currentDate < startDate) {
                    status = 'Not Yet';
                  }

                  const dateStart = item.start_date.split(' ')[0];
                  const dateEnd = item.end_date.split(' ')[0];

                  return (
                    <tr
                      key={index}
                      className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne "
                    >
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.partner.name}</td>
                      <td className="px-6 py-4">{dateStart}</td>
                      <td className="px-6 py-4">{dateEnd}</td>
                      <td className="px-6 py-4 ">{status}</td>
                    </tr>
                  );
                })}
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
