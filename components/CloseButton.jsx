import React from "react";
import ModalButton from "./ModalButton";

const CloseButton = ({handleClose}) => {
  return (
    <ModalButton
      color="#ff0044"
      bgColor="#fff"
      allowHover={false}
      handleClick={handleClose}
    >
      <span className="py-1 px-3">Close</span>
    </ModalButton>
  );
};

export default CloseButton;
