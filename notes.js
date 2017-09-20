const fs = require('fs');

console.log('Starting notes.js');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (e) {
        console.log(e)
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => title === note.title)

    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }

};

var getAll = () => {
    return fetchNotes()
};

var readNote = (title) => {
    var notes = fetchNotes()
    return notes.filter((note) => title === note.title)
};

var removeNote = (title) => {
    var notes = fetchNotes()
    var notesFiltered = notes.filter((note) => title !== note.title)
    saveNotes(notesFiltered)
    return notesFiltered
}


module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};