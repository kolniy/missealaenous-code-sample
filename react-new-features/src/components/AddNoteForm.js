import React, { useState, useContext } from 'react';
import NotesContext from '../context/note-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const { notesData } = useContext(NotesContext);
  const dispatch = notesData.dispatch;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const position = useMousePosition();

  const onSubmitNote = (e) => {
    e.preventDefault();
    const note = {
      title,
      body,
    };
    dispatch({
      type: 'ADD_NOTE',
      note,
    });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>
        Add Note {position.x} - {position.y}
      </p>
      <form onSubmit={onSubmitNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Note</button>
      </form>
    </> // using react fragments
  );
};

export { AddNoteForm as default };
