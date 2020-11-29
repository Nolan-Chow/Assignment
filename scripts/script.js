function darktheme (e) {
    let main = document.querySelector('main');
    let nav = document.querySelector('nav');
    main.toggleAttribute("id");
    nav.toggleAttribute("id");
    e.target.toggleAttribute("id");
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
let btn = document.querySelector('.grey');
btn.addEventListener('click', darktheme);