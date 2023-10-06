import { useFormik } from "formik";
import { ProfilAuthPartner } from "../../auth/yup";
import AnimatedPage from "../../component/animatedPage";

const BuatPromo = () => {
  const handleSubmit = () => {};
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
    <div className="p-2 px-4 h-full bg-gradient-to-r from-bgTwo from-10% via-gray-700 via-50% to-bgTwo to-100%">
      <AnimatedPage>
        <div className="py-2 w-full bg-bgOne rounded-lg">
          <div className="px-5 text-white ">
            <h1 className="font-semibold ">Buat Promo</h1>
            <h1 className="font-semibold leading-10">
              Mobile Legends: Bang Bang Sultan Cup Rising Star
            </h1>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-center gap-5">
                <div className="">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Nama Promo
                    </label>
                    <input
                      type="text"
                      name="namapromo"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter your Promo Name"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.name && formik.errors.name
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 h-10 block w-full`}
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
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Kuota Penggunaan
                    </label>
                    <input
                      type="number"
                      name="kuota_penggunaan"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="200"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.email && formik.errors.email
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex gap-5">
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-white text-sm font-semibold mb-2"
                      >
                        Diskon
                      </label>
                      <select className="border rounded w-full h-10">
                        <option value="Persen">Persen</option>
                        <option value="Nominal">Nominal</option>
                        <option value="Keduanya">Persen & Nominal</option>
                      </select>
                      {formik.touched.address && formik.errors.address ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-white text-sm font-semibold mb-2"
                      >
                        Persen
                      </label>
                      <input
                        type="text"
                        name="persen"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="10%"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.address && formik.errors.address
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Periode Mulai
                    </label>
                    <input
                      type="datetime-local"
                      name="mulai"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Masukkan harga tiket"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.address && formik.errors.address
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
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
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Kode Promo
                    </label>
                    <input
                      type="text"
                      name="mulaipenjualan"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="GB777"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.phone_number &&
                        formik.errors.phone_number
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
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
                      className="block text-white text-sm font-semibold mb-2"
                    >
                      Minimal Transaksi
                    </label>
                    <input
                      type="number"
                      name="minimal"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="100000"
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.phone_number &&
                        formik.errors.phone_number
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
                    />
                    {formik.touched.phone_number &&
                    formik.errors.phone_number ? (
                      <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                        {formik.errors.phone_number}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex gap-5">
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-white text-sm font-semibold mb-2"
                      >
                        Nominal
                      </label>
                      <input
                        type="number"
                        name="harga"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="10000"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.address && formik.errors.address
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-white text-sm font-semibold mb-2"
                      >
                        Maksimum Diskon
                      </label>
                      <input
                        type="number"
                        name="maksimumDiskon"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="30000"
                        autoComplete="off"
                        className={`bg-gray-50 border ${
                          formik.touched.address && formik.errors.address
                            ? `border-red-800`
                            : "border-gray-300 border-2"
                        } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div className="text-red-800 absolute focus:outline-red-800 text-sm font-semibold">
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone-number"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Periode Berakhir
                    </label>
                    <input
                      type="datetime-local"
                      name="deskripsi"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder=""
                      autoComplete="off"
                      className={`bg-gray-50 border ${
                        formik.touched.phone_number &&
                        formik.errors.phone_number
                          ? `border-red-800`
                          : "border-gray-300 border-2"
                      } border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10`}
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

              <div className="flex pb-2 mr-8">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-bgBtn text-white text-lg font-semibold py-2 px-10 rounded focus:outline-none focus:shadow-outline mx-auto"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default BuatPromo;
