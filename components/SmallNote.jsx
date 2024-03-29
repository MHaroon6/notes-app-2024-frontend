import { useState } from "react";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myNotesContext } from "@/context/NotesContext";

const SmallNote = ({ note, handleClick }) => {
  const { setMode, setDeleteModal } = myNotesContext();
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div
      // key={key}
      style={{ backgroundColor: note?.color || "white" }}
      className={` relative w-64 h-44 p-4  border border-gray-200 rounded-lg flex flex-col justify-center items-center cursor-pointer`}
      onClick={() => {
        handleClick(note?._id);
        setMode("view");
      }}
      onMouseEnter={() => {
        setShowIcons(true);
      }}
      onMouseLeave={() => {
        setShowIcons(false);
      }}
    >
      <div className="text-lg text-center">{note?.title}</div>

      {showIcons && (
        <div className="absolute bottom-0 left-0 px-4 flex justify-between items-center w-full">
          <div>
            <FontAwesomeIcon
              icon={faPen}
              className="cursor-pointer w-4 h-4  text-gray-500 hover:text-gray-400  m-2"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(note?._id);
                setMode("edit");
              }}
            />

            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer w-4 h-4  text-gray-500 hover:text-gray-400 m-2 "
              onClick={(e) => {
                e.stopPropagation();
                setDeleteModal(true);
              }}
            />
          </div>
          {/* <div className="text-x flex flex-col">
            <span>Created: {note?.create_date}</span>
            <span>Edited: {note?.edit_date || note?.create_date }</span>
          </div> */}
        </div>
      )}

      {/* <div></div> */}
    </div>
  );
};

export default SmallNote;
