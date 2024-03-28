// import React, { useState } from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 transition duration-300 ease-in-out ${
        !isOpen && "hidden"
      }`}
    >
      <div className="bg-white rounded-lg px-4 py-5 shadow-lg max-w-2xl">
        {children} {/* Modal content goes here */}
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
