import React, { useEffect, useState } from 'react';
import NavbarBuyer from '../../component/navbarBuyer';
import Input from '../../component/Input';
import FootbarBuyer from '../../component/footbarBuyer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EventBuyer = () => {


  const navigate = useNavigate()
  const [dataEvent, setDataEvent] = useState<[]>([]);
  const detailEvent = (event: any) => {
    navigate(`/detail-event/${event}`, {
        state: {
            id: event.id
        }
    })
    console.log(event)
}



  const getEvent = () => {
    axios
      .get(`/events`,)
      .then((res) => {
        setDataEvent(res?.data?.data);
        console.log(res?.data?.data)
      })
      .catch(() => {
        toast.error("Gagal mendapatkan data");
      });
  };

  useEffect(() => {
    getEvent()
  }, [])


  return (
    <section>
      <NavbarBuyer />
      <div className="container mx-auto">
        <div className="flex mt-32 items-center mx-12 justify-between container">
          <select className="select select-bordered bg-transparent">
            <option disabled selected>
              Pick one
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
          <div className='mr-20'>
          <Input placeholder="Silahkan Cari Disini" />
          </div>
        </div>
        <h1 className="font-[titan] font-bold text-3xl text-left mt-5 ml-14">
          List Event
        </h1>
        <div className="flex flex-wrap justify-around mt-5 ml-5">
          {
            dataEvent.map((item: any, index) => {
              return (
                <div key={index} className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div
                  className='cursor-pointer'
                  onClick={() => detailEvent(item.id)}
                  >
                    <img
                      className="rounded-t-lg w-full h-40 "
                      src={item.banner_picture}
                      alt=""
                    />
                  <div className="p-5">
                  
                    
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    
                    <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
                      {item.start_date}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.location}
                    </p>
                    <div className="flex items-center justify-between mt-10">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                          <img
                            src={item.profile_picture}
                            alt="Bulat"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span>{item.partner.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
          
          
        <div className="mt-4 flex justify-center space-x-4 ">
          <button className="bg-blue-950 hover:bg-blue-700 text-white font-normal text-lg py-2 px-4 rounded-lg">
            Prev
          </button>
          <button className="bg-blue-950 hover:bg-blue-700 text-white font-normal text-lg py-2 px-4 rounded-lg">
            Next
          </button>
        </div>
      </div>
      <FootbarBuyer />
    </section>
  );
};

export default EventBuyer;
