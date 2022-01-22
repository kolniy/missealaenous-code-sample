// var obj = {
//     name : "kolawole olaniyi"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"kolawole", "Age":23}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// // console.log(person.name);

const fs = require('fs');

var originalNote = {
    title : 'Some title',
    body : 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);