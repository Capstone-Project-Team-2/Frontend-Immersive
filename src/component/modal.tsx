import React, { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Modalprops {
  isOpen: Boolean;
  onClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Modal: FC<Modalprops> = ({ isOpen, onClose, children }) => {
  const preference = {
    modalOverlay: isOpen
      ? "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      : "hidden",
    modalContent: isOpen
      ? "bg-gray-200 p-4 rounded-md shadow-md grid justify-items-center z-51"
      : "hidden",
  };
  return (
    <div className={preference.modalOverlay}>
      <div className={preference.modalContent}>
        <div onClick={onClose} className="flex justify-end text-end w-full ">
          <span className="text-red-500 cursor-pointer">
            <AiOutlineClose />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
