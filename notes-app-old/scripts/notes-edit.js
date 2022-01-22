const noteId = location.hash.substring(1)
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const updateInfodisplay = document.querySelector('#upateInfoDisplay')

let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})  

if(note === undefined){
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)
    saveNote(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)
    saveNote(notes)
})



document.querySelector('#remove-note').addEventListener('click', () => {
        removeNote(note.id)
        saveNote(notes)
        location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes'){
      notes = JSON.parse(e.newValue)
  }

   note = notes.find(function(note){
    return note.id === noteId
  })  

if(note === undefined){
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)

})
