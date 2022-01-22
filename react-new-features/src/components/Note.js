import React, { useContext } from 'react';
import NotesContext from '../context/note-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  const { notesData } = useContext(NotesContext);
  const dispatch = notesData.dispatch;
  const position = useMousePosition();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>
        {position.x},{position.y}
      </p>
      <button
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        x
      </button>
    </div>
  );
};

export { Note as default };

// useEffect(() => {
//     console.log('Setting up effect')

//     return () => {  // using the return function is equivalent to using componentDidUnmount
//         console.log('Cleaning up effect')
//     }
// }, [])
