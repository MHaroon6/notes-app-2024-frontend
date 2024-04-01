import { myNotesContext } from "@/context/NotesContext";
import CloseButton from "./CloseButton";
import ModalButton from "./ModalButton";

const NoteView = () => {
  const { currentNote, handleCloseNote, setMode } = myNotesContext();

  const formatDate = (date) => {
    // Use the nullish coalescing operator (??) to return an empty string if date is null or undefined
    const theDate = date ? new Date(date) : "";

    // Check if theDate is a valid Date object (not null or undefined) before formatting
    if (theDate instanceof Date) {
      return `${theDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })} ${theDate.toLocaleTimeString()}`;
    } else {
      return ""; // Return empty string if date is invalid
    }
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-5">{currentNote?.title}</h4>

      <p>{currentNote?.content}</p>

      <div className="flex  justify-between items-center absolute bottom-0 w-full ">
        <div className="text-xs  flex flex-col gap-1">
          <span>Created: {formatDate(currentNote?.create_date)}</span>
          <span>
            Last Edited:{" "}
            {formatDate(currentNote?.edit_date) ||
              formatDate(currentNote?.create_date)}
          </span>
        </div>
        <div className="flex">
          <CloseButton handleClose={handleCloseNote} />
          <ModalButton
            color="#00c700"
            bgColor="#fff"
            allowHover={false}
            handleClick={() => {
              setMode("edit");
            }}
          >
            <span className="py-1 px-3">Edit Note</span>
          </ModalButton>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
