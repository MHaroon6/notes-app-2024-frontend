"use client";
import { useEffect } from "react";

import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import useApi from "@/hooks/useApi";
import Api from "@/utils/Api";
import SmallNote from "./notes/SmallNote";
import Loader from "./Loader";

const NotesPage = ({ emptyMessage1, emptyMessage2, currPage }) => {
  const [notesData, setNotesData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const payload = { status: currPage === "notes" ? "" : "trash" };
      // const res = useApi("/getnotes", "post", payload );
      const res = await Api("/getnotes", "post", payload);
      // { response, error, loading }
      setNotesData(res);
      setLoading(false);

      // console.log("responseData: ", res)
    };
    fetchData();
  }, []);

  // console.log("notes list: ")

  return (
    <>
      {loading ? (
        <div className="mt-4">

       <Loader  />
        </div>
      ) : notesData?.error ? (
        <span>an error occured</span>
      ) : notesData?.response?.length === 0 ? (
        <div className="text-center text-gray-400 flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faFolderOpen} className="w-16 h-16" />
          <div>{emptyMessage1}</div>
          <div>{emptyMessage2}</div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {notesData?.response?.map((note, noteIdx) => (
            <SmallNote key={noteIdx} note={note} />
          ))}
        </div>
      )}
    </>
  );
};

export default NotesPage;
