"use client";
import { useEffect } from "react";

import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Api from "@/utils/Api";
import SmallNote from "./SmallNote";
import Loader from "./Loader";
import BGInfo from "./BGInfo";
import Modal from "./Modal";
import ViewNote from "./ViewNote";
import { myNotesContext } from "@/context/NotesContext";

const NotesPage = ({ emptyMessage1, emptyMessage2, currPage }) => {
  const {
    currentNote,
    setCurrentNote,
    currNoteLoading,
    setCurrNoteLoading,
    isModalOpen,
    notesData,
    handleToggleModal,
    fetchData,
    loading,
  } = myNotesContext();
  

  const handleOpenNote = async (noteId) => {
    setCurrNoteLoading(true);
    handleToggleModal();
    const payload = { noteId: noteId };
    let newNote = await Api("/getnote", "post", payload);
    setCurrentNote(newNote);
    setCurrNoteLoading(false);
  };

  useEffect(() => {
   
    fetchData(currPage);
  }, []);


  return (
    <>
      {loading ? (
        // While loading:
        <div className="mt-4 flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : notesData?.error ? (
        // if API gives an error:
        <BGInfo
          icon={faPlugCircleXmark}
          message1="Failed to connect to the server"
          message2=" Please try refreshing the page. If the issue persists, please reach out to me for assistance."
        />
      ) : notesData?.response?.length === 0 ? (
        // if notesl list is empty:
        <BGInfo
          icon={faFolderOpen}
          message1={emptyMessage1}
          message2={emptyMessage2}
        />
      ) : (
        // if notes are present:
        <div className="flex flex-wrap justify-center gap-4">
          <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
            <ViewNote note={currentNote} noteLoading={currNoteLoading} />
          </Modal>
          {notesData?.response?.map((note, noteIdx) => (
            <SmallNote key={noteIdx} note={note} handleClick={handleOpenNote} />
          ))}
        </div>
      )}
    </>
  );
};

export default NotesPage;
