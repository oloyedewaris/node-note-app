// var obj={
//   name: 'waris'
// };
// var stringObj= JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

const fs= require('fs');

var originalNote= {
  title:'Some title',
  body: 'Some body'
};
var originalNoteString= JSON.stringify(originalNote);
fs.writeFileSync('notes.js', originalNoteString);

var noteString= fs.readFileSync('notes.js');
var notes= JSON.parse(noteString);

console.log(typeof notes);
console.log(notes.title);
