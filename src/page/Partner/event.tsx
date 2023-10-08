import { MdEvent } from "react-icons/md";
import { useState, useEffect } from "react";
import { BiDetail } from "react-icons/bi";
import AnimatedPage from "../../component/animatedPage";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Tabs } from "flowbite-react";
import Table from "../../component/table";
import axios from "axios";

const Event = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [data, setData] = useState<any>([]);

  const detail = (event: any) => {
    navigate(`/myevents/${event}`),
      {
        state: {
          id: event.id,
        },
      };
  };

  const getalldata = () => {
    axios
      .get("/events", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getalldata();
  }, []);

  return (
    <div className="p-10 h-full bg-bgMain">
      <AnimatedPage>
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active icon={MdEvent} title="Event Aktif">
            <div className="py-2 w-full bg-bgTwo rounded-lg">
              <div className="p-5 text-white ">
                <h1 className="font-semibold underline underline-offset-8">
                  Event Aktif
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
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item: any, index: any) => {
                        return (
                          <Table
                            key={index}
                            id={index + 1}
                            name={item.name}
                            location={item.location}
                            end_date={item.end_date}
                            validation_status={item.validation_status}
                            onClick={() => detail(item.id)}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item icon={MdEvent} title="Event Lalu">
            <div className="py-2 w-full bg-bgTwo rounded-lg">
              <div className="p-5 text-white ">
                <h1 className="font-semibold underline underline-offset-8">
                  Event Lalu
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
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
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
                      <td className="px-6 py-4 text-left">
                        Mobile Legends: Bang Bang Sultan Cup Rising Star
                      </td>
                      <td className="px-6 py-4">Tournament</td>
                      <td className="px-6 py-4">Digidaw</td>
                      <td className="px-6 py-4 ">01/10/2023</td>
                      <td className="px-6 py-4 ">Done</td>
                      <td className="px-6 py-4 ">
                        <div className="flex justify-center text-green-400 cursor-pointer">
                          <BiDetail />
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white text-center">
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        1
                      </td>
                      <td className="px-6 py-4 text-left">
                        Mobile Legends: Bang Bang Sultan Cup Rising Star
                      </td>
                      <td className="px-6 py-4">Tournament</td>
                      <td className="px-6 py-4">Digidaw</td>
                      <td className="px-6 py-4 ">01/10/2023</td>
                      <td className="px-6 py-4 ">Done</td>
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
          </Tabs.Item>
        </Tabs.Group>
      </AnimatedPage>
    </div>
  );
};

export default Event;
