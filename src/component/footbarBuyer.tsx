import React from 'react'
import logoBuyer from '../assets/logoBuyer1.png';

const FootbarBuyer = () => {
    return (
        <footer className="bg-blue-950 text-white py-4 mt-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex">
                        <img src={logoBuyer} alt="Brand Logo" className="w-14" />
                        <div className="text-white items-center pt-2">
                            <p className="font-normal text-xs">Event, easier with</p>
                            <h1 className="font-extrabold text-xl">EVVE</h1>
                        </div>
                    </div>
                    <nav className="flex flex-col">
                        <a href="/">Home</a>
                        <a href="/tiket">Tiket</a>
                        <a href="/event">Event</a>
                        <a href="/about">About</a>
                    </nav>
                </div>
                <div className="flex items-center flex-col space-x-4">
                    <span className='mb-5 ml-5'>Social Media</span>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.instagram.com/alterra.academy/">
                            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="Instagram" className="w-10 h-10" />
                        </a>
                        <a href="https://www.facebook.com/alterra.academy/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" className="w-10 h-10" />
                        </a>
                        <a href="https://twitter.com/AlterraGroup">
                            <img src="https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg" alt="Twitter" className="w-10 h-10 rounded-full" />
                        </a>
                    </div>
                </div>
                <div className=''>
                <div className='my-2'> Kontak dan Alamat
                    <div className='my-2'>evve@mail.com</div>
                    <div className='my-2'>Rumah Yusuf</div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FootbarBuyer