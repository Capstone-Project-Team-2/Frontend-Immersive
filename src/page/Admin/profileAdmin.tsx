import { useState } from 'react';
import { LuCheckCircle2, LuMinusCircle } from 'react-icons/lu';
import Button from '../../component/button';
import AnimatedPage from '../../component/animatedPage';
import Modal from '../../component/modal';
import person from '../../assets/tony.jpg';

const ProfileAdmin = () => {
  const [pop, setPop] = useState<boolean>(false);

  const opendelete = () => {
    setPop(!pop);
  };
  return (
    <div className="p-10 w-full h-screen">
      <AnimatedPage>
        <div className="py-2 w-[410px] mx-auto bg-bgTwo rounded-lg">
          <div className="m-10 flex flex-col  items-center">
            <div className=" text-white mb-3">
              <img
                className="w-40 h-40 p-2  rounded-full"
                src={person}
                alt="user Profile"
              />
              <div className=" text-center">
                <h3 className="">John Doe</h3>
                <p className="">john@mail.com</p>
              </div>
            </div>
            <div className=" text-white ">
              <table className="table-auto leading-8">
                <tbody>
                  <tr className="leading-8">
                    <td className="font-semibold">Nama Lengkap</td>
                    <td className="px-5">:</td>
                    <td>John Doe</td>
                  </tr>
                  <tr className="leading-8">
                    <td className="font-semibold">Nomor Telepon</td>
                    <td className="px-5">:</td>
                    <td>088192837450</td>
                  </tr>
                  <tr className="leading-8">
                    <td className="font-semibold">Alamat</td>
                    <td className="px-5">:</td>
                    <td>Canada</td>
                  </tr>
                  <tr className="leading-8">
                    <td className="font-semibold">Start Join</td>
                    <td className="px-5">:</td>
                    <td>20 Oktober 2020</td>
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
                  />
                </span>
                <span className="mx-5">
                  <Button
                    id="Add"
                    label="Delete"
                    color="bg-red-600"
                    hover="bg-red-900"
                    width="36"
                    onClick={() => opendelete()}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={pop} onClose={() => setPop(false)}>
          <div className="relative rounded-lg">
            <div className="px-10 py-10 flex flex-col space-y-3 ">
              <div className="space-y-2 flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-black">Delete Profile</h3>
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
      </AnimatedPage>
    </div>
  );
};

export default ProfileAdmin;
