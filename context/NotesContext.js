"use client";

import { useState, createContext, useContext } from "react";
import Api from "@/utils/Api";

import colors from "@/data/colors";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  // <========== States ==========>
  const [currentNote, setCurrentNote] = useState({});
  const [currNoteLoading, setCurrNoteLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [restoreModal, setRestoreModal] = useState(false);
  const [notesData, setNotesData] = useState({});
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(""); // three modes ["edit", "view", "new"]
  const [currentPage, setCurrentPage] = useState("");
  const [error, setError] = useState("");

  // <========== General Functions ==========>
  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const fetchNotesList = async (currPage = currentPage) => {
    if (!isModalOpen) {
      setLoading(true);
    }
    console.log("currpage is : ", currPage)
    console.log("current is : ", currentPage)
    const payload = {
      status: currPage === "trash" ? "trash" : "",
    };
    // const res = useApi("/getnotes", "post", payload );
    const res = await Api("/getnotes", "post", payload);
    // { response, error, loading }
    setNotesData(res);
    if (!isModalOpen) {
      setLoading(false);
    }
    // console.log("responseData: ", res)
  };

  const handleOpenNote = async (noteId) => {
    setCurrNoteLoading(true);
    // handleToggleModal();
    setIsModalOpen(true);
    const payload = { noteId: noteId };
    let newNote = await Api("/getnote", "post", payload);
    setCurrentNote(newNote.response);
    if (newNote?.error) {
      setError(newNote.error);
    } else {
      setError("");
    }
    setCurrNoteLoading(false);
  };

  const handleNewNote = () => {
    handleToggleModal();

    const randomIndex = Math.floor(Math.random() * 16);
    const randomColor = colors[randomIndex];
    setCurrentNote({
      title: "",
      content: "",
      color: randomColor,
      create_date: new Date().toDateString(),
      edit_date: "",
      status: "",
    });
    setMode("new");
    setError("");
  };

  const handleCloseNote = () => {
    handleToggleModal();
    setCurrNoteLoading(false);
    setCurrentNote({
      title: "",
      content: "",
      color: "",
      create_date: "",
      edit_date: "",
      status: "",
    });
    setError("");
  };

  const handleSaveNote = async ({ saveNClose, title, content, color }) => {
    // api call to save note

    const savePayload = {
      _id: currentNote?._id || null,
      title: title,
      content: content,
      status: currentNote?.status || "",
      color: color ? color : currentNote?.color,
      create_date: currentNote?.create_date || "",
      edit_date: currentNote?.edit_date || "",
    };

    const res = await Api("/postnote", "post", savePayload);

    setCurrentNote(res.response);

    // console.log("posted: ", res);

    if (saveNClose) {
      handleCloseNote();
    } else {
      handleOpenNote(res.response?._id);
      setMode("view");
    }
    fetchNotesList();
  };

  const handleRecover = async () => {
    // api call to move to trash
    // console.log("Trashed...")
    setRestoreModal(false);
    let payload = {
      _id: currentNote?._id,
      status: "",
    };
    const res = await Api("/postnote", "post", payload);
    if (res.error) {
      alert(error);
    } else {
      // console.log(res);
      fetchNotesList(currentPage);
    }
  };

  const handleDelete = async () => {
    // api call to remove from trash
    // console.log("Deleted...")
    setDeleteModal(false);
    let payload = {
      _id: currentNote?._id,
      status: currentPage === "trash" ? "deleted" : "trash",
    };
    const res = await Api("/postnote", "post", payload);
    if (res.error) {
      alert(error);
    } else {
      console.log(res?.response);
      fetchNotesList(currentPage);
    }
  };

  // <========== Exporting values ==========>
  const value = {
    currentNote,
    setCurrentNote,
    currNoteLoading,
    setCurrNoteLoading,
    isModalOpen,
    setIsModalOpen,
    notesData,
    setNotesData,
    handleToggleModal,
    fetchNotesList,
    loading,
    setLoading,
    mode,
    setMode,
    handleNewNote,
    handleCloseNote,
    deleteModal,
    setDeleteModal,
    handleRecover,
    handleDelete,
    currentPage,
    setCurrentPage,
    handleOpenNote,
    handleSaveNote,
    error,
    setError,
    restoreModal,
    setRestoreModal,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const myNotesContext = () => {
  return useContext(NotesContext);
};

export default NotesProvider;
