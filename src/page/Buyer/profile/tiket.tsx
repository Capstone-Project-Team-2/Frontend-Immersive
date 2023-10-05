import React from 'react'
import AnimatedPage from '../../../component/animatedPage'
import Button from '../../../component/button'
import { SlCalender } from "react-icons/sl";

const TiketBuyer = () => {
    return (
        <section>
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
                                <SlCalender classname="bg-black"/>
                                <div className='ml-3 flex font-semibold '>10 Dec 2023</div>
                                </div>
                                <Button 
                                label='E-VOUCHER'
                                color='bg-blue-950'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md border-4 my-10 mx-10 flex flex-row bg-white'>
                        <div className=' flex flex-col'>
                            <img src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg" alt="" className='h-32 w-full' />
                        </div>
                        <div className='flex'>
                            <div className='ml-10 flex flex-col text-bold'>
                                <div className='text-extrabold text-3xl font-[titan]'>ROCK IN SOLO FESTIVAL</div>
                                <div className='flex flex-row my-3'>
                                <SlCalender classname="bg-black"/>
                                <div className='ml-3 flex font-semibold '>10 Dec 2023</div>
                                </div>
                                <Button 
                                label='E-VOUCHER'
                                color='bg-blue-950'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </section>
    )
}

export default TiketBuyer