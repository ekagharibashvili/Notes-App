const chalk = require("chalk")
const yargs = require("yargs")
const getNotes = require("./notes.js")


// Customize yargs version 
yargs.version("1.1.0")

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'listing out the notes',
    handler: function () {
        console.log('Listing out the notes')
    }
})


 console.log(yargs.argv)

