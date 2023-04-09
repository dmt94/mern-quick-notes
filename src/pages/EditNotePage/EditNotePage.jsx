import {useParams} from "react-router-dom";


export default function EditNotePage({notes}) {
  let { noteId } = useParams();
  let noteToEdit = notes.find(note => note._id === noteId);
  console.log(noteToEdit);

  function handleChange() {

  }
  function handleSubmit() {

  }
  return (
    <div className="flex-c">
      <h1>Add a note 📌</h1>
    </div>
  );
}