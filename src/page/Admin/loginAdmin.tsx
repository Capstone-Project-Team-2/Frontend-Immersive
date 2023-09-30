import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="grid grid-cols-2  mx-auto h-screen md:h-screen">
        <div className="flex flex-col justify-center items-center ">
          <img
            className="h-screen w-full"
            src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?w=740&t=st=1695888077~exp=1695888677~hmac=07cb8549a8f26a43e7e0d2c684be05703abbc6c3116104cb0b3770c1f0b5d0d8"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center  ">
          <div className="p-6 space-y-4 w-96 md:space-y-6 sm:p-8">
            <div className="space-y-3">
              <h1 className="text-2xl text-center font-bold leading-tight tracking-tight md:text-3xl">
                Login
              </h1>
            </div>
            <form className="space-y-4 md:space-y-8">
              <div>
                <label className=" mb-2 text-lg font-semibold ">Username</label>
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  className={`border-b-2 border-gray-500 text-gray-900  focus:outline-none focus:border-gray-900 block w-full p-2`}
                />
              </div>
              <div>
                <label className="mb-2 text-lg font-semibold ">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    className={`border-b-2 border-gray-500 text-gray-900  focus:outline-none focus:border-gray-900 block w-full p-2`}
                  />
                </div>
              </div>
              <div className=" flex justify-center">
                <button
                  onClick={() => navigate('/dashboard-admin')}
                  className="bg-bgBtn px-14 py-2.5 rounded-lg text-white font-bold text-xl hover:bg-bgOne"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginAdmin;
