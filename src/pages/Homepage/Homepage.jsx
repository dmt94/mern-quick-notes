import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as notesAPI from '../../utilities/notes-api';

import './Homepage.css';

export default function Homepage() {
  const [notes, setNotes] = useState([]);
  useEffect(function() {
    async function getNotes() {
      const myNotes = await notesAPI.getNotes();
      setNotes(myNotes);
    }
    getNotes();
  }, []);

  async function handleDelete(id) {
    const updatedNotes = await notesAPI.deleteNote(id);
    setNotes(updatedNotes);
  }

  return (
    <div className='homepage-div'>
      {
        notes.map((note) => (
          <div>
            <h3>{note.text}</h3>
            <button onClick={ () => handleDelete(note._id) }>Delete</button>
          </div>
          
        ))
      }
    </div>
  );
}