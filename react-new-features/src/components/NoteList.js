import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/note-context';
import notesSelector from '../NotesSelector/notesSelector';

const NoteList = () => {
  const { notesData } = useContext(NotesContext);
  const { notesFilter } = useContext(NotesContext);
  const notes = notesSelector(notesData.notes, notesFilter.filterObject);
  return notes.map((note) => <Note key={note.title} note={note} />);
};

export { NoteList as default };
