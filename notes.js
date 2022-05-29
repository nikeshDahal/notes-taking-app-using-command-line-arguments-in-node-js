const { default: chalk } = require("chalk");
const { captureRejectionSymbol } = require("events");
const fs = require("fs");
const { title } = require("process");
const getNotes = () => "Your notes are note1,note2,note3";

const loadNotes = () => {
  try {
    const bufferedData = fs.readFileSync("./notes.json");
    const jsonData = bufferedData.toString();
    return JSON.parse(jsonData); //json to js obj
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const jsondata = JSON.stringify(notes);
  console.log("notes", jsondata);
  fs.writeFileSync("./notes.json", jsondata);
};

//adding note
const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  //   const duplicateNote=notes.filter((note)=>
  //     note.title===title
  // )
  console.log("dups", duplicateNote);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("title already taken");
  }
};

//adding note completed

//remove note
const removeNote = (title) => {
  const notes = loadNotes();
  const noteToBekeeped = notes.filter((note) => note.title !== title);
  if (notes.length > noteToBekeeped.length) {
    saveNotes(noteToBekeeped);
    console.log("note found and saved");
  } else {
    console.log("note not found");
  }
};
//remove note completed

//list note
const listNote = () => {
  const notes = loadNotes();
  notes.forEach((element) => console.log(element.title));
};
//list note completed

//read command
const readNote = (title) => {
  const notes = loadNotes();
  const found = notes.find((items) => items.title === title);
  console.log(found);
  if (found) {
    console.log('title is :',found.title);
    console.log('body is',found.body);
  } else {
    console.log("note not found");
  }
};
//read command completed

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
