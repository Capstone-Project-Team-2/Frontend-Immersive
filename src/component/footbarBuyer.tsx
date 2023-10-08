import { MdEmail, MdLocationOn } from 'react-icons/md';
import logoBuyer from '../assets/logoBuyer1.png';
import { useNavigate } from 'react-router-dom';

const FootbarBuyer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-950 text-white py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex cursor-pointer " onClick={() => navigate('/')}>
            <img src={logoBuyer} alt="Brand Logo" className="w-14" />
            <div className="text-white items-center pt-2">
              <p className="font-normal text-xs">Event, easier with</p>
              <h1 className="font-extrabold text-xl">EVVE</h1>
            </div>
          </div>
          <p>Copyright ©Tiket Event 2023. All Rights Reserved.</p>
        </div>
        <div className="flex items-center flex-col space-x-4 mr-24">
          <span className="mb-5 ml-5 text-2xl font-bold">Social Media</span>
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/alterra.academy/">
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.facebook.com/alterra.academy/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>
            <a href="https://twitter.com/AlterraGroup">
              <img
                src="https://img.freepik.com/premium-vector/round-twitter-logo-isolated-white-background_469489-899.jpg"
                alt="Twitter"
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="">
          <div className="my-2 space-y-3">
            <h1 className="font-bold text-2xl">Kontak dan Alamat</h1>
            <span className="flex">
              <span className="text-xl pt-0.5 mr-1">
                <MdEmail />
              </span>
              Evve@mail.com
            </span>
            <span className="flex">
              <span className="text-xl pt-0.5 mr-1">
                <MdLocationOn />
              </span>
              Jl. Mojosari , Mojokerto , Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootbarBuyer;
