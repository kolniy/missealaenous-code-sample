import React, { useContext } from 'react';
import NotesContext from '../context/note-context';

const NotesFilterComponent = () => {
  const { notesFilter } = useContext(NotesContext);
  const filterDispatch = notesFilter.filterDispatch;
  const onChange = (data) =>
    filterDispatch({
      type: 'FILTER_BY_TITLE',
      title: data,
    });

  return (
    <input
      type="text"
      placeholder="type here to filter notes"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export { NotesFilterComponent as default };
