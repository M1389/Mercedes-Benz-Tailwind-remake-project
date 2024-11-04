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

let navBar = document.querySelector("#navBar");

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 1) {
    navBar.classList.remove('relative')
    navBar.classList.add('fixed')


  } else {
    document.querySelector("#navBar").classList.remove('fixed')
  }
}


let lastScrollPosition= 0
window.addEventListener('scroll',()=>{
    let scrollPosition = window.scrollY;
    
    if(scrollPosition < lastScrollPosition){
        responsiveNav.classList.add('xl:h-[64px]');
        responsiveNav.classList.add('xl:visible');
        searchBtnEl.classList.remove('invisible');
        openMenuBtn.classList.remove('invisible');
    }else{
        responsiveNav.classList.remove('xl:h-[64px]');
        responsiveNav.classList.remove('xl:visible');
        searchBtnEl.classList.add('invisible');
        openMenuBtn.classList.add('invisible');
        
    }

    lastScrollPosition = scrollPosition
})


navBar.addEventListener('mouseover',()=>{
        
    if(window.scrollY > 110){
        responsiveNav.classList.add('xl:h-[64px]');
        responsiveNav.classList.add('xl:visible');
        searchBtnEl.classList.remove('invisible');
        openMenuBtn.classList.remove('invisible');
    }
        
});

navBar.addEventListener('mouseout',()=>{
    responsiveNav.classList.remove('xl:h-[64px]');
    responsiveNav.classList.remove('xl:visible');
    searchBtnEl.classList.add('invisible');
    openMenuBtn.classList.add('invisible');
})
     


// nav bar js Ends here