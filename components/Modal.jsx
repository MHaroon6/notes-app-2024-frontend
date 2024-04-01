// import React, { useState } from 'react';

import { myNotesContext } from "@/context/NotesContext";

const Modal = ({ children, isOpen, onClose }) => {
  const { currentNote } = myNotesContext();
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75 transition duration-300 ease-in-out ${
        !isOpen && "hidden"
      }`}
    >
      <div
        className=" rounded-lg px-4 py-5 shadow-lg max-w-3xl"
        style={{ backgroundColor: currentNote?.color || "white" }}
      >
        {children} {/* Modal content goes here */}
        {/* <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
