const container = document.getElementById('container')
const menu = document.getElementById('menu')

menu.addEventListener('click', ()=>{
    container.classList.toggle('active')
})

