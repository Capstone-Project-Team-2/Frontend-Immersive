import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex h-screen">
        <div
          className="relative w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-2 font-[titan]">Welcome!</h1>
            <h3 className="text-xl ">Event, Easier With EVVE</h3>
          </div>
        </div>
        <div className="flex items-center mx-auto">
          <div className="p-6 space-y-4 w-96 md:space-y-6 sm:p-8">
            <div className="space-y-3">
              <h1 className="text-2xl text-center font-bold leading-tight tracking-tight md:text-3xl">
                Login Admin
              </h1>
            </div>
            <form className="space-y-4 md:space-y-8">
              <div>
                <label className=" mb-2 text-lg font-semibold ">Username</label>
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  className={`text-gray-900  focus:outline-none focus:border-gray-900 block w-full p-2`}
                />
              </div>
              <div>
                <label className="mb-2 text-lg font-semibold ">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    className={`text-gray-900  focus:outline-none focus:border-gray-900 block w-full p-2`}
                  />
                </div>
              </div>
              <div className=" flex justify-center">
                <button
                  onClick={() => navigate('/dashboard-admin')}
                  className="bg-bgBtn px-14 py-2.5 rounded-lg text-white font-bold text-xl hover:bg-bgHov  "
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
