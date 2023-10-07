import React from 'react';
import NavbarBuyer from '../../component/navbarBuyer';
import Input from '../../component/Input';
import FootbarBuyer from '../../component/footbarBuyer';

const EventBuyer = () => {
  return (
    <section>
      <NavbarBuyer />
      <div className=' mt-10 flex mt-32 items-center mx-12 justify-between'>
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
        <Input placeholder='Silahkan Cari Disini' />
      </div>
      <h1 className='font-[titan] font-bold text-3xl text-left mt-5 ml-14'>List Event</h1>
      <div className="flex flex-wrap justify-around mt-5 ml-5">
        {/* Card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="/detail-event">
            <img className="rounded-t-lg w-full h-40 " src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="/detail-event">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">28 Oktober 2023</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp.250.000</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png" alt="Bulat" className="w-full h-full object-cover" />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="/detail-event">
            <img className="rounded-t-lg w-full h-40 " src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="/detail-event">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">28 Oktober 2023</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp.250.000</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png" alt="Bulat" className="w-full h-full object-cover" />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="/detail-event">
            <img className="rounded-t-lg w-full h-40 " src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="/detail-event">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">28 Oktober 2023</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp.250.000</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png" alt="Bulat" className="w-full h-full object-cover" />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around mt-5 ml-5">
        {/* Card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="/detail-event">
            <img className="rounded-t-lg w-full h-40 " src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="/detail-event">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">28 Oktober 2023</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp.250.000</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png" alt="Bulat" className="w-full h-full object-cover" />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="/detail-event">
            <img className="rounded-t-lg w-full h-40 " src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="/detail-event">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">28 Oktober 2023</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp.250.000</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png" alt="Bulat" className="w-full h-full object-cover" />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="/detail-event">
            <img className="rounded-t-lg w-full h-40 " src="https://www.shutterstock.com/shutterstock/photos/1286805256/display_1500/stock-vector-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background-1286805256.jpg" alt="" />
          </a>
          <div className="p-5">
            <a href="/detail-event">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">28 Oktober 2023</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp.250.000</p>
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full  overflow-hidden mr-2">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/organization/20230404103610_642b9b2ae7f59.png" alt="Bulat" className="w-full h-full object-cover" />
                </div>
                <span>PESTIGE PROMOTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4 ">
            <button className="bg-blue-950 hover:bg-blue-700 text-white font-normal text-lg py-2 px-4 rounded-lg">
              Prev
            </button>
            <button className="bg-blue-950 hover:bg-blue-700 text-white font-normal text-lg py-2 px-4 rounded-lg">
              Next
            </button>
          </div>
      <FootbarBuyer />
    </section>
  );
};

export default EventBuyer;
