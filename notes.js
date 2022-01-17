const fs = require("fs")
const chalk = require("chalk")

const readNotes = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title === title)
    if (searchNote) {
        console.log(chalk.blue.inverse(searchNote.title))
        console.log(searchNote.body)
    }
    else {
        console.log(chalk.red('ERROR'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgYellow("Your Notes"))
    let titles = notes.forEach((note) => {
        console.log(note.title)
    })
    return titles
}


const removeNote = (title) => {
    const notes = loadNotes()
    let newNotes = notes.filter((note) => note.title !== title)
    if (notes.length > newNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(newNotes)
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
}