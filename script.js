const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
const notes = document.querySelector('.input-box');
const colorBtn = document.querySelector('.color-btn');

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes()

createBtn.addEventListener('click', ()=>{
    let noteItem = document.createElement('div');
    let inputBox = document.createElement('p');
    let deleteImg = document.createElement('img');
    let deleteBtn = document.createElement('div');
    let colorBtn = document.createElement('div');
    let tooltipText1 = document.createElement('span');

    noteItem.className = 'note-item';

    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');

    deleteBtn.className = 'delete-btn hover-text';


    tooltipText1.innerText = 'Delete note';
    tooltipText1.className='tooltip-text top1';

    deleteImg.classList.add('delete-img');
    deleteImg.src = 'images/delete.png';

    deleteBtn.appendChild(tooltipText1);
    deleteBtn.appendChild(deleteImg);
    noteItem.appendChild(inputBox);
    noteItem.appendChild(deleteBtn);

    notesContainer.appendChild(noteItem);
    updateStorage()
})

notesContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-img')) {
        let noteItem = e.target.closest('.note-item');
        
        if (noteItem) {
            notesContainer.removeChild(noteItem);
            updateStorage()
        }
        
        else if(e.target.tagName === 'P'){
            notes = document.querySelectorAll('.input-box');
            notes.forEach(nt =>{
                nt.onkeyup = function(){
                    updateStorage()
                }
            })
        }
        updateStorage()
    }
});

document.addEventListener('keydown', event=>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
}
