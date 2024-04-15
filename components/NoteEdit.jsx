import { useState } from "react";
import { myNotesContext } from "@/context/NotesContext";

import CloseButton from "./CloseButton";
import ModalButton from "./ModalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";

const NoteEdit = () => {
  const { currentNote, handleCloseNote, setMode, handleSaveNote, changeColor } =
    myNotesContext();
  const [title, setTitle] = useState(currentNote?.title || "");
  const [content, setContent] = useState(currentNote?.content || "");

  const [isSaving, setIsSaving] = useState(null);

  return (
    <>
      <form className="flex flex-col gap-4 bg-transparent my-2 w-[90%] lg:w-full">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-transparent border-b border-gray-500 p-2 outline-none text-lg font-semibold"
          placeholder="Note Title"
        />

        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="bg-transparent border border-gray-500 outline-none min-h-[470px] rounded-md p-2"
          placeholder="Note Text"
        ></textarea>
      </form>
      <div className="flex justify-end items-center  bottom-0 right-0">
        <div
          className="flex"
          style={{ marginRight: "auto" }}
          onClick={(e) => {
            e.stopPropagation();
            changeColor();
          }}
        >
          <FontAwesomeIcon
            icon={faPaintRoller}
            className="fa-xl text-gray-500 cursor-pointer  hover:text-gray-600"
            title="Change Color"
          />
        </div>
        <CloseButton handleClose={handleCloseNote} />
        <ModalButton
          color="#06b6d4"
          bgColor="#fff"
          allowHover={false}
          handleClick={() => {
            handleSaveNote({ saveNClose: false, title, content });
            setIsSaving("save");
          }}
          disabled={isSaving}
        >
          <span className="py-1 px-3">
            {isSaving === "save" ? "Saving..." : "Save"}
          </span>
        </ModalButton>
        <ModalButton
          color="#06b6d4"
          bgColor="#fff"
          allowHover={false}
          handleClick={() => {
            handleSaveNote({ saveNClose: true, title, content });
            setIsSaving("saveNClose");
          }}
          disabled={isSaving}
        >
          <span className="py-1 px-3">
            {isSaving === "saveNClose" ? "Saving..." : " Save & Close"}
          </span>
        </ModalButton>
      </div>
    </>
  );
};

export default NoteEdit;
