import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

interface Modalprops {
  isOpen: Boolean;
  onClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Modal: FC<Modalprops> = ({ isOpen, onClose, children }) => {
  const preference = {
    modalOverlay: isOpen
      ? 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'
      : 'hidden',
    modalContent: isOpen
      ? 'bg-gray-200 p-4 rounded-md shadow-md grid justify-items-center z-51'
      : 'hidden',
  };

  const modalContentVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <AnimatePresence>
      <div className={preference.modalOverlay}>
        {isOpen && (
          <motion.div
            className={preference.modalContent}
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div onClick={onClose} className="flex justify-end text-end w-full">
              <span className="text-red-500 cursor-pointer">
                <AiOutlineClose />
              </span>
            </div>
            {children}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Modal;
