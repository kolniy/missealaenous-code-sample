import React, { useState, useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes';
import notesFilterReducer from '../reducers/notesFilterReducer';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesFilterComponent from '../components/NotesFilterComponent';
import NotesContext from '../context/note-context';

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [filterObject, filterDispatch] = useReducer(notesFilterReducer, {
    title: '',
    body: 'kola',
  }); // trying to create notes filter reducers

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes });
    }
  }, []); // use effect with no dependencies specified is equivalent to componentDidMonut

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]); // use effect with one or more dependencies is equivalent to componentDidUpdate that tracks only the specified dependencies

  return (
    <NotesContext.Provider
      value={{
        notesData: { notes, dispatch },
        notesFilter: { filterObject, filterDispatch },
      }}
    >
      <h1>Notes</h1>
      <NotesFilterComponent />
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
