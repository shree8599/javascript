const form = document.querySelector('form');
const input = document.querySelector('textarea');
const color = document.querySelector('input[type="color"]');
const createNote =[]
const deleteNote=[]
const notesContainer = document.querySelector('.nContainer');
const undo = document.querySelector('.btn2');

form.addEventListener('submit', (e) =>{
e.preventDefault();
const newNote= {
 text: input.value,
    color: color.value,
    timestamp : new Date().toLocaleString(),
    position : Date.now()

};

createNote.push(newNote)
console.log(createNote)
renderNotes()
});

function renderNotes(){
notesContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
createNote.forEach(note => {

    const noteElement = document.createElement('div');
noteElement.classList.add('note');
noteElement.style.position = 'relative';


noteElement.style.backgroundColor = note.color;


const text = document.createElement('p');
text.innerText = `${note.text}`;

const close = document.createElement('span');
close.classList.add('close');
close.innerHTML = '&times;';
close.addEventListener('click', (b) => {

deleteNote.push(...createNote.splice(createNote.indexOf( note.position), 1));
const remove = b.target.parentElement.remove();
})
undo.addEventListener('click', () => {
    if (deleteNote.length > 0) {
        const lastDeletedNote = deleteNote.pop();
        createNote.push(lastDeletedNote);
        renderNotes();
    }
});




const timestamp = document.createElement('span');
timestamp.classList.add('timestamp');
timestamp.innerText = note.timestamp;


noteElement.append(text, close, timestamp);
fragment.append(noteElement);
})
notesContainer.append(fragment);
}

