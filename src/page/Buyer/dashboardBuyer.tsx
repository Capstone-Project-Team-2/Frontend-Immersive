import NavbarBuyer from '../../component/navbarBuyer';
import FootbarBuyer from '../../component/footbarBuyer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../component/modal';
import Button from '../../component/button';

const DashboardBuyer = () => {

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
        <div className="absolute inset-0 flex flex-col font-[titan] items-center justify-center text-white text-2xl font-bold">
          <div>Pencarian tiket event semakin mudah di E V V E.</div>
          <div>Mulai Sekarang!</div>
          <div className="mt-4 flex space-x-4 ">
            <button className="bg-blue-950 hover:bg-blue-700 text-white font-normal text-lg py-2 px-4 rounded-lg"
              onClick={() => handleSignIn()}
              >
              Sign In
            </button>
            <button className="bg-blue-950 hover:bg-blue-700 text-white font-normal text-lg py-2 px-4 rounded-lg"
              onClick={() => handleSignUp()}
              >

              Sign Up
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-xl mt-8 mb-4 text-center">EVENT NOW!</h1>
      <div className="m-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-40 "
              src="https://up2you2.com/wp-content/uploads/2022/11/music_4x.webp"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
              28 Oktober 2023
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Rp.250.000
            </p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png"
                    alt="Bulat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-40 "
              src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
              28 Oktober 2023
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Rp.250.000
            </p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png"
                    alt="Bulat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-40"
              src="https://png.pngtree.com/png-clipart/20210815/original/pngtree-music-festival-creative-gradient-banner-png-image_6639203.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
              28 Oktober 2023
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Rp.250.000
            </p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png"
                    alt="Bulat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <button
          className="bg-blue-950 hover:bg-blue-700 rounded-full py-3 px-10 text-white"
          onClick={() => navigate('/event-buyer')}
        >
          More
        </button>
      </div>
      <div className="bg-blue-600 text-white py-6 text-center">
        <h2 className="font-bold text-2xl">About Us</h2>
        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ratione
          harum repudiandae ea sed ab ut cum officiis. Dolorem, numquam
          molestiae repudiandae magnam ducimus incidunt, quaerat deleniti
          exercitationem esse odio aperiam, voluptatem et? Laborum error hic
          laudantium mollitia maxime nisi, quisquam iusto illo sed earum omnis
          voluptatum ipsum consequuntur ipsa.
        </p>
        <button className="bg-blue-950 hover:bg-blue-700 rounded-full my-5 py-3 px-10">
          More
        </button>
      </div>
      <h1 className="font-bold text-xl mt-8  mb-4 text-center">PARTNERSHIP</h1>
      <div className="flex justify-center space-x-4">
        <a href="/link-ke-partner-1">
          <img
            src="https://metaloker.com/wp-content/uploads/2023/06/Loker-Gree.webp"
            alt="Partner 1"
            className="w-52 h-52 border-black border-5 rounded-full cursor-pointer"
          />
        </a>
        <a href="/link-ke-partner-2">
          <img
            src="https://metaloker.com/wp-content/uploads/2023/06/Loker-Gree.webp"
            alt="Partner 2"
            className="w-52 h-52 border-black rounded-full cursor-pointer"
          />
        </a>
        <a href="/link-ke-partner-3">
          <img
            src="https://metaloker.com/wp-content/uploads/2023/06/Loker-Gree.webp"
            alt="Partner 3"
            className="w-52 h-52 rounded-full cursor-pointer"
          />
        </a>
        <a href="/link-ke-partner-4">
          <img
            src="https://metaloker.com/wp-content/uploads/2023/06/Loker-Gree.webp"
            alt="Partner 4"
            className="w-52 h-52 rounded-full cursor-pointer"
          />
        </a>
        <a href="/link-ke-partner-5">
          <img
            src="https://metaloker.com/wp-content/uploads/2023/06/Loker-Gree.webp"
            alt="Partner 5"
            className="w-52 h-52 rounded-full cursor-pointer"
          />
        </a>
      </div>
      <Modal isOpen={popupSignIn} onClose={() => setPopupSignIn(false)}>
        <div className="w-[30vw] h-[30vh] flex flex-col">
          <div className="text-[24px] text-center font-semibold my-2">
            SignIn as
          </div>
          <div className="mx-auto mt-5">
            <Button id="Add" label="BUYER" color="bg-gray-800" width="40"  
            onClick={() => navigate("/login-buyer")} 
            />
          </div>
          <div className="mx-auto mt-5">
            <Button id="Add" label="PARTNER" color="bg-gray-800" width="40" 
            onClick={() => navigate("/login-partner")} 
            />
          </div>
        </div>
      </Modal>
      <Modal isOpen={popupSignUp} onClose={() => setPopupSignUp(false)}>
        <div className="w-[30vw] h-[30vh] flex flex-col">
          <div className="text-[24px] text-center font-semibold my-2">
            SignUp as
          </div>
          <div className="mx-auto mt-5">
            <Button id="Add" label="BUYER" color="bg-gray-800" width="40"  
            onClick={() => navigate("/regis-buyer")} 
            />
          </div>
          <div className="mx-auto mt-5">
            <Button id="Add" label="PARTNER" color="bg-gray-800" width="40" 
            onClick={() => navigate("/register-partner")} 
            />
          </div>
        </div>
      </Modal>
      <FootbarBuyer />
    </section>
  );
};

export default DashboardBuyer;
