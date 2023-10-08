import AnimatedPage from "../../component/animatedPage";
import Button from "../../component/button";
import Modal from "../../component/modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Table from "../../component/tablevolunteer";
import { useFormik } from "formik";
import { RegisterAuthBuyer } from "../../auth/yup";

const Volunteer = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const token = Cookies.get("token");
  const [data, setData] = useState<any>([]);
  const eventId = useParams();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterAuthBuyer,
    onSubmit: (values) => {
      axios
        .post(`/volunteers`, {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          toast.success(response.data.message);
          setPopup(!popup);
          getalldata();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const addvolunteer = () => {
    setPopup(!popup);
  };

  const handledelete = (id: any) => {
    axios
      .delete(`/volunteers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("Maaf gagal untuk delete akun ", error);
      });
  };

  const getalldata = () => {
    axios
      .get(`/volunteers/events/${eventId.id}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getalldata();
  }, []);
  return (
    <div className="p-10 h-full bg-bgMain">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgTwo rounded-lg">
          <div className="p-5 text-white ">
            <h1 className="font-semibold ">Volunteer</h1>
          </div>
          <div className="flex justify-end text-semibold me-5">
            <Button
              id="add volunteer"
              label="Add Volunteer"
              width="30"
              height="10"
              onClick={() => addvolunteer()}
            />
          </div>
          <div className="p-2">
            <table className="w-full text-sm text-left  font-semibold">
              <thead className="text-md uppercase  text-white text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item: any, index: any) => {
                    return (
                      <Table
                        key={index}
                        id={index + 1}
                        name={item.name}
                        email={item.email}
                        onClick={() => handledelete(item.id)}
                        onDelete={() => handledelete(item.id)}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Modal isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[30vw] h-[80vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold my-2">
                Add Volunteer
              </div>
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
                        : "border-gray-300 border-2"
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
                        : "border-gray-300 border-2"
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
                        : "border-gray-300 border-2"
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
                    className="bg-bgBtn hover:bg-blue-900 text-white text-lg font-bold  mt-10 py-2 px-6 rounded focus:outline-none focus:shadow-outline mx-auto"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Volunteer;
