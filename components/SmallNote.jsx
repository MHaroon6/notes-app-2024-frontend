import { useState } from "react";
import {
  faPen,
  faRotateRight,
  faTrash,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myNotesContext } from "@/context/NotesContext";

const SmallNote = ({ note, handleClick }) => {
  const {
    setMode,
    setDeleteModal,
    setCurrentNote,
    currentPage,

    setRestoreModal,
  } = myNotesContext();

  // Define a media query for mobile devices
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  const isMobile = mediaQuery.matches;

  const [showIcons, setShowIcons] = useState(isMobile);
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
        if (!isMobile) {
          setShowIcons(false);
        }
      }}
    >
      <div className="text-lg text-center">{note?.title}</div>

      {showIcons && (
        <div className="absolute bottom-0 left-0 px-4 flex justify-between items-center w-full">
          <div>
            {currentPage === "trash" ? (
              <FontAwesomeIcon
                // icon={faTrashArrowUp}
                icon={faRotateRight}
                className="cursor-pointer fa-1x  text-gray-500 hover:text-gray-400  m-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setRestoreModal(true);
                  setCurrentNote({ _id: note?._id });
                }}
                title="Restore"
              />
            ) : (
              <FontAwesomeIcon
                icon={faPen}
                className="cursor-pointer  fa-1x  text-gray-500 hover:text-gray-400  m-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(note?._id);
                  setMode("edit");
                }}
                title="Edit"
              />
            )}

            <FontAwesomeIcon
              icon={faTrash}
              className="cursor-pointer fa-1x text-gray-500 hover:text-gray-400 m-2 "
              onClick={(e) => {
                e.stopPropagation();
                setDeleteModal(true);
                setCurrentNote({ _id: note?._id });
              }}
              title="Delete"
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
