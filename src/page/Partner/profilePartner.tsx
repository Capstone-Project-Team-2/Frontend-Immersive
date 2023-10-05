import { useState, useEffect } from "react";
import { ProfilAuthPartner } from "../../auth/yup";
import { LuCheckCircle2, LuMinusCircle } from "react-icons/lu";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "../../component/button";
import AnimatedPage from "../../component/animatedPage";
import Modal from "../../component/modal";
import toast from "react-hot-toast";
import { useFormik } from "formik";

interface profileProps {
  id: string;
  name?: string;
  start_join?: string;
  email?: string;
  phone_number?: string;
  address?: string;
  profile_picture?: string;
}

const ProfilePartner = () => {
  const [profile, setProfile] = useState<profileProps>({
    id: "",
    name: "",
    start_join: "",
    email: "",
    phone_number: "",
    address: "",
    profile_picture: "",
  });

  const [popup, setPopup] = useState<boolean>(false);
  const [pop, setPop] = useState<boolean>(false);
  const initialValues = {
    name: "",
    email: "",
    address: "",
    phone_number: "",
    photo: null,
  };
  const token = Cookies.get("token");
  const id = Cookies.get("id");
  const openedit = () => {
    setPopup(!popup);
  };
  const opendelete = () => {
    setPop(!pop);
  };

  const getProfile = () => {
    axios
      .get(`/partners/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response?.data.data);
        setProfile(response?.data?.data);
      })
      .then((error) => {
        console.log("Error : ", error);
      });
  };
  const handleSubmit = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("address", values.address);
      formData.append("phone_number", values.phone_number);
      formData.append("profile_picture", values.photo);

      // Replace with your API endpoint
      const url = `/partners/${id}`;

      // Use Axios to send a PUT request
      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(response.data.message);
      setPopup(!popup);
      getProfile();
      console.log("Photo uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: ProfilAuthPartner,
    onSubmit: handleSubmit,
  });

  const handledelete = (id: any) => {
    axios
      .delete(`/partners/${id}`, {
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
    getProfile();
  }, []);
  return (
    <div>
      <AnimatedPage>
        <main className="flex flex-col h-100 w-full">
          <div className="p-5 h-full w-4/12 bg-transparent text-white rounded-lg items-center ml-10">
            <img
              className="w-40 h-40 p-2 ml-[12vh] rounded-full"
              src={profile.profile_picture}
              alt="user Profile"
            />
            <h3 className="text-center">{profile.name}</h3>
            <p className="text-center">{profile.email}</p>
          </div>
          <div className="w-8/12 h-full bg-transparent text-white rounded-lg mx-10 mt-5 shadow-xs ">
            <table className="table-auto leading-8">
              <tbody>
                <tr className="leading-8">
                  <td className="font-semibold">Nama Lengkap</td>
                  <td className="px-5">:</td>
                  <td>{profile.name}</td>
                </tr>
                <tr className="leading-8">
                  <td className="font-semibold">Nomor Telepon</td>
                  <td className="px-5">:</td>
                  <td>{profile.phone_number}</td>
                </tr>
                <tr className="leading-8">
                  <td className="font-semibold">Alamat</td>
                  <td className="px-5">:</td>
                  <td>{profile.address}</td>
                </tr>
                <tr className="leading-8">
                  <td className="font-semibold">Start Join</td>
                  <td className="px-5">:</td>
                  <td>{profile.start_join}</td>
                </tr>
              </tbody>
            </table>
            <div className="mx-auto mt-5 gap-x-5">
              <span>
                <Button
                  id="Add"
                  label="Edit"
                  color="bg-bgBtn"
                  hover="bg-blue-900"
                  width="36"
                  onClick={() => openedit()}
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
          </div>
          <div>
            <Modal isOpen={popup} onClose={() => setPopup(false)}>
              <div className="w-[30vw] h-[90vh] flex flex-col">
                <div className="text-[24px] text-center font-semibold my-2">
                  Edit Profile
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-2">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
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
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your Email"
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
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your Address"
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
                  <div className="mb-4">
                    <label
                      htmlFor="phone-number"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone_number"
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
                  <div>
                    <label
                      htmlFor="photo"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Photo
                    </label>
                    <input
                      id="photo"
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
                    />
                    {formik.touched.photo && formik.errors.photo ? (
                      <div>{formik.errors.photo}</div>
                    ) : null}
                  </div>
                  <div className="flex justify-center pt-3">
                    <button
                      type="submit"
                      className="bg-blue-900 hover:bg-blue-700 text-white text-lg font-semibold py-1 px-6 rounded focus:outline-none focus:shadow-outline mx-auto"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
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
                      onClick={() => handledelete(id)}
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
        </main>
      </AnimatedPage>
    </div>
  );
};

export default ProfilePartner;
