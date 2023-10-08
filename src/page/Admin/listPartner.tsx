import AnimatedPage from '../../component/animatedPage';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ListPartner = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const token = Cookies.get('token');

  const getData = (page: number, searchTerm?: string) => {
    axios
      .get(`/partners?page=${page}&item=5&search=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data?.data);
      })
      .catch(() => {
        toast.error('Gagal mendapatkan data');
      });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    getData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white flex justify-between ">
            <h1 className="font-semibold text-lg underline underline-offset-8">
              List Partner
            </h1>
            <div className="">
              <input
                name="search"
                type="text"
                className="w-48 h-10 rounded-lg text-black"
                placeholder="Search Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                {data.map((item: any, index: any) => {
                  const rowNumber = (currentPage - 1) * 5 + index + 1;
                  return (
                    <tr
                      key={index}
                      className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne "
                    >
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        {rowNumber}
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">
                        {item.phone_number ? item.phone_number : 'null'}
                      </td>
                      <td className="px-6 py-4 ">
                        {item.address ? item.address : 'null'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end gap-5 m-4 text-white font-semibold">
          <button
            onClick={prevPage}
            className={`outline rounded-lg outline-bgBtn  py-2 hover:bg-bgBtn hover:text-white hover:outline-1 hover:text-opacity-90 font-semibold text-white rounded-btn flex justify-center items-center w-32 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Previous
          </button>
          {data.length < 5 ? null : (
            <button
              onClick={nextPage}
              className="outline rounded-lg outline-bgBtn  py-3 hover:bg-bgBtn text-white hover:outline-1 hover:text-opacity-90 font-semibold  rounded-btn flex justify-center items-center w-32"
            >
              Next
            </button>
          )}
        </div>
      </AnimatedPage>
    </div>
  );
};

export default ListPartner;
