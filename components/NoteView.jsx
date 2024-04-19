import { myNotesContext } from "@/context/NotesContext";
import CloseButton from "./CloseButton";
import ModalButton from "./ModalButton";

const NoteView = () => {
  const { currentNote, handleCloseNote, setMode, currentPage } = myNotesContext();

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
      <h4 className="text-lg font-semibold mb-5 mx-auto">{currentNote?.title}</h4>

      <p className="w-[95%] lg:w-full max-h-[440px] lg:max-h-[480px] overflow-auto">{currentNote?.content}</p>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center absolute bottom-0 w-[90%] lg:w-[97%] ">
        <div className="text-xs  flex flex-col gap-1">
          <span>Created: {formatDate(currentNote?.create_date)}</span>
          <span>
            Last Edited:{" "}
            {formatDate(currentNote?.edit_date) ||
              formatDate(currentNote?.create_date)}
          </span>
        </div>
        <div className="flex justify-end px-2 mt-2">
          <CloseButton handleClose={handleCloseNote} />

          {currentPage !== "trash" && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteView;
