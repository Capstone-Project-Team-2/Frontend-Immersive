import React, { useState } from 'react';
import NavbarBuyer from '../../component/navbarBuyer';
import { MdDateRange, MdAccessTimeFilled, MdLocationOn } from 'react-icons/md';
import FootbarBuyer from '../../component/footbarBuyer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import AnimatedPage from '../../component/animatedPage';
import axios from 'axios';
import toast from 'react-hot-toast';

const DetailPemesanan = () => {
  const navigate = useNavigate();
  const eventId = useParams();
  const [detail, setDetail] = useState();
  const [tanggal, setTanggal] = useState();
  const [waktu, setWaktu] = useState();
  const [ticketQuantities, setTicketQuantities] = useState({});
  // const [showDetailHarga, setShowDetailHarga] = useState(false);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = () => {
    axios
      .get(`/events/${eventId.id}`)
      .then((res) => {
        setDetail(res?.data?.data);
        console.log(res?.data?.data);
        const startDateParts = res?.data.data.start_date.split(' ');
        setTanggal(startDateParts[0]);
        setWaktu(startDateParts[1]);
      })
      .catch(() => {
        toast.error('Gagal mendapatkan data');
      });
  };

  const handleTicketQuantityChange = (ticketId, quantity) => {
    setTicketQuantities({
      ...ticketQuantities,
      [ticketId]: quantity,
    });
  };

  const calculateTotalTicket = () => {
    let totalTickets = 0;
    for (const ticketId in ticketQuantities) {
      totalTickets += ticketQuantities[ticketId];
    }
    return totalTickets;
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    for (const ticketId in ticketQuantities) {
      const quantity = ticketQuantities[ticketId];
      const ticket = detail?.ticket.find((item) => item.id === ticketId);
      if (ticket) {
        totalCost += ticket.price * quantity;
      }
    }
    return totalCost;
  };

  return (
    <section className="bg-gray-100">
      <NavbarBuyer />
      <div className="bg-yellow-300 shadow-md text-lg p-5 text-center ">
        10:50 Segera Selesaikan Pesananmu
      </div>
      <AnimatedPage>
        <div className="grid grid-cols-2 gap-8 m-14">
          <div className="shadow-lg rounded-lg bg-white p-7">
            <div className="flex flex-row  mb-5">
              <img
                src={detail?.banner_picture}
                alt=""
                className="w-1/3 h-52 rounded-lg"
              />
              <div className="mt-5 ml-5 flex flex-col">
                <h1 className="font-bold font-[titan] text-3xl mb-5">
                  {detail?.name}
                </h1>
                <div className="font-medium text-lg mb-2 flex text-blue-500">
                  <span className="text-xl pt-0.5 mr-1">
                    <MdDateRange />
                  </span>
                  {tanggal}
                </div>
                <div className="font-medium text-lg mb-2 flex text-blue-500">
                  <span className="text-xl pt-0.5 mr-1">
                    <MdAccessTimeFilled />
                  </span>
                  {waktu}
                </div>
                <div className="font-medium text-lg mb-2 flex text-blue-500">
                  <span className="text-xl pt-0.5 mr-1">
                    <MdLocationOn />
                  </span>
                  {detail?.location}
                </div>
              </div>
            </div>
            <div className=" border-black">
              <div className="font-[titan] font-bold text-left text-3xl mb-3 border-b border-gray-400 pb-3">
                Pilih Tiket
              </div>
              <div className="flex flex-col space-y-4">
                {detail?.ticket?.map((ticket: any, index) => {
                  const ticketId = ticket.id;
                  const selectedQuantity = ticketQuantities[ticketId] || 0;

                  return (
                    <div key={index} className="items-center space-x-2">
                      <span className="font-semibold text-blue-500">
                        {ticket.name_class}
                      </span>
                      <div className="flex justify-between mt-2">
                        {ticket.price}
                        <select
                          className="border p-1 rounded"
                          onChange={(e) =>
                            handleTicketQuantityChange(
                              ticketId,
                              parseInt(e.target.value)
                            )
                          }
                          value={selectedQuantity}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg rounded-lg bg-white p-7">
            <div className="flex flex-col mt-4">
              <div className="flex flex-row justify-between gap-5">
                <input
                  type="text"
                  placeholder="Masukkan Promo"
                  className="h-12 w-full"
                />
                <button className="bg-blue-500 w-32 h-12 hover:bg-blue-700 text-white font-bold rounded mb-4">
                  Terapkan
                </button>
              </div>
            </div>
            <div className="font-bold text-2xl my-5">Detail Harga</div>
            {detail?.ticket?.map((ticket, index) => {
              const quantity = ticketQuantities[ticket.id] || 0;
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between text-lg font-medium mb-2"
                >
                  <div>{ticket.name_class}</div>
                  <div>{quantity}</div>
                </div>
              );
            })}
            <div className="border-t border-gray-400 mb-2"></div>
            <div className="flex flex-row justify-between text-lg font-medium mb-2">
              <div>Total Tiket</div>
              <div>{calculateTotalTicket()}</div>
            </div>
            <div className="flex flex-row justify-between text-lg font-medium mb-2">
              <div>Total Harga Tiket</div>
              <div>Rp.{calculateTotalCost().toLocaleString()}</div>
            </div>
            <div className="flex flex-row justify-between text-lg font-medium mb-2">
              <div>Biaya Layanan</div>
              <div>Rp.5000</div>
            </div>
            <div className="border-t border-gray-400 mb-2"></div>
            <div className="flex flex-row justify-between  font-bold text-xl mt-2">
              <div>Total Bayar</div>
              <div>Rp.{(calculateTotalCost() + 5000).toLocaleString()}</div>
            </div>
            <div className="flex flex-col mb-4 mt-10">
              <label className="text-lg font-medium mb-4">
                Metode Pembayaran
              </label>
              <select className="border p-2 rounded">
                <option selected hidden>
                  Pilih Metode Pembayaran
                </option>
                <option value="bca">Bank BCA</option>
              </select>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 rounded mt-4 w-full"
            >
              Beli Tiket
            </button>
          </div>
        </div>
      </AnimatedPage>
      <FootbarBuyer />
    </section>
  );
};

export default DetailPemesanan;
