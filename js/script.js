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

let searchBtnEl = document.querySelector('#searchBtn');
let searchContainerEL = document.querySelector('#searchContainer');

searchBtnEl.addEventListener('click',()=>{
    searchContainerEL.classList.toggle('invisible');
    searchContainerEL.classList.toggle('h-[100vh]');
    
    
    if(searchContainerEL.classList.contains('h-[100vh]')){
        searchBtnEl.textContent = 'Close'
    }else{
        searchBtnEl.textContent = 'Search'
    }
})



window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 1) {
    document.querySelector('#navBar').classList.remove('relative')
    document.querySelector("#navBar").classList.add('fixed')


  } else {
    document.querySelector("#navBar").classList.remove('fixed')
  }
}


window.addEventListener('scroll',()=>{
    let scrollPosition = window.scrollY
})

// nav bar js Ends here