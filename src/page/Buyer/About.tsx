import NavbarBuyer from '../../component/navbarBuyer';
import FootbarBuyer from '../../component/footbarBuyer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../component/modal';
import Button from '../../component/button';

const About = () => {
  const navigate = useNavigate();
  const [popupSignIn, setPopupSignIn] = useState<boolean>(false);
  const [popupSignUp, setPopupSignUp] = useState<boolean>(false);

  const handleSignIn = () => {
    setPopupSignIn(!popupSignIn);
  };

  const handleSignUp = () => {
    setPopupSignUp(!popupSignUp);
  };

  return (
    <section>
      <NavbarBuyer />
      <div className="relative w-full h-96 mt-20 bg-gray-200">
        <img
          src="https://linebank.co.id/blog/wp-content/uploads/2022/10/Blog_Acara-Konser-Musik-Tahunan-di-Indonesia-buat-Pecinta-Musik.jpg"
          alt="Background"
          className="w-full  h-96  "
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col font-[titan] items-center justify-center text-white text-2xl ">
          <div className="font-extrabold text-3xl">ABOUT US</div>
          <div className="mt-4">
            <div className="text-center font-light text-lg">
              EVVE, aplikasi pencarian event asal Indonesia yang membawa misi
              <br />
              pemerataan teknologi digital bagi penyelenggara event dari
              berbagai skala.
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 space-y-5 mx-24">
        <div className="indent-8">
          Kami adalah sebuah platform yang didedikasikan untuk menghadirkan
          kemudahan dalam membeli tiket dan menikmati berbagai acara hiburan
          favorit Anda. Kami percaya bahwa hiburan adalah bagian penting dari
          kehidupan, dan itulah mengapa kami berusaha keras untuk membuat
          pengalaman membeli tiket dan menghadiri event menjadi lebih sederhana,
          aman, dan menghibur.
        </div>
        <div className="indent-8">
          Visi kami adalah untuk menjadi mitra terpercaya bagi penyelenggara
          event dalam menjual tiket mereka secara online. Kami mendedikasikan
          diri untuk memastikan bahwa setiap orang dapat dengan mudah mengakses
          berbagai acara yang mereka cintai tanpa harus menghadapi kerumunan
          atau antrian panjang.
        </div>
        <div>Komitmen kami adalah:</div>
        <div>
          <ul className="space-y-2 list-disc ml-10">
            <li>
              <span className="font-semibold">Kemudahan Pembelian:</span> Kami
              menyediakan platform yang mudah digunakan sehingga Anda dapat
              dengan cepat dan mudah membeli tiket untuk event-event yang Anda
              inginkan.
            </li>
            <li>
              <span className="font-semibold">Keamanan Transaksi:</span>{' '}
              Keamanan transaksi adalah prioritas kami. Kami menggunakan
              teknologi terkini untuk memastikan bahwa setiap transaksi Anda
              dilakukan dengan aman.
            </li>
            <li>
              <span className="font-semibold">Kemudahan Validasi Tiket:</span>{' '}
              Bagi penyelenggara event, kami memberikan alat yang efisien untuk
              melakukan validasi tiket pembeli di tempat event. Ini membantu
              dalam menghindari penipuan dan memastikan keamanan acara.
            </li>
            <li>
              <span className="font-semibold">Dukungan Pelanggan:</span> Tim
              kami selalu siap membantu Anda. Jika Anda memiliki pertanyaan atau
              kendala, jangan ragu untuk menghubungi kami. Kami ada di sini
              untuk Anda.
            </li>
          </ul>
        </div>
        <div className="indent-8">
          Kami berterima kasih atas dukungan Anda dan berharap Anda menikmati
          pengalaman berbelanja tiket dan menghadiri event melalui platform
          kami. Bersama-sama, mari kita terus mendukung industri hiburan dan
          memastikan bahwa semua orang dapat menikmati acara kesenangan tanpa
          hambatan.
        </div>
      </div>

      <FootbarBuyer />
    </section>
  );
};

export default About;
