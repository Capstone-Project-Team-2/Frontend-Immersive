import AnimatedPage from '../../component/animatedPage';
import { MdCheckCircle, MdDisabledByDefault } from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

const ValidationAdmin = () => {
  const [data, setData] = useState([]);
  const token = Cookies.get('token');

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

  const handleValidation = (eventId, validationStatus) => {
    axios
      .put(
        `/events/validate/${eventId}`,
        {
          validation_status: validationStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        getData();
      })
      .catch(() => {
        toast.error('Gagal memvalidasi event');
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
              Validation Event
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
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-white ">
                {data.map((item: any, index: any) => {
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
                      <td className="px-6 py-4">{item.start_date}</td>
                      <td className="px-6 py-4">{item.end_date}</td>
                      <td className="px-6 py-4 ">{item.validation_status}</td>
                      <td className="px-6 py-4 ">
                        <div className="flex gap-7">
                          <span
                            onClick={() => handleValidation(item.id, 'Valid')}
                            className="text-2xl text-green-400 cursor-pointer"
                          >
                            <MdCheckCircle />
                          </span>
                          <span
                            onClick={() =>
                              handleValidation(item.id, 'Not Valid')
                            }
                            className="text-2xl text-red-400 cursor-pointer"
                          >
                            <MdDisabledByDefault />
                          </span>
                        </div>
                      </td>
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

export default ValidationAdmin;
