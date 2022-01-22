
// Read existing note from localstorage
const getSavedNotes = () => {
const notesJSON = localStorage.getItem('notes');
  // check for existing saved data
if(notesJSON !== null){
   return JSON.parse(notesJSON);
   } else {
    return []
  }
}

//save note
const saveNote = (notes) => {
 localStorage.setItem('notes', JSON.stringify(notes));
}

//remove note
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })
  if(noteIndex > -1){
    notes.splice(noteIndex, 1);
   }
}

// Generate the DOM structure for a note
const genNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    // const button = document.createElement('button');

    // // setup the remove note button
    // button.textContent = 'x'
    // noteEl.appendChild(button);
    // button.addEventListener('click', () => {
    //     removeNote(note.id);
    //     saveNote(notes);
    //     renderNotes(notes, filters);
    // })

    // setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "Unnamed Note";
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEl.textContent = lastEditedMsg(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

//Render Application notes
const renderNotes = function(notes, filters){
    const notesEl = document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function(note) {
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    notesEl.innerHTML = ""

    if(filteredNotes.length > 0){
        filteredNotes.forEach(function(note) {
            const noteEl = genNoteDOM(note);
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No Notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

// Gen last edited message
const lastEditedMsg = (timestamp) => {
    return `Last Edited : ${moment(timestamp).fromNow()}`
}