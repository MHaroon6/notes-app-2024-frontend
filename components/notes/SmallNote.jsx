const SmallNote = ({ key, note }) => {
  return (
    <div
      key={key}
      style={{ backgroundColor: note?.color || "white" }}
      className={`w-64 h-44  border border-gray-300 rounded-lg p-2 flex justify-center items-center cursor-pointer`}
    >
      <div className="text-lg text-center">

      {note?.title}

      </div>
      {/* <div>{note?.content}</div> */}
    </div>
  );
};

export default SmallNote;
