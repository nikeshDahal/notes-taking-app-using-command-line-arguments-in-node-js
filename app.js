const yargs = require("yargs");
const { removeNote } = require("./notes");
const notes=require("./notes");

yargs.command({ //adding a add command
    command:'add',
    describe:'add the new notes. ',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})
//remove command complted

//list command
yargs.command({
    command:'list',
    describe:'listing a note',
    handler(){
        notes.listNote()
    }
})
//list command completed

//read command
yargs.command({
    command:'read',
    describe:'reading  a note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

//read command completed

console.log(yargs.argv); 



