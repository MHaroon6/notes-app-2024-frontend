"use client";
import { useEffect, useState } from "react";

import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";

import SmallNote from "./SmallNote";
import Loader from "./Loader";
import BGInfo from "./BGInfo";
import Modal from "./Modal";
import NoteDetail from "./NoteDetail";
import { myNotesContext } from "@/context/NotesContext";
import DeleteAlert from "./DeleteAlert";

const NotesPage = ({ emptyMessage1, emptyMessage2, currPage }) => {
  const {
    isModalOpen,
    notesData,
    fetchNotesList,
    loading,
    // handleCloseNote,
    deleteModal,

    setCurrentPage,

    handleOpenNote,
  } = myNotesContext();

  // const [error, setError] = useState("");

  // const handleOpenNote = async (noteId) => {
  //   setCurrNoteLoading(true);
  //   handleToggleModal();
  //   const payload = { noteId: noteId };
  //   let newNote = await Api("/getnote", "post", payload);
  //   setCurrentNote(newNote.response);
  //   if (newNote.error) {
  //     setError(newNote.error);
  //   }
  //   setCurrNoteLoading(false);
  // };

  useEffect(() => {
    fetchNotesList(currPage);
    setCurrentPage(currPage);
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
          message1="The connection to the server failed."
          message2="Please attempt to refresh the page. If the problem persists, feel free to contact me for assistance."
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
          {/* ===== modal for note detail ===== */}
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              // onClose={handleCloseNote}
            >
              <NoteDetail />
            </Modal>
          )}

          {/* ===== modal for delete confirmation ===== */}
          {deleteModal && (
            <Modal
              isOpen={deleteModal}
              // onClose={() => {
              //   setDeleteModal(false);
              // }}
            >
              <DeleteAlert />
            </Modal>
          )}

          {notesData?.response?.map((note, noteIdx) => (
            <span key={noteIdx}>
              <SmallNote note={note} handleClick={handleOpenNote} />
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default NotesPage;
