// toggle 漢堡包
const menuToggle = document.querySelector('.toggle-menu')
const mobileNavList = document.querySelector('.mobile-menu')
const body = document.getElementsByTagName('html')[0]

menuToggle.addEventListener('click', function() {
    mobileNavList.classList.toggle('active')
    menuToggle.classList.toggle('active')
    if(menuToggle.classList.length === 1){
        menuToggle.innerHTML = `<span class="material-symbols-outlined">
        menu
        </span>`
    }else{
        menuToggle.innerHTML = `<span class="material-symbols-outlined">
        close
        </span>`
    }
})

