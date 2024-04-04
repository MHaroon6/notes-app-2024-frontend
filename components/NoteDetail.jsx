import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";
import BGInfo from "./BGInfo";
import Loader from "./Loader";
import { myNotesContext } from "@/context/NotesContext";
import ModalButton from "./ModalButton";
import NoteView from "./NoteView";
import CloseButton from "./CloseButton";
import NoteEdit from "./NoteEdit";

const NoteDetail = () => {
  const {
    mode,
    // setMode,
    handleCloseNote,
    // currentNote,
    error,
    currNoteLoading,
    // handleSaveNote,
  } = myNotesContext();

  const handleClose = () => {
    handleCloseNote();
  };

 

  return (
    <div className="w-[700px] min-h-[600px] max-h-[80vh] overflow-auto flex flex-col relative px-4">
      {mode === "new" ? (
        <NoteEdit />
      ) : error ? (
        <div className="min-h-[480px] flex justify-center items-center">
          <BGInfo icon={faPlugCircleXmark} message1="An Error occurred." />
          <div className="flex justify-end items-center absolute bottom-0 right-0">
            <CloseButton handleClose={handleClose} />
          </div>
        </div>
      ) : currNoteLoading ? (
        <div className="flex justify-center items-center h-[500px]">
          <Loader />
        </div>
      ) : mode === "edit" ? (
        <NoteEdit />
      ) : (
        <NoteView />
      )}
    </div>
  );
};

export default NoteDetail;
