import NavbarBuyer from '../../component/navbarBuyer';
import FootbarBuyer from '../../component/footbarBuyer';
import { useNavigate, useParams } from 'react-router-dom';
import { MdDateRange, MdAccessTimeFilled, MdLocationOn } from 'react-icons/md';
import AnimatedPage from '../../component/animatedPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const DetailEvent = () => {
  const navigate = useNavigate();
  const eventId = useParams();
  const [detail, setDetail] = useState();
  const [tanggal, setTanggal] = useState();
  const [waktu, setWaktu] = useState();

  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  const getEvent = () => {
    axios
      .get(`/events/${eventId.id}`,)
      .then((res) => {
        setDetail(res?.data?.data);
        console.log(res?.data?.data)
        const startDateParts = res?.data.data.start_date.split(' ');
        setTanggal(startDateParts[0])
        setWaktu(startDateParts[1])
      })
      .catch(() => {
        toast.error("Gagal mendapatkan data");
      });
  };

  const detailPemesanan = (event: any) => {
    navigate(`/detail-pemesanan/${event}`, {
        state: {
            id: event.id
        }
    })
    console.log(event)
}




  return (
    <section className="bg-gray-100 min-h-screen">
      <NavbarBuyer />
      <AnimatedPage>
        <div className="m-16 grid grid-cols-3 gap-4 ">
          <div className="col-span-3 rounded-t-3xl overflow-auto bg-white">
            <img
              src={detail?.banner_picture}
              alt=""
              className="w-full"
            />
          </div>
          <div className="col-span-2 mr-5 ">
            <div className="shadow-lg rounded-lg  p-5 flex bg-white">
              <div>
                <h1 className="text-3xl font-bold mb-3">
                  {detail?.name}
                </h1>
                <div>
                  <p className="text-lg font-medium text-blue-500 flex items-center gap-3">
                  <span className="flex">
                      <span className="text-xl pt-0.5 mr-1">
                        <MdDateRange />
                      </span>
                      {tanggal}
                    </span>
                    |
                    <span className="flex">
                      <span className="text-xl pt-0.5 mr-1">
                        <MdAccessTimeFilled />
                      </span>
                      {waktu}
                    </span>
                    |
                    <span className="flex">
                      <span className="text-xl pt-0.5 mr-1">
                        <MdLocationOn />
                      </span>
                      {detail?.location}
                    </span>
                  </p>
                </div>
              </div>
              <div className="ml-10">
                <button
                  onClick={() => detailPemesanan(detail?.id)}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold w-48 h-12 rounded-lg"
                >
                  Beli Tiket
                </button>
              </div>
            </div>
          </div>
          <div className=" col-span-1">
            <div className="flex shadow-lg rounded-lg p-6 bg-white">
              <img
                src={detail?.partner.profile_picture}
                alt="Rock In Solo Logo"
                className="rounded-full w-16 h-16 mr-2"
              />
              <div className="flex flex-col justify-center">
                <p className="text-blue-500">Diselengarakan oleh</p>
                <h1 className="text-xl font-bold">{detail?.partner.name}</h1>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="shadow-lg rounded-lg p-5 bg-white">
              <h1 className="font-[titan] font-bold text-left text-3xl mb-3 mt-10 border-b pb-3">
                Deskripsi
              </h1>
              <p className="indent-8 text-justify text-lg">
                {detail?.description}
              </p>
              <h1 className="font-[titan] font-bold text-left text-3xl mb-3 mt-10 border-b pb-3">
                Syarat dan Ketentuan
              </h1>
              <p className="text-lg">Waktu Penukaran :</p>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>
                  {detail?.term_condition}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedPage>
      <FootbarBuyer />
    </section>
  );
};

export default DetailEvent;
