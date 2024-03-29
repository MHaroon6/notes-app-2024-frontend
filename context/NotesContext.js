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
  const [notesData, setNotesData] = useState({});
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(""); // three modes ["edit", "view", "new"]
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  // <========== General Functions ==========>
  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const fetchNotesList = async (currPage) => {
    setLoading(true);
    const payload = { status: currPage === "trash" ? "trash" : "" };
    // const res = useApi("/getnotes", "post", payload );
    const res = await Api("/getnotes", "post", payload);
    // { response, error, loading }
    setNotesData(res);
    setLoading(false);

    // console.log("responseData: ", res)
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
    // fetchNotesList();
  };

  const handleTrash = () => {
    // api call to move to trash
    // console.log("Trashed...")
    // let payload = {
    //   id: currentNote?._id,
    //   status: "trash",
    // };
    // const res = Api("/postnote", "post", payload);
    // if (res.error) {
    //   alert(error);
    // } else {
    //   console.log(res?.response);
    setDeleteModal(false);
    // }
  };

  const handleDelete = () => {
    // api call to remove from trash
    // console.log("Deleted...")
    // let payload = {
    //   id: currentNote?._id,
    //   status: "deleted",
    // };
    // const res = Api("/postnote", "post", payload);
    // if (res.error) {
    //   alert(error);
    // } else {
    //   console.log(res?.response);
    setDeleteModal(false);
    // }
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
    handleTrash,
    handleDelete,
    currentPage,
    setCurrentPage,
    
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const myNotesContext = () => {
  return useContext(NotesContext);
};

export default NotesProvider;
