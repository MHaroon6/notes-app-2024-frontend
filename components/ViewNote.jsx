import Loader from "./Loader";

const ViewNote = ({ note, noteLoading }) => {
   const noteData = note?.response
  return (
    <div
    // style={{backgroundColor: note?.color || "crimson"}}
    >
      {note?.error ? (
        <h4>An error occured</h4>
      ) : noteLoading ? (
        <Loader />
      ) : (
        <div>
          <h4>{noteData?.title}</h4>
          <br />
          <p>{noteData?.content}</p>
          <div>
            <span>{noteData?.create_date}</span>
            <span>{noteData?.edit_date}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewNote;
