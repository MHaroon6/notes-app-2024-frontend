import { useState } from "react";

const ModalButton = ({
  color,
  bgColor,
  children,
  handleClick,
  allowHover = true,
  disabled = false,
  title,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className="rounded-full  m-1 min-w-10 min-h-10 flex items-center justify-center"
      style={{
        backgroundColor: hover || !allowHover ? color : bgColor,
        color: hover || !allowHover ? bgColor : color,
        // border: !allowHover ? "1px solid aliceblue" : "none"
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={handleClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default ModalButton;
