import React from 'react'

const FootbarBuyer = () => {
  return (
    <footer className="bg-blue-950 text-white py-4 mt-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src="/logo_eve2.jpg" alt="Logo Brand" className="w-24 h-16" />
                        <nav className="flex flex-col">
                            <a href="/">Home</a>
                            <a href="/tiket">Tiket</a>
                            <a href="/event">Event</a>
                            <a href="/about">About</a>
                        </nav>
                    </div>
                    <div className="flex items-center flex-col space-x-4">
                        <span>Social Media</span>
                        <div className="flex items-center space-x-4">
                            <a href="URL-IG">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4z6_Kc82y_Bn2w13Drfam4rBX9bzIvjn0s-AgoHa9yA&s" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a href="URL-FB">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="URL-TWITTER">
                                <img src="https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg" alt="Twitter" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>


                    {/* Kontak dan Alamat */}
                    <div> Kontak dan Alamat
                        <div>evve@mail.com</div>
                        <div>Rumah Yusuf</div>
                    </div>
                </div>
            </footer>
  )
}

export default FootbarBuyer