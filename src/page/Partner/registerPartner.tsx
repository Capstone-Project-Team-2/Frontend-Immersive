import { useFormik } from 'formik';
import { RegisterAuthBuyer } from '../../auth/yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LuLoader } from 'react-icons/lu';
import { useState } from 'react';
import fotologin from '../../assets/login.png';

const RegisterPartner = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterAuthBuyer,
    onSubmit: (values) => {
      setStatus(true);
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('password', values.password);
      axios
        .post(`/partners`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          toast.success(response.data.message);
          console.log('data', response.data.data);
          navigate('/login-buyer');
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
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className=" p-8 rounded  w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2 pt-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter your Full Name"
                autoComplete="off"
                className={`bg-gray-50 border ${
                  formik.touched.name && formik.errors.name
                    ? `border-red-800`
                    : 'border-gray-300 border-2'
                } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2 pt-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Enter your username"
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
            <div>
              <a
                href="/login-partner"
                className="text-sm ml-11 cursor-pointer hover:text-blue-500"
              >
                Have account? Login here
              </a>
            </div>
            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline mx-auto"
              >
                {status ? <LuLoader /> : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="relative w-1/2 bg-cover"
        style={{
          backgroundImage: `url(${fotologin})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2 font-[titan]">Welcome!</h1>
          <h3 className="text-xl ">Event, Easier With EVVE</h3>
        </div>
      </div>
    </div>
  );
};

export default RegisterPartner;
