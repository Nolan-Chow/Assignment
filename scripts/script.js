function darktheme (e) {
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
function lighttheme (e) {
    let main = document.querySelector('main');
    let nav = document.querySelector('nav');
    main.id = 'lightmode_main';
    nav.id = 'lightmode_nav';
    e.target.id = 'lightmode_btn';
    e.target.innerText = 'Dark Theme';
    e.target.removeEventListener('click', lighttheme);
    e.target.addEventListener('click', darktheme);
}
function remove (e) {
    let new_note = document.querySelector('.row1 .green');
    let note = document.querySelector('textarea');
    let save = document.querySelector('.row3 .green');
    let dark = document.querySelector('.grey');
    let disappear = [note, save, dark, e.target];
    for (let element of disappear) {
        element.style.display = 'none';
    }
    new_note.addEventListener('click', add);
}
function add (e) {
    let note = document.querySelector('textarea');
    let save = document.querySelector('.row3 .green');
    let dark = document.querySelector('.grey');
    let cancel = document.querySelector('.row3 .red');
    let appear = [note, save, dark, cancel];
    for (let element of appear) {
        element.toggleAttribute('style')
    }
    note.value = '  ';
    e.target.removeEventListener('click', add)
}
let theme = document.querySelector('.grey');
theme.addEventListener('click', darktheme);
let cancel = document.querySelector('.row3 .red')
cancel.addEventListener('click', remove);