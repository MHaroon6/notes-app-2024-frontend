import NotesPage from "@/components/NotesPage";


const Trash = () => {
  return (
    <main className="pt-32 px-16 w-full min-h-screen">
      <NotesPage
        emptyMessage1="Trash Bin is Empty"
        emptyMessage2="Deleted Notes will appear here"
      />
    </main>
  );
};

export default Trash;
