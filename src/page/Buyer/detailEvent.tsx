import NavbarBuyer from '../../component/navbarBuyer';
import FootbarBuyer from '../../component/footbarBuyer';
import { useNavigate } from 'react-router-dom';
import { MdDateRange, MdAccessTimeFilled, MdLocationOn } from 'react-icons/md';
import AnimatedPage from '../../component/animatedPage';
import { useEffect } from 'react';

const DetailEvent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen">
      <NavbarBuyer />
      <AnimatedPage>
        <div className="m-16 grid grid-cols-3 gap-4 ">
          <div className="col-span-3 rounded-t-3xl overflow-auto bg-white">
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="col-span-2 mr-5 ">
            <div className="shadow-lg rounded-lg  p-5 flex bg-white">
              <div>
                <h1 className="text-3xl font-bold mb-3">
                  Rock In Solo Festival 2023
                </h1>
                <div>
                  <p className="text-lg font-medium text-blue-500 flex items-center gap-3">
                    <span className="flex">
                      <span className="text-xl pt-0.5 mr-1">
                        <MdDateRange />
                      </span>
                      21 Oct 2023
                    </span>
                    |
                    <span className="flex">
                      <span className="text-xl pt-0.5 mr-1">
                        <MdAccessTimeFilled />
                      </span>
                      16:00 WIB
                    </span>
                    |
                    <span className="flex">
                      <span className="text-xl pt-0.5 mr-1">
                        <MdLocationOn />
                      </span>
                      Mojosari , Mojokerto , Indonesia
                    </span>
                  </p>
                </div>
              </div>
              <div className="ml-10">
                <button
                  onClick={() => navigate('/detail-pemesanan')}
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
                src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg"
                alt="Rock In Solo Logo"
                className="rounded-full w-16 h-16 mr-2"
              />
              <div className="flex flex-col justify-center">
                <p className="text-blue-500">Diselengarakan oleh</p>
                <h1 className="text-xl font-bold">Rock In Solo</h1>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="shadow-lg rounded-lg p-5 bg-white">
              <h1 className="font-[titan] font-bold text-left text-3xl mb-3 mt-10 border-b pb-3">
                Deskripsi
              </h1>
              <p className="indent-8 text-justify text-lg">
                Sejak pertama kali dihelat di tahun 2004, Rock in Solo terus
                berkembang menjadi salah satu festival musik keras terbesar di
                Indonesia yang ditunggu-tunggu penggemar musik keras dari
                seluruh penjuru negeri dan luar negeri. Perhelatan kesebelas
                akan digelar pada Minggu 10 Desember 2023 di Benteng Vastenburg
                Solo dengan menghadirkan beberapa band internasional dan
                nasional. Jadilah bagian dari sejarah Rock in Solo. Karena
                sejarah belum selesai ditulis! Sakjose!
              </p>
              <h1 className="font-[titan] font-bold text-left text-3xl mb-3 mt-10 border-b pb-3">
                Syarat dan Ketentuan
              </h1>
              <p className="text-lg">Waktu Penukaran :</p>
              <ul className="list-disc ml-6 mt-2 text-lg">
                <li>
                  Kamis, 26 Oktober 2023 pukul 10.00 - 12.00 dan 13.30-16.30 di
                  Community Park, PIK 2.
                </li>
                <li>
                  Jumat, 27 Oktober 2023 pukul 10.00 - 12.00 dan 13.30-16.30 di
                  Community Park, PIK 2.
                </li>
                <li>
                  Sabtu, 28 Oktober 2023 pukul 10.00 - 12.00 dan 13.30- 21.00 di
                  Community Park, PIK 2.
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
