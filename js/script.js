'use strict'

// nav bar js starts here

let openMenuBtn = document.querySelector('#openMenu');
let responsiveNav = document.querySelector('#linksDiv');
openMenuBtn.addEventListener('click',()=>{
    responsiveNav.classList.toggle('min-[275px]:invisible');
    responsiveNav.classList.toggle('min-[275px]:h-[100vh]');
    
    if(responsiveNav.classList.contains('min-[275px]:invisible')){
        openMenuBtn.textContent = 'Menu'
    }else{
        openMenuBtn.textContent = 'Close'
    }
})


// nav bar js Ends here