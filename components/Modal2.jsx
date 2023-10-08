import React from 'react';

const Modal2 = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? 'modal-container transform opacity-100 scale-100 transition-transform transition-opacity ease-in duration-300'
    : 'modal-container transform opacity-0 scale-95 transition-transform transition-opacity ease-out duration-300 pointer-events-none';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-30">
      <div className="modal-overlay absolute inset-0    backdrop-blur-sm"></div>
      <div className={modalClasses}>
        <div className="modal-content p-4  scroll-smooth bg-gray-300 overflow-y-scroll h-[88vh] mt-[70px]" >
          <button className="close-button w-[40px] h-[40px] text-red-600 bg-red-300  rounded-full font-semibold absolute top-2 right-2 hover:text-red-800" onClick={onClose}>
X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal2;
