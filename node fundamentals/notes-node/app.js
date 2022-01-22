const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe : 'Add a new note',
    require : true,
    alias : 't'
};
const bodyOptions = {
    describe : 'Add a new note',
      require : true,
      alias : 't'
};

const agrv = yargs
.command('add', 'Add a new note', {
  title : titleOptions,
  body : bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title : titleOptions
})
.command('remove', 'Remove a note',{
    title : titleOptions
})
.help()
.argv;
const notes = require('./notes.js');

let command = agrv._[0];
// console.log('command :',command)
// console.log('yargs :', agrv);


if (command === 'add'){
   var newNote = notes.addNote(agrv.title, agrv.body);
    if(newNote){
        console.log('Note created succesfully');
        notes.logNote(newNote);
    } else {
        console.log('Note could not be added succesfully, Note title already in use');
    }
} else if(command === 'list'){
   var allNote = notes.getAll();
   console.log(`Printing ${allNote.length} note(s).`);
   allNote.forEach((note) => notes.logNote(note)); 
}else if(command === 'read' ){
   var readNote = notes.readNote(agrv.title);
   if(readNote){
       notes.logNote(readNote);
       console.log(`Note found`);
   }else{
       console.log(`Note not found`);
   }
}else if(command === 'remove'){
 var removedNote = notes.removeNote(agrv.title);
 var message = removedNote ? 'Note removed succesfully' : 'Note not found';
 console.log(message);
} else {
    console.log('Command not recognized');
}


// NOTES : Demonstrating use of core node features

// let filteredArray = _.uniq(['kolawole', 28]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('kolawole olaniyi'));

// let user = os.userInfo();

// fs.appendFile('greetings.txt',` Hello ${user.username}. and you are ${notes.age} year old`, (err) =>{
//     if(err){
//        console.log("error appending file");
//     }
// });

    // let sum = notes.add(10,600);
    // console.log(sum);

