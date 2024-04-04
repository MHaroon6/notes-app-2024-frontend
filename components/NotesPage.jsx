"use client";
import { useEffect } from "react";

import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";

import SmallNote from "./SmallNote";
import Loader from "./Loader";
import BGInfo from "./BGInfo";
import Modal from "./Modal";
import NoteDetail from "./NoteDetail";
import { myNotesContext } from "@/context/NotesContext";
import DeleteAlert from "./DeleteAlert";
import RestoreAlert from "./RestoreAlert";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const NotesPage = ({ emptyMessage1, emptyMessage2, currPage }) => {
  const {
    isModalOpen,
    notesData,
    fetchNotesList,
    loading,
    deleteModal,
    setCurrentPage,
    handleOpenNote,
    restoreModal,
    searchString,
  } = myNotesContext();

  useEffect(() => {
    setCurrentPage(currPage);
    fetchNotesList(currPage);
  }, []);

  return (
    <>
      {/* ===== Modals ===== */}

      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <NoteDetail />
        </Modal>
      )}
      {deleteModal && (
        <Modal isOpen={deleteModal}>
          <DeleteAlert />
        </Modal>
      )}
      {restoreModal && (
        <Modal isOpen={restoreModal}>
          <RestoreAlert />
        </Modal>
      )}

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

        searchString?.length === 0 ? (
          <BGInfo
            icon={faFolderOpen}
            message1={emptyMessage1}
            message2={emptyMessage2}
          />
        ) : (
          <BGInfo
            icon={faSearchengin}
            message1={"Oops!"}
            message2={"We couldn't find any matches for your search term."}
          />
        )
      ) : (
        // if notes are present:
        <div className="flex flex-wrap justify-center gap-6 px-8 pb-6">
          {/* ===== modal for note detail ===== */}

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
