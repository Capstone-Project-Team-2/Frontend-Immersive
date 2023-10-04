import { useFormik } from 'formik';
import { LoginAuthBuyer } from '../../auth/yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { LuLoader } from 'react-icons/lu';
import { useState } from 'react';

const LoginBuyer = () => {
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
        .post(`/buyers/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          toast.success(response.data.message);
          console.log('token', response.data.data.token);
          console.log('data', response.data.data);
          Cookies.set('token', response.data.data.token);
          navigate('/');
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

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className="relative w-1/2 bg-cover"
        style={{
          backgroundImage:
            'url("https://www.namastra.co.id/img?src=9fa8a5b94738aa2ba3d214d77c0aff1e.jpg&width=1200&height=860")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2 font-[titan]">Welcome!</h1>
          <h3 className="text-xl ">Event, Easier With EVVE</h3>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className=" p-8 rounded  w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
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
  );
};

export default LoginBuyer;
