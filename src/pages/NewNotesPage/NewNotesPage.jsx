import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";


export default function NewNotePage() {
  return (
    <div className="flex-c">
      <h1>Add a note 📌</h1>
      <NewNoteForm />
    </div>
  );
}