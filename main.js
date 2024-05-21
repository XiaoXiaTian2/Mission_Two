// toggle 漢堡包
const menuToggle = document.querySelector('.toggle-menu')
const mobileNavList = document.querySelector('.mobile-menu')
const toggleImg = menuToggle.children[0]

menuToggle.addEventListener('click', function() {
    mobileNavList.classList.toggle('active')
    menuToggle.classList.toggle('active')
    if(menuToggle.classList.length === 1){
        toggleImg.src = './img/menu_collapse.svg'
    }else{
        toggleImg.src = './img/close.svg'
        toggleImg.style.width = '40px'
    }
})

