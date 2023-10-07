import React, { useState, useEffect } from "react";
import AnimatedPage from "../../../component/animatedPage";
import Button from "../../../component/button";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { ProfilBuyer } from "../../../auth/yup";
import Modal from "../../../component/modal";
import Cookies from "js-cookie";
import { LuCheckCircle2, LuMinusCircle } from "react-icons/lu";

const PersonalData = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const [pop, setPop] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  console.log(data);

  const editbuyer = () => {
    setPopup(!popup);
  };
  const opendelete = () => {
    setPop(!pop);
  };

  const buyer_id = Cookies.get("id");
  const token = Cookies.get("token");

  const navigate = useNavigate();
  const get_data = () => {
    axios
      .get(`/buyers/${buyer_id}`, {
        headers: {
          Authorization: ` Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
        console.log(res?.data?.data.profile_picture)
      })
      .catch(() => {
        toast.error("Gagal mendapatkan data");
      });
  };

  const handledelete = (id: any) => {
    axios
      .delete(`/buyers/${buyer_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("Maaf gagal untuk delete akun ", error);
      });
  };

  useEffect(() => {
    get_data();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone_number: "",
      address: "",
      photo: null,
    },
    validationSchema: ProfilBuyer,
    onSubmit: (values: any) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("address", values.address);
      formData.append("phone_number", values.phone_number);
      formData.append("profile_picture", values.photo);
      axios
        .put(`/buyers/${buyer_id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: ` Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success(response.data.message);

          navigate("/profile-personal");
        })
        .catch((error) => {
          if (error.response && error.response.status === 500) {
            toast.error("data yang dimasukkan salah");
          } else {
            toast.error("Server tidak merespon. Mohon coba lagi nanti.");
          }
        });
    },
  });

  return (
    <section className="h-screen">
      <AnimatedPage>
        <div className="py-2 w-full bg-gray-200 ">
          <div className="p-5 text-white ">
            <h1 className="font-semibold text-black mx-8 text-lg underline underline-offset-8">
              Personal Data
            </h1>
          </div>
          <div className="shadow-md border-4 my-10 mx-10 flex flex-col justify-between bg-white">
            <div className="ml-10 mt-10 flex flex-col">
              <img
                src={data.profile_picture}
                alt=""
                className="rounded-full h-36 w-36"
              />
            </div>
            <div className="flex">
            <div className="ml-10 mt-10 flex flex-col text-bold">
              <div className="mt-5">Full Name</div>
              <div className="mt-8">Email</div>
              <div className="mt-8">Phone Number</div>
              <div className="mt-5">Address</div>
            </div>
            <div className="ml-10 mt-10 mr-5 flex flex-col">
              <div className="mt-5">{data.name}</div>
              <div className="mt-8">{data.email}</div>
              <div className="mt-8">{data.phone_number}</div>
              <div className="mt-5">{data.address}</div>
            </div>
            </div>
              <div className="mx-auto my-5 gap-x-5">
                <span>
                  <Button
                    id="Add"
                    label="Edit"
                    color="bg-bgBtn"
                    hover="bg-blue-900"
                    width="36"
                    onClick={() => editbuyer()}
                  />
                </span>
                <span className="mx-5">
                  <Button
                    id="Add"
                    label="Delete"
                    color="bg-red-500"
                    hover="bg-red-900"
                    width="36"
                    onClick={() => opendelete()}
                  />
                </span>
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
                      placeholder="Ujang"
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
                      placeholder="Ujang"
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
                      placeholder="ujang@gmail.com"
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
                      placeholder="123n1i2321"
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
                      placeholder="123n1i2321"
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
                      Photo
                    </label>
                    <input
                      name="photo"
                      type="file"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "photo",
                          event.currentTarget.files
                            ? event.currentTarget.files[0]
                            : null
                        );
                      }}
                      onBlur={formik.handleBlur}
                      className="mt-1 input input-bordered w-full rounded-sm max-w-xs focus:outline-none  bg-white"
                    />
                  </div>
                  <div className="mx-auto mt-5">
                    <button
                      className="w-40 bg-blue-900 p-2"
                      type="submit"
                      color="bg-gray-800"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </form>
            </Modal>
            <div>
              <Modal isOpen={pop} onClose={() => setPop(false)}>
                <div className="relative rounded-lg">
                  <div className="px-10 py-10 flex flex-col space-y-3 ">
                    <div className="space-y-2 flex flex-col justify-center items-center">
                      <h3 className="text-xl font-bold text-black">
                        Delete Profile
                      </h3>
                      <p className="text-red-500 text-md">
                        Are You Sure Delete your account ?
                      </p>
                    </div>

                    <div className="flex space-x-5 justify-center ">
                      <button
                        type="button"
                        onClick={() => setPop(false)}
                        className="flex justify-center items-center text-white bg-green-500 rounded-cardBase font-semibold text-sm px-5 py-2.5 text-center"
                      >
                        <span className="mr-2">
                          <LuMinusCircle size={25} />
                        </span>
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={() => handledelete(buyer_id)}
                        className="flex justify-center items-center  text-white bg-red-500 font-semibold rounded-cardBase text-sm px-8 py-2.5 text-center"
                      >
                        <span className="mr-2">
                          <LuCheckCircle2 size={25} />
                        </span>
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </section>
  );
};

export default PersonalData;