import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ProfilAuthPartner } from "../../auth/yup";
import AnimatedPage from "../../component/animatedPage";
import Button from "../../component/button";
import NavbarPartner from "../../component/navbarPartner";
import Modal from "../../component/modal";

const BuatEvent = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState<boolean>(false);
  const openticket = () => {
    setPopup(!popup);
  };
  const handleSubmit = () => {
    navigate("/myevents/:id/");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone_number: "",
      photo: null,
    },
    validationSchema: ProfilAuthPartner,
    onSubmit: handleSubmit,
  });

  return (
    <section className="bg-gray-200 min-h-screen">
      <NavbarPartner id="event" />
      <AnimatedPage>
        <div className="flex flex-row md:flex-row mt-10 ">
          <div className="w-full">
            <div className="flex items-center mt-10 ml-5">
              <div className="w-full h-96 border-r border-gray-400 flex items-center justify-center">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230905110542_64f6a91690d6f.jpg"
                  alt=""
                  className="w-[1000px] h-full object-background"
                />
              </div>
            </div>
            <div className="flex items-center mt-10 ml-5 shadow-md">
              <div className=" border-gray-400 flex shadow-sm pb-5">
                <form className="flex gap-2">
                  <div>
                    <div className="mt-5 ml-5">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Nama Event
                      </label>
                      <input
                        type="text"
                        name="nameevent"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Full Name"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.name && formik.errors.name
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-5 ml-5">
                      <label
                        htmlFor="Kategori"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Kategori
                      </label>
                      <select className="border rounded w-full p-2.5">
                        <option value="Tournament">Tournament</option>
                        <option value="Music">Music</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Sepak_bola">Sepak Bola</option>
                        <option value="Kuliner">Kuliner</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="mt-5 ml-5">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Tanggal dan Waktu Mulai
                      </label>
                      <input
                        type="datetime-local"
                        name="nameevent"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Full Name"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.name && formik.errors.name
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-5 ml-5">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Tanggal dan Waktu Selesai
                      </label>
                      <input
                        type="datetime-local"
                        name="nameevent"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Full Name"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.name && formik.errors.name
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mt-5 mx-5">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Lokasi Acara
                      </label>
                      <input
                        type="text"
                        name="nameevent"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Location"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.name && formik.errors.name
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5 py-5`}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex items-center mt-10 ml-5 shadow-md py-5">
              <div className="w-full border-r border-gray-400 shadow-sm">
                <form className="gap-2">
                  <div className="mt-5 ml-5 px-5 pl-1 ">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-md font-bold mb-2"
                    >
                      Deskripsi event
                    </label>
                    <textarea
                      name="nameevent"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your Description"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.name && formik.errors.name
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-60`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5 ml-5 px-5 pl-1">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-md font-bold mb-2"
                    >
                      Syarat dan Ketentuan
                    </label>
                    <textarea
                      name="nameevent"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Syarat dan Ketentuan"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.name && formik.errors.name
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-60`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center ml-5 py-5 mt-10 pl-10 mx-5 shadow-md h-60">
          <span className="mt-[-5vh] mx-10">
            <Button
              id="Buat Ticket"
              label="Buat Ticket"
              onClick={() => openticket()}
              width="48"
              height="14"
              color="bg-bgBtn"
              hover="bg-blue-900"
            />
          </span>
          <span className="mt-[28vh] mx-[25vw]">
            <Button
              id="Buat Ticket"
              label="Buat Event"
              onClick={() => handleSubmit()}
              width="48"
              height="14"
              color="bg-bgBtn"
              hover="bg-blue-900"
            />
          </span>
        </div>
        <div>
          <Modal isOpen={popup} onClose={() => setPopup(false)}>
            <div className="w-[67vw] h-[80vh] flex flex-col">
              <div className="text-[24px] text-center font-semibold my-2">
                Ticket
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex gap-10">
                  <div className="ml-5">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Nama Ticket
                      </label>
                      <input
                        type="text"
                        name="ticket"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Ticket Name"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.name && formik.errors.name
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
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
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Jumlah Ticket
                      </label>
                      <input
                        type="number"
                        name="jumlah ticket"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="200"
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
                        htmlFor="address"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Harga
                      </label>
                      <input
                        type="number"
                        name="harga"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Masukkan harga tiket"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.address && formik.errors.address
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone-number"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Tanggal Mulai Penjualan
                      </label>
                      <input
                        type="datetime-local"
                        name="mulaipenjualan"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Phone Number"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.phone_number &&
                          formik.errors.phone_number
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                      />
                      {formik.touched.phone_number &&
                      formik.errors.phone_number ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.phone_number}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone-number"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Tanggal Selesai Penjualan
                      </label>
                      <input
                        type="datetime-local"
                        name="tanggalselesai"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Phone Number"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.phone_number &&
                          formik.errors.phone_number
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      />
                      {formik.touched.phone_number &&
                      formik.errors.phone_number ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.phone_number}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone-number"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Deskripsi
                      </label>
                      <input
                        type="text"
                        name="deskripsi"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Deskripsi"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.phone_number &&
                          formik.errors.phone_number
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                      />
                      {formik.touched.phone_number &&
                      formik.errors.phone_number ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.phone_number}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-3">
                  <button
                    type="submit"
                    className="bg-blue-900 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-10 rounded focus:outline-none focus:shadow-outline mx-auto"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </AnimatedPage>
    </section>
  );
};

export default BuatEvent;
