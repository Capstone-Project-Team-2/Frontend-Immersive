import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import AnimatedPage from "../../component/animatedPage";
import toast from "react-hot-toast";
import NavbarPartner from "../../component/navbarPartner";
import Cookies from "js-cookie";
import axios from "axios";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  location: Yup.string().required("Address is required"),
  description: Yup.string().required("Description is required"),
  term_condition: Yup.string().required("Term & Condition is required"),
  start_date: Yup.string().required("Start Date is required"),
  end_date: Yup.string().required("End Date is required"),
  banner_picture: Yup.mixed().required("Photo is required"),
  ticket: Yup.array().of(
    Yup.object().shape({
      name_class: Yup.string().required("Name is required"),
      total: Yup.number().required("Total Ticket is required"),
      price: Yup.number().required("Price is required"),
      sell_start: Yup.string().required("Date start is required"),
      sell_end: Yup.string().required("Date end is required"),
    })
  ),
});
const initialValues = {
  name: "",
  location: "",
  description: "",
  term_condition: "",
  start_date: "",
  end_date: "",
  banner_picture: null,
  ticket: [
    { name_class: "", total: "", price: "", sell_start: "", sell_end: "" },
  ],
};

const BuatEvent = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const token = Cookies.get("token");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("location", values.location);
      formData.append("description", values.description);
      formData.append("term_condition", values.term_condition);
      formData.append("start_date", values.start_date);
      formData.append("end_date", values.end_date);
      formData.append("banner_picture", values.banner_picture);

      values?.ticket?.forEach((field: any, index: any) => {
        formData.append(`ticket[${index}].name_class`, field.name_class);
        formData.append(`ticket[${index}].total`, field.total);
        formData.append(`ticket[${index}].price`, field.price);
        formData.append(`ticket[${index}].sell_start`, field.sell_start);
        formData.append(`ticket[${index}].sell_end`, field.sell_end);
      });

      axios
        .post("/events", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast.success(response.data.message);

          navigate("/myevents");
        })
        .catch((error) => {
          if (error.response && error.response.status === 500) {
            toast.error("data yang dimasukkan salah");
            console.log(values);
          } else {
            toast.error("Server tidak merespon. Mohon coba lagi nanti.");
          }
        });
    },
  });

  const addField = () => {
    formik.setValues({
      ...formik.values,
      ticket: [
        ...formik.values.ticket,
        { name_class: "", total: "", price: "", sell_start: "", sell_end: "" },
      ],
    });
  };

  // const handleSubmit = async (values: any) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("name", values.name);
  //     formData.append("location", values.location);
  //     formData.append("description", values.description);
  //     formData.append("term_condition", values.term_condition);
  //     formData.append("start_date", values.start_date);
  //     formData.append("end_date", values.end_date);
  //     formData.append("banner_picture", values.banner_picture);

  //     values?.ticket?.map((field: any, index: any) => {
  //       formData.append(`ticket[${index}].name_class`, field.name_class);
  //       formData.append(`ticket[${index}].total`, field.total);
  //       formData.append(`ticket[${index}].price`, field.price);
  //       formData.append(`ticket[${index}].sell_date`, field.sell_date);
  //       formData.append(`ticket[${index}].sell_end`, field.sell_end);
  //     });

  //     // Replace with your API endpoint
  //     const url = `/events`;

  //     // Use Axios to send a PUT request
  //     const response = await axios.post(url, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     toast.success(response.data.message);

  //     console.log("Event uploaded successfully:", response.data);
  //   } catch (error) {
  //     console.error("Error making event:", error);
  //     console.log(values);
  //   }
  // };

  return (
    <section className="bg-gray-200 min-h-screen">
      <NavbarPartner />
      <AnimatedPage>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-row md:flex-row mt-10 ">
            <div className="w-full">
              <div className=" mt-10 ml-5">
                <div className=" flex flex-col gap-5 items-center w-full h-96 border-r border-gray-400  justify-center">
                  <div>
                    {previewImage && (
                      <div>
                        <label>Preview Poster</label>
                        <img
                          src={previewImage}
                          alt="Preview"
                          style={{ maxWidth: "800px", height: "400px" }}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="banner_picture"></label>
                    <input
                      id="photo"
                      name="banner_picture"
                      type="file"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "banner_picture",
                          event.currentTarget.files
                            ? event.currentTarget.files[0]
                            : null
                        );
                        handleFileChange(event);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.banner_picture &&
                    formik.errors.banner_picture ? (
                      <div>{formik.errors.banner_picture}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-10 ml-5 shadow-md">
                <div className=" border-gray-400  shadow-sm pb-5">
                  <div className="flex flex-row justify-items-center gap-10 ml-[15vw] mt-5">
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
                          name="name"
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
                      <div className="mt-5 mx-5">
                        <label
                          htmlFor="location"
                          className="block text-gray-700 text-md font-bold mb-2"
                        >
                          Lokasi Acara
                        </label>
                        <input
                          type="text"
                          name="location"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter your Location"
                          autoComplete="off"
                          className={`bg-gray-50 border ${
                            formik.touched.location && formik.errors.location
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                        />
                        {formik.touched.location && formik.errors.location ? (
                          <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                            {formik.errors.location}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <div className="mt-5 ml-5">
                        <label
                          htmlFor="start_date"
                          className="block text-gray-700 text-md font-bold mb-2"
                        >
                          Tanggal dan Waktu Mulai
                        </label>
                        <input
                          type="text"
                          name="start_date"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter your Full Name"
                          autoComplete="off"
                          className={`bg-gray-50 border ${
                            formik.touched.start_date &&
                            formik.errors.start_date
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                        />
                        {formik.touched.start_date &&
                        formik.errors.start_date ? (
                          <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                            {formik.errors.start_date}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-5 ml-5">
                        <label
                          htmlFor="end_date"
                          className="block text-gray-700 text-md font-bold mb-2"
                        >
                          Tanggal dan Waktu Selesai
                        </label>
                        <input
                          type="text"
                          name="end_date"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter your Full Name"
                          autoComplete="off"
                          className={`bg-gray-50 border ${
                            formik.touched.end_date && formik.errors.end_date
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                        />
                        {formik.touched.end_date && formik.errors.end_date ? (
                          <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                            {formik.errors.end_date}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-10 ml-5 shadow-md py-5">
                <div className="w-full border-r border-gray-400 shadow-sm">
                  <div className="gap-2">
                    <div className="mt-5 ml-5 px-5 pl-1 ">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Deskripsi event
                      </label>
                      <textarea
                        name="description"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your Description"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.description &&
                          formik.errors.description
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-60`}
                      />
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.description}
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-5 ml-5 px-5 pl-1">
                      <label
                        htmlFor="term_condition"
                        className="block text-gray-700 text-md font-bold mb-2"
                      >
                        Syarat dan Ketentuan
                      </label>
                      <textarea
                        name="term_condition"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Syarat dan Ketentuan"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.term_condition &&
                          formik.errors.term_condition
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-60`}
                      />
                      {formik.touched.term_condition &&
                      formik.errors.term_condition ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col ml-5 py-5 mt-20 pl-10 mb-10 mx-5 shadow-md h-full">
            {formik.values.ticket.map((field, index) => (
              <div key={index}>
                <h3>Ticket {index + 1}</h3>
                <div>
                  <div className="flex gap-10">
                    <div className="ml-5">
                      <div className="mb-4">
                        <label
                          htmlFor={`ticket.${index}.name_class`}
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Nama Ticket
                        </label>
                        <input
                          id={`ticket.${index}.name_class`}
                          type="text"
                          name={`ticket.${index}.name_class`}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter your Ticket Name"
                          autoComplete="off"
                          value={field.name_class}
                          className={`bg-gray-50 border ${
                            formik.touched.ticket?.[index]?.name_class &&
                            formik.errors.ticket?.[index]?.name_class
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                        />
                        {formik.touched.ticket?.[index]?.name_class &&
                        formik.errors.ticket?.[index]?.name_class ? (
                          <div>{formik.errors.ticket[index].name_class}</div>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor={`ticket.${index}.total`}
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Jumlah Ticket
                        </label>
                        <input
                          id={`ticket.${index}.total`}
                          type="number"
                          name={`ticket.${index}.total`}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="200"
                          autoComplete="off"
                          value={field.total}
                          className={`bg-gray-50 border ${
                            formik.touched.ticket?.[index]?.total &&
                            formik.errors.ticket?.[index]?.total
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                        />
                        {formik.touched.ticket?.[index]?.total &&
                        formik.errors.ticket?.[index]?.total ? (
                          <div>{formik.errors.ticket[index].total}</div>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor={`ticket.${index}.price`}
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Harga
                        </label>
                        <input
                          id={`ticket.${index}.price`}
                          type="number"
                          name={`ticket.${index}.price`}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Masukkan harga tiket"
                          autoComplete="off"
                          value={field.price}
                          className={`bg-gray-50 border ${
                            formik.touched.ticket?.[index]?.price &&
                            formik.errors.ticket?.[index]?.price
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                        />
                        {formik.touched.ticket?.[index]?.price &&
                        formik.errors.ticket?.[index]?.price ? (
                          <div>{formik.errors.ticket[index].price}</div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <label
                          htmlFor={`ticket.${index}.sell_date`}
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Tanggal Mulai Penjualan
                        </label>
                        <input
                          id={`ticket.${index}.sell_start`}
                          type="text"
                          name={`ticket.${index}.sell_start`}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter date"
                          autoComplete="off"
                          value={field.sell_start}
                          className={`bg-gray-50 border ${
                            formik.touched.ticket?.[index]?.sell_start &&
                            formik.errors.ticket?.[index]?.sell_start
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-96 p-2.5`}
                        />
                        {formik.touched.ticket?.[index]?.sell_start &&
                        formik.errors.ticket?.[index]?.sell_start ? (
                          <div>{formik.errors.ticket[index].sell_start}</div>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor={`ticket.${index}.sell_end`}
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Tanggal Selesai Penjualan
                        </label>
                        <input
                          id={`ticket.${index}.sell_end`}
                          type="text"
                          name={`ticket.${index}.sell_end`}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter your date"
                          autoComplete="off"
                          value={field.sell_end}
                          className={`bg-gray-50 border ${
                            formik.touched.ticket?.[index]?.sell_end &&
                            formik.errors.ticket?.[index]?.sell_end
                              ? `border-red-800`
                              : "border-gray-300 border-2"
                          } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                        />
                        {formik.touched.ticket?.[index]?.sell_end &&
                        formik.errors.ticket?.[index]?.sell_end ? (
                          <div>{formik.errors.ticket[index].sell_end}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="w-32 h-10 bg-bgBtn mx-auto font-semibold text-white hover:bg-blue-900 focus:outline-none rounded-md"
              onClick={addField}
            >
              Tambah Tiket
            </button>
          </div>
          <div className="flex justify-center my-5 mb-10">
            <button
              type="submit"
              className="w-32 h-10 bg-bgBtn mx-auto font-semibold text-white hover:bg-blue-900 focus:outline-none rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </AnimatedPage>
    </section>
  );
};

export default BuatEvent;
