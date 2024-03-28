"use client";

import { useState, createContext, useContext } from "react";
import Api from "@/utils/Api";


const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  // <========== States ==========>
  const [currentNote, setCurrentNote] = useState({});
  const [currNoteLoading, setCurrNoteLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notesData, setNotesData] = useState({});
  const [loading, setLoading] = useState(false);
//   const [currPage, setCurrPage] = useState("");


  // <========== General Functions ==========>
  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const fetchData = async (currPage) => {
    setLoading(true);
    const payload = { status: currPage === "trash" ? "trash" : "" };
    // const res = useApi("/getnotes", "post", payload );
    const res = await Api("/getnotes", "post", payload);
    // { response, error, loading }
    setNotesData(res);
    setLoading(false);

    // console.log("responseData: ", res)
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
    fetchData,
    loading, setLoading,

    // currPage, setCurrPage,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const myNotesContext = () => {
  return useContext(NotesContext);
};

export default NotesProvider;
