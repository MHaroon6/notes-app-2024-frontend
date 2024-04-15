import { myNotesContext } from "@/context/NotesContext";
import ModalButton from "./ModalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const RestoreAlert = () => {
  const { handleRecover, setRestoreModal } = myNotesContext();
  return (
    <div className="px-4 ">
      {/* <div> */}
      <div className="flex items-center justify-center m-4">
        {/* <FontAwesomeIcon icon={faExclamation}  className="text-red-500 w-10 h-10 border-4 p-4  border-red-500 rounded-full" /> */}

        <FontAwesomeIcon
          icon={faRotateRight}
          className="text-[#40c03e] fa-5x opacity-60 "
        />
      </div>
      <div className="text-center">
        The note will be restored from the trash bin and added back to your
        regular notes. Do you wish to proceed?
      </div>
      {/* </div> */}
      <div className="buttons mt-2 mr-2 flex items-center justify-end">
        <ModalButton
          color="#ff0044"
          bgColor="#ffedf2"
          handleClick={() => {
            setRestoreModal(false);
          }}
          title="Cancel"
        >
          <FontAwesomeIcon icon={faTimes} className="fa-lg" />
        </ModalButton>
        <ModalButton
          color="#03c900"
          bgColor="#e3ffe3"
          handleClick={() => {
            handleRecover();
          }}
          title="Continue"
        >
          <FontAwesomeIcon icon={faCheck} className="fa-lg" />
        </ModalButton>
      </div>
    </div>
  );
};

export default RestoreAlert;
