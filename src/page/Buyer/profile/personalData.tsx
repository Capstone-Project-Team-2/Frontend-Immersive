import React from 'react'
import AnimatedPage from '../../../component/animatedPage'
import Button from '../../../component/button'

const PersonalData = () => {
    return (
        <section>
            <AnimatedPage>
                <div className="py-2 w-full bg-gray-200 ">
                    <div className="p-5 text-white ">
                        <h1 className="font-semibold text-black mx-8 text-lg underline underline-offset-8">
                            Personal Data
                        </h1>
                    </div>
                    <div className='shadow-md border-4 my-10 mx-10 flex flex-row justify-between bg-white'>
                        <div className='ml-10 mt-10 flex flex-col'>
                            <img src="https://www.openhost.co.za/download/bootmin/img/avatar_lg.jpg" alt="" className='rounded-full  h-32 w-36' />
                                {/* <div className="mt-10 form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Upload File</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="file-input file-input-primary file-input-md bg-transparent max-w-3xl"
                                    />
                                </div> */}
                        </div>
                        <div className='flex'>
                            <div className='ml-10 mt-10 flex flex-col text-bold'>
                                <div className='mt-5'>Full Name</div>
                                <div className='mt-8'>Email</div>
                                <div className='mt-8'>Phone Number</div>
                                <div className='mt-5'>Address</div>
                            </div>
                            <div className='ml-10 mt-10 mr-5 flex flex-col'>
                                <div>
                                    <input
                                        className='p-2 my-2 shadow-md bg-gray-100'
                                        placeholder='Fullname'
                                    />
                                </div>
                                <div>
                                    <input
                                        className='p-2 my-2 shadow-md bg-gray-100'
                                        placeholder='Email'
                                    />
                                </div>
                                <div>
                                    <input
                                        className='p-2 my-2 shadow-md bg-gray-100'
                                        placeholder='Phone Number'
                                    />
                                </div>
                                <div>
                                    <input
                                        className='p-8 mb-5 my-2 shadow-md bg-gray-100'
                                        placeholder='Phone Number'
                                    />
                                </div>
                                <Button 
                                label='Edit' 
                                color='bg-green-600'
                                />
                            </div>
                        </div>
                    </div>
                           
                </div>
            </AnimatedPage>
        </section>
    )
}

export default PersonalData