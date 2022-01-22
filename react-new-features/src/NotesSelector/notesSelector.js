const notesSelector = (notes, filter) => {
  return notes.filter((note) => {
    if (note.title.includes(filter.title) || note.body.includes(filter.body)) {
      return note;
    }
  });
};

export { notesSelector as default };
