import React from 'react'
import NavbarBuyer from '../../component/navbarBuyer'
import FootbarBuyer from '../../component/footbarBuyer'

const Checkout = () => {
    return (
        <section>
            <NavbarBuyer />
            <div className='shadow-md border-4 my-10 mx-10'>
            <h1 className='font-extrabold font-[titan] my-5 text-8xl text-red-600 text-center'>23:59:59</h1>
                <h1 className='font-extrabold font-[titan] text-2xl text-center'>SEGERA SELESAIKAN PEMBAYARAN ANDA</h1>
            <div className='container flex flex-row  mt-10 mb-10 justify-center'>
                <div className='flex text-justify flex-col text-lg font-semibold'>
                    <div>NAMA</div>
                    <div>EMAIL</div>
                    <div>NO HP</div>
                    <div>EVENT</div>
                    <div>TOTAL PEMBAYARAN</div>
                    <div>PAYMENT METHOD</div>
                    <div>VIRTUAL ACCOUNT</div>
                    <div>KODE PESANAN</div>
                </div>
                <div className='flex text-justify ml-10 text-lg font-semibold flex-col'>
                    <div>: Yusuf Ganteng</div>
                    <div>: yusufganteng@mail.com</div>
                    <div>: 08123456789</div>
                    <div>: Rock In Solo Festival</div>
                    <div>: Rp.251.000</div>
                    <div>: Bank BNI</div>
                    <div>: 56284748748</div>
                    <div>: uge7394r</div>
                </div>
            </div>
            <div className='font-bold text-center text-xl'>INSTRUKSI
            <div>INTERNET BANKING</div>
            <div>ATM</div>
            </div>
            </div>
            <FootbarBuyer />
        </section>
    )
}

export default Checkout