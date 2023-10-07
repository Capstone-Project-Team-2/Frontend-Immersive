import React, { useState } from 'react';
import AnimatedPage from '../../../component/animatedPage';
import Button from '../../../component/button';
import { SlCalender } from "react-icons/sl";
import Modal from '../../../component/modal';
import QRCode from 'qrcode.react';

const TiketBuyer = () => {
    const [popup, setPopup] = useState<boolean>(false);
    const buyerId = '123';

    const handleTiket = () => {
        setPopup(true);
    };

    return (
        <section className='h-screen'>
            <AnimatedPage>
                <div className="py-2 w-full bg-gray-200 ">
                    <div className="p-5 text-white ">
                        <h1 className="font-semibold text-black mx-8 text-lg underline underline-offset-8">
                            Tiket Saya
                        </h1>
                    </div>
                    <div className='shadow-md border-4 my-10 mx-10 flex flex-row bg-white'>
                        <div className=' flex flex-col'>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg" alt="" className='h-32 w-full' />
                        </div>
                        <div className='flex'>
                            <div className='ml-10 flex flex-col text-bold'>
                                <div className='text-extrabold text-3xl font-[titan]'>ROCK IN SOLO FESTIVAL</div>
                                <div className='flex flex-row my-3'>
                                    <SlCalender/>
                                    <div className='ml-3 flex font-semibold '>10 Dec 2023</div>
                                </div>
                                <Button
                                    id="tiket"
                                    label='E-VOUCHER'
                                    color='bg-blue-950'
                                    onClick={() => handleTiket()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={popup} onClose={() => setPopup(false)}>
                    <div className="w-[30vw] h-[60vh] flex flex-col items-center justify-center">
                        <div className="text-2xl font-semibold my-2">
                            TIKET
                        </div>
                        <QRCode value={buyerId} size={200} />
                        <div className="text-sm mt-4">
                           
                        </div>
                    </div>
                </Modal>
            </AnimatedPage>
        </section>
    );
}

export default TiketBuyer;
