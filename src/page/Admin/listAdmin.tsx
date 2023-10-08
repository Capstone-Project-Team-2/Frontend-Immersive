import AnimatedPage from '../../component/animatedPage';
import { useFormik } from 'formik';
import axios from 'axios';
import { MdEdit, MdAddToPhotos } from 'react-icons/md';
import { BiSolidTrash } from 'react-icons/bi';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Modal from '../../component/modal';
import { AddAdmin } from '../../auth/yup';

const ListAdmin = () => {
  const token = Cookies.get('token');
  const [popup, setPopup] = useState(false);

  const addAdmin = () => {
    setPopup(!popup);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone_number: '',
      address: '',
    },
    validationSchema: AddAdmin,
    onSubmit: (values) => {
      axios
        .post(
          `/admins`,
          {
            name: values.name,
            email: values.email,
            password: values.password,
            phone_number: values.phone_number,
            address: values.address,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success(response.data.message);
          setPopup(false);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    },
  });
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 flex justify-between">
            <h1 className="font-semibold text-lg underline underline-offset-8 text-white">
              List Admin
            </h1>
            <span
              onClick={() => addAdmin()}
              className="text-bgBtn text-3xl py-2 rounded-md mr-5 cursor-pointer"
            >
              <MdAddToPhotos />
            </span>
          </div>
          <div className="p-2">
            <table className="w-full text-sm text-left  font-semibold">
              <thead className="text-base uppercase text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-white ">
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    1
                  </td>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">john@mail.com</td>
                  <td className="px-6 py-4">088192654096</td>
                  <td className="px-6 py-4 ">Brazil</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center gap-4">
                      <span className="text-green-600 text-3xl py-2 rounded-md cursor-pointer">
                        <MdEdit />
                      </span>
                      <span className="text-red-600 text-3xl py-2 rounded-md cursor-pointer">
                        <BiSolidTrash />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="bg-bgTwo border-y border-slate-700 hover:bg-bgOne text-white ">
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    2
                  </td>
                  <td className="px-6 py-4">Robert</td>
                  <td className="px-6 py-4">robert@mail.com</td>
                  <td className="px-6 py-4">088187205946</td>
                  <td className="px-6 py-4 ">Canada</td>
                  <td className="px-6 py-4 ">
                    <div className="flex justify-center gap-4">
                      <span className="text-green-600 text-3xl py-2 rounded-md cursor-pointer">
                        <MdEdit />
                      </span>
                      <span className="text-red-600 text-3xl py-2 rounded-md cursor-pointer">
                        <BiSolidTrash />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end gap-3 m-4 text-white font-semibold">
          <button className="border border-bgBtn hover:bg-bgBtn w-32 py-3 rounded-lg">
            Previous
          </button>
          <button className="border border-bgBtn hover:bg-bgBtn w-32 py-3 rounded-lg">
            Next
          </button>
        </div>
        <Modal isOpen={popup} onClose={() => setPopup(false)}>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-[30vw] h-full flex flex-col">
              <div className="text-[24px] text-center font-semibold my-2">
                Edit Personal Data
              </div>
              <div className="flex flex-col mx-10">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Fullname
                </label>
                <input
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 input input-bordered rounded-sm w-full max-w-xs focus:outline-none bg-white"
                />
              </div>
              <div className="flex flex-col mx-10">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 input input-bordered rounded-sm w-full max-w-xs focus:outline-none bg-white"
                />
              </div>
              <div className="flex flex-col mx-10 mt-2">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none bg-white"
                />
              </div>
              <div className="flex flex-col mx-10 mt-2">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Phone Number
                </label>
                <input
                  name="phone_number"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
                />
              </div>
              <div className="flex flex-col mx-10 mt-2">
                <label
                  htmlFor=""
                  className="after:content-['*'] after:text-red-600 text-left"
                >
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
                />
              </div>
              <div className="mx-auto mt-5">
                <button
                  className="w-40 bg-bgBtn hover:bg-blue-700 p-2 text-white rounded-lg"
                  type="submit"
                  color="bg-gray-800"
                >
                  Add Admin
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </AnimatedPage>
    </div>
  );
};

export default ListAdmin;
