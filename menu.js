let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir_menu')
})
menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir_menu')
})
overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir_menu') 
})