import { MdPerson, MdPeople, MdEvent } from 'react-icons/md';
import AnimatedPage from '../../component/animatedPage';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const DashboardAdmin = () => {
  const [buyercount, setBuyercount] = useState([]);
  const [partnercount, setPartnercount] = useState([]);
  const [eventcount, setEventcount] = useState([]);
  const token = Cookies.get('token');

  const getDataBuyer = async () => {
    try {
      const response = await axios.get(`/buyers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBuyercount(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error('Gagal mendapatkan data');
    }
  };

  const getDataPartner = async () => {
    try {
      const response = await axios.get(`/partners`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPartnercount(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error('Gagal mendapatkan data');
    }
  };

  const getDataEvent = async () => {
    try {
      const response = await axios.get(`/events`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEventcount(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error('Gagal mendapatkan data');
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get('token')) {
      navigate('/login-admin');
    }
    getDataBuyer();
    getDataPartner();
    getDataEvent();
  }, []);
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2">
          <h1 className="text-xl font-bold text-white">
            Welcome to Dashboard Admin
          </h1>
        </div>
        <div className=" grid grid-cols-2 gap-5 mx-5 py-5 items-center">
          <div className=" ">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <MdPerson />
                <h1>All Buyer</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  {buyercount.length}
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <MdPeople />
                <h1>All Partner</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  {partnercount.length}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-30 md:h-52 lg:h-52 shadow-lg rounded-lg p-4 bg-bgThird text-white">
              <div className="flex items-center gap-2 text-xl font-bold">
                <MdEvent />
                <h1>All Event</h1>
              </div>
              <div className="h-full flex justify-center py-10">
                <p className="text-sm md:text-6xl lg:text-6xl font-semibold ">
                  {eventcount.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default DashboardAdmin;
