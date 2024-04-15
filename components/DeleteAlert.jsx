import { myNotesContext } from "@/context/NotesContext";
import ModalButton from "./ModalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const DeleteAlert = () => {
  const { setDeleteModal, currentPage, handleDelete } = myNotesContext();
  return (
    <div className="px-4 ">
      {/* <div> */}
      <div className="flex items-center justify-center m-4">
        {/* <FontAwesomeIcon icon={faExclamation}  className="text-red-500 w-10 h-10 border-4 p-4  border-red-500 rounded-full" /> */}
        {currentPage === "trash" ? (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="text-red-500 fa-5x opacity-60 "
          />
        ) : (
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="text-red-500  fa-5x opacity-60 "
          />
        )}
      </div>
      <span className="text-center">
        {currentPage === "trash"
          ? "The note will be deleted permenantly. Do you wish to proceed?"
          : "The Note will be moved to trash bin. Do you wish to proceed?"}
      </span>
      {/* </div> */}
      <div className="buttons mt-2 mr-2 flex items-center justify-end">
        <ModalButton
          color="#ff0044"
          bgColor="#ffedf2"
          handleClick={() => {
            setDeleteModal(false);
          }}
          title="Cancel"
        >
          <FontAwesomeIcon icon={faTimes} className="fa-lg" />
        </ModalButton>
        <ModalButton
          color="#03c900"
          bgColor="#e3ffe3"
          handleClick={() => {
            handleDelete();
          }}
          title="Continue"

        >
          <FontAwesomeIcon icon={faCheck} className="fa-lg" />
        </ModalButton>
      </div>
    </div>
  );
};

export default DeleteAlert;
