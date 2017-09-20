console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const notes = require('./notes.js')

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv
var command = argv._[0]


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note added Successfully', note)
    } else {
        console.log('Note already exists')
    }
} else if (command == 'list') {
    console.log(notes.getAll())
} else if (command == 'read') {
    console.log(notes.readNote(argv.title))
} else if (command == 'remove') {
    console.log(notes.removeNote(argv.title))
} else {
    console.log('Command not recognize');
}