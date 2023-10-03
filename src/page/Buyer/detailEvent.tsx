import React from 'react';
import NavbarBuyer from '../../component/navbarBuyer';
import FootbarBuyer from '../../component/footbarBuyer';

const DetailEvent = () => {
    return (
        <section className='bg-gray-200 min-h-screen'>
            <NavbarBuyer />
            <div className='flex flex-row md:flex-row mt-10 '>
                <div className='w-full'>
                    <div className='flex items-center mt-10 ml-5'>
                        <div className="w-[800px] h-96 border-r border-gray-400 flex items-center justify-center">
                            <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg" alt="" className='w-[800px] h-full object-cover' />
                        </div>
                        <div className="ml-5  w-1/2 h-full bg-white mr-5 p-10">
                            <h2 className="text-2xl font-semibold mb-16">INDONESIA UNITED IN WORSHIP</h2>
                            <p className="text-lg mb-2">10 Dec 2023</p>
                            <p className="text-lg mb-2">10:00 - 23:00 WIB</p>
                            <p className="text-lg mb-2">Benteng Vastenburg, Jawa Tengah</p>
                            
                            <div className="flex items-center mt-10">
                                <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg" alt="Rock In Solo Logo" className="rounded-full w-12 h-12 mr-2" />
                                <div className='flex flex-col'>
                                <p>Diselenggarakan oleh</p>
                                <span>Rock In Solo</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='bg-white border-black w-full md:w-[800px] h-auto ml-5 my-10 p-6 shadow-lg rounded-lg'>
                            <div className='font-[titan] font-bold text-left text-3xl mb-3 border-b pb-3'>Description</div>
                            <p>
                                Sejak pertama kali dihelat di tahun 2004, Rock in Solo terus berkembang menjadi salah satu festival musik keras terbesar di Indonesia yang ditunggu-tunggu penggemar musik keras dari seluruh penjuru negeri dan luar negeri. Perhelatan kesebelas akan digelar pada Minggu 10 Desember 2023 di Benteng Vastenburg Solo dengan menghadirkan beberapa band internasional dan nasional. Jadilah bagian dari sejarah Rock in Solo. Karena sejarah belum selesai ditulis! Sakjose!
                            </p>
                            <div className='font-[titan] font-bold text-left text-3xl mb-3 mt-10 border-b pb-3'>Syarat dan Ketentuan</div>
                            <p>Waktu Penukaran :</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Kamis, 26 Oktober 2023 pukul 10.00 - 12.00 dan 13.30-16.30 di Community Park, PIK 2.</li>
                                <li>Jumat, 27 Oktober 2023 pukul 10.00 - 12.00 dan 13.30-16.30 di Community Park, PIK 2.</li>
                                <li>Sabtu, 28 Oktober 2023 pukul 10.00 - 12.00 dan 13.30- 21.00 di Community Park, PIK 2.</li>
                            </ul>
                        </div>
                        <div className=' mr-5 w-1/2 '>
                            <div className='bg-white border-black w-full h-auto mx-0 my-10 p-6 shadow-lg rounded-lg'>
                                <div className='font-[titan] font-bold text-left text-3xl mb-3 border-b pb-3'>Pilih Tiket</div>
                                <div className="flex flex-col space-y-4">
                                    <div className="items-center space-x-2">
                                        <span className="font-semibold text-blue-600">Reguler</span>
                                        <div className='flex justify-between mt-2'>Rp.250.000
                                            <select className="border p-1 rounded">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="items-center space-x-2">
                                        <span className="font-semibold text-blue-600">VIP</span>
                                        <div className='flex justify-between mt-2'>Rp.250.000
                                            <select className="border p-1 rounded">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="items-center space-x-2">
                                        <span className="font-semibold text-blue-600">VVIP</span>
                                        <div className='flex justify-between mt-2'>Rp.250.000
                                            <select className="border p-1 rounded">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Beli Tiket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FootbarBuyer />
        </section>
    );
}

export default DetailEvent;
