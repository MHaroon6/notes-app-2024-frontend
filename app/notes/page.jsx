import NotesPage from "@/components/NotesPage";

const Notes = () => {
  return (
    <main className="pt-32 px-16 w-full min-h-screen">
      <NotesPage
        emptyMessage1="Notes Folder is Empty"
        emptyMessage2="Click 'New Note' Button to add a Note"
      />
    </main>
  );
};

export default Notes;
