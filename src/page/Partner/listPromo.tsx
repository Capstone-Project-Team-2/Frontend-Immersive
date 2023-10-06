import { FaTrashAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import AnimatedPage from "../../component/animatedPage";
import Button from "../../component/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ListPromo = () => {
  const navigate = useNavigate();

  const addpromo = () => {
    navigate("/buat-promo");
  };
  return (
    <div className="p-10 h-full bg-gradient-to-r from-bgTwo from-10% via-gray-700 via-50% to-bgTwo to-100%">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold ">List Promo</h1>
            <h1 className="font-semibold mt-3">
              Mobile Legends: Bang Bang Sultan Cup Rising Star
            </h1>
          </div>
          <div className="flex justify-end text-semibold me-5">
            <Button
              id="add volunteer"
              label="Add Promo"
              width="30"
              height="10"
              onClick={() => addpromo()}
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
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Promo Code
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Kuota
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Date
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
                  <td className="px-6 py-4 text-left">Ulang tahun DPR</td>
                  <td className="px-6 py-4 text-left">PM200</td>
                  <td className="px-6 py-4 text-left">150</td>
                  <td className="px-6 py-4 text-left">05/10/2023</td>
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
                  <td className="px-6 py-4 text-left">Ulang tahun Bupati</td>
                  <td className="px-6 py-4 text-left">GP500</td>
                  <td className="px-6 py-4 text-left">120</td>
                  <td className="px-6 py-4 text-left">05/10/2023</td>
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
      </AnimatedPage>
    </div>
  );
};

export default ListPromo;
