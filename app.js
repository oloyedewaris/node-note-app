const fs= require('fs');
const _= require('lodash');
const yargs= require('yargs');

const notes= require('./notes');

var options= {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
};

const argv= yargs
.command('add', 'Adding a new note', {
  title: options.title,
  body: options.body
})
.command('remove', 'Removing a note', {
  title: options.title
})
.command('read', 'Reading a note', {
  title: options.title
})
.command('list', 'List all note')
.help()
.version()
.argv;

var command= argv._[0];

if(command=== 'add'){
  var note= notes.addNote(argv.title, argv.body);
  if (note){
    console.log('New note added');
    notes.logNote(note)
  } else {
    console.log('Note title taken');
  }
} else if(command=== 'list'){
  var allNotes= notes.getAll(argv.title);
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note)=> notes.logNote(note));
} else if(command=== 'read'){
  var note= notes.readNote(argv.title);
  if(note) {
    console.log('Note found');
    notes.logNote(note)
  }else {
    console.log('Note not found');
  }
} else if (command=== 'remove') {
  var removedNotes= notes.removeNote(argv.title);
  var message= removedNotes ? 'Note was removed' : 'Note not found';
  console.log(message);
} else if (command=== ''){
  console.log('No Command entered');
} else {
  console.log('Command not recognized');
}
