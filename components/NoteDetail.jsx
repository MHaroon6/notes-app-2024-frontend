import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";
import BGInfo from "./BGInfo";
import Loader from "./Loader";
import { myNotesContext } from "@/context/NotesContext";
import ModalButton from "./ModalButton";

const CloseButton = ({ handleClose }) => (
  <ModalButton
    color="#ff0044"
    bgColor="#fff"
    allowHover={false}
    handleClick={handleClose}
  >
    <span className="py-1 px-3">Close</span>
  </ModalButton>
);

const NoteDetail = ({ note, error, noteLoading }) => {
  const { mode, handleCloseNote } = myNotesContext();

  const handleClose = () => {
    handleCloseNote();
  };

  return (
    <div className="w-[700px] min-h-[500px] max-h-[80vh] overflow-auto flex flex-col relative">
      {error ? (
        <>
          <BGInfo icon={faPlugCircleXmark} message1="An Error occurred." />
          <div className="flex justify-end items-center absolute bottom-0 right-0">
            <CloseButton handleClose={handleClose} />
          </div>
        </>
      ) : noteLoading ? (
        <div className="flex justify-center items-center h-[500px]">
          <Loader />
        </div>
      ) : mode === "view" ? (
        <div>
          <h4>{note?.title}</h4>
          <br />
          <p>{note?.content}</p>
          <div>
            <span>{note?.create_date}</span>
            <span>{note?.edit_date}</span>
          </div>
          <div className="flex justify-end items-center absolute bottom-0 right-0">
            <CloseButton handleClose={handleClose} />
          </div>
        </div>
      ) : (
        <>
          <div>editing...</div>
          <div className="flex justify-end items-center absolute bottom-0 right-0">
            <CloseButton handleClose={handleClose} />
            <ModalButton color="#06b6d4" bgColor="#fff" allowHover={false}>
              <span className="py-1 px-3">Save</span>
            </ModalButton>
            <ModalButton color="#06b6d4" bgColor="#fff" allowHover={false}>
              <span className="py-1 px-3">Save & Close</span>
            </ModalButton>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteDetail;
