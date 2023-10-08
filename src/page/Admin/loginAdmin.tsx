import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LuLoader } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { LoginAuthBuyer } from '../../auth/yup';

const LoginAdmin = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginAuthBuyer,
    onSubmit: (values) => {
      setStatus(true);
      axios
        .post(`/admins/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          toast.success(response.data.message);
          console.log;
          Cookies.set('token', response.data.data.token);
          Cookies.set('id', response.data.data.id);
          Cookies.set('name', response.data.data.name);
          Cookies.set('role', response.data.data.role);
          navigate('/dashboard-admin');
          setStatus(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 500) {
            toast.error('Email atau password salah');
            setStatus(false);
          } else {
            toast.error('Server tidak merespon. Mohon coba lagi nanti.');
            setStatus(false);
          }
        });
    },
  });

  useEffect(() => {
    if (Cookies.get('token')) {
      navigate('/dashboard-admin');
    }
  }, []);

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
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2 pt-2"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Enter your email"
                  autoComplete="off"
                  className={`bg-gray-50 border ${
                    formik.touched.email && formik.errors.email
                      ? `border-red-800`
                      : 'border-gray-300 border-2'
                  } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2 pt-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Enter your password"
                  className={`bg-gray-50 border relative ${
                    formik.touched.password && formik.errors.password
                      ? `border-red-800`
                      : 'border-gray-300 border-2'
                  } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-800 absolute text-sm font-semibold">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="flex justify-center pt-3">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline mx-auto"
                >
                  {status ? <LuLoader /> : 'Login'}
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
