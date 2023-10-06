import React from 'react';
import NavbarBuyer from '../../component/navbarBuyer';
import Input from '../../component/Input';
import FootbarBuyer from '../../component/footbarBuyer';

const DetailPemesanan = () => {
    return (
        <section>
            <NavbarBuyer />
            <div className='bg-yellow-300 shadow-md mt-20 p-5 text-center '>
                10:50  Segera Selesaikan Pesananmu
                </div>
            <div className='flex mt-10 ml-10'>
                <div className='container shadow-md w-1/2 '>
                    <div className='flex flex-row'>
                        <img
                            src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg"
                            alt=""
                            className='w-1/3 h-52'
                        />
                        <div className='mt-5 ml-5 flex flex-col'>
                            <h1 className='font-bold font-[titan] text-3xl mb-5'>ROCK IN SOLO FESTIVAL</h1>
                            <div className='font-medium mb-2'>10 Dec 2023</div>
                            <div className='font-medium mb-2'>10:00 - 23:00 WIB</div>
                            <div className='font-medium mb-2'>Benteng Vastenburg, Jawa Tengah</div>
                        </div>
                    </div>
                    <div className='mt-10 ml-5 flex flex-col'>
                        <div className="border-t border-gray-400 w-full mb-2"></div>
                        <div className='flex flex-row justify-between font-medium'>
                            <div>Jenis Tiket</div>
                            <div>Harga</div>
                            <div className='mr-3'>Jumlah</div>
                        </div>
                        <div className="border-t border-gray-400 w-full mb-2 mt-2"></div>
                        <div className='flex flex-row font-normal justify-between'>
                            <div>VIP</div>
                            <div>Rp.250.000</div>
                            <div className='mr-5'>2x</div>
                        </div>
                    </div>
                </div>

                <div className='container shadow-md ml-20 w-1/3 flex flex-col '>
                    <div className='flex flex-col mt-4'>
                        <div className='flex flex-row justify-between ml-5'>
                            <Input placeholder='Masukkan Promo' />
                            <button className='bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold px-5 py-3 mr-5 rounded mb-4'>
                                Terapkan
                            </button>
                        </div>
                    </div>
                    <div className='font-bold text-2xl my-5'>Detail Harga</div>
                    <div className='flex flex-row justify-between font-medium mb-2'>
                        <div>Total Harga Tiket</div>
                        <div>Rp.500.000</div>
                    </div>
                    <div className='flex flex-row justify-between font-medium mb-2'>
                        <div>Biaya Layanan</div>
                        <div>Rp.10.000</div>
                    </div>
                    <div className='border-t border-gray-400 mb-2'></div>
                    <div className='flex flex-row justify-between font-bold text-xl mt-2'>
                        <div>Total Bayar</div>
                        <div>Rp.510.000</div>
                    </div>
                    <div className='flex flex-col mb-4 mt-10'>
                        <label className='text-sm font-medium mb-2'>Metode Pembayaran</label>
                        <select className='border p-2 rounded'>
                            <option value='bca'>Bank BCA</option>
                            <option value='bni'>Bank BNI</option>
                            <option value='bri'>Bank BRI</option>
                        </select>
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
                        Beli Tiket
                    </button>
                </div>
            </div>
            <FootbarBuyer />
        </section>
    );
};

export default DetailPemesanan;
