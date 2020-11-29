function darktheme(e) {
    let main = document.querySelector('main');
    let nav = document.querySelector('nav');
    let dark = [main, nav, e.target];
    for (let element of dark) {
        element.toggleAttribute('id');
    }
    e.target.innerText = 'Light Theme';
    e.target.removeEventListener('click', darktheme);
    e.target.addEventListener('click', lighttheme);
}
function lighttheme(e) {
    let main = document.querySelector('main');
    let nav = document.querySelector('nav');
    main.id = 'lightmode_main';
    nav.id = 'lightmode_nav';
    e.target.id = 'lightmode_btn';
    e.target.innerText = 'Dark Theme';
    e.target.removeEventListener('click', lighttheme);
    e.target.addEventListener('click', darktheme);
}
let theme = document.querySelector('.grey');
theme.addEventListener('click', darktheme);

function remove(e) {
    let new_note = document.querySelector('.row1 .green');
    let note = document.querySelector('textarea');
    let save = document.querySelector('.row3 .green');
    let disappear = [note, save, e.target];
    for (let element of disappear) {
        element.style.display = 'none';
    }
    new_note.addEventListener('click', add);
}
function add(e) {
    let note = document.querySelector('textarea');
    let save = document.querySelector('.row3 .green');
    let cancel = document.querySelector('.row3 .red');
    let appear = [note, save, cancel];
    for (let element of appear) {
        element.toggleAttribute('style')
    }
    note.value = '';
    e.target.removeEventListener('click', add)
}
let cancel = document.querySelector('.row3 .red')
cancel.addEventListener('click', remove);

function store_notes() {
    let notes = document.querySelector('textarea').value;
    let lines = notes.split('\n');
    let first_line = lines[0];
    if (lines.length === 1 && first_line !== '') {
        notesArray.push({
                title: first_line,
                body: ''
            });
        addtolist(first_line);
    } else if (lines.length > 0 && first_line !== '') {
        lines.shift()
        let value = lines.join('\n')
        notesArray.push({
            title: first_line,
            body: value
        });
        addtolist(first_line);
    }
    document.querySelector('textarea').value = ''
}
function addtolist(title) {
    list = document.querySelector('nav ul');
    listitem = document.createElement('li');
    listitem.innerText = title;
    list.appendChild(listitem);
}
let notesArray = [{
        title: 'note one',
        body: 'some text 1'
    },
    {
        title: 'note two',
        body: 'some text 2'
    }];
let save = document.querySelector('.row3 .green');
save.addEventListener('click', store_notes);

function select_note (e) {
    for (let notes of notesArray) {
        if (e.target.innerText === notes.title) {
            note_area = document.querySelector('textarea');
            note_area.value = notes.title + '\n' + notes.body;
        }
    }
}
let nav_menu = document.querySelector('nav ul');
nav_menu.addEventListener('click', select_note);