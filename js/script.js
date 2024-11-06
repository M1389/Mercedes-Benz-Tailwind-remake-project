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
    if(window.scrollY > 110){
        responsiveNav.classList.remove('xl:h-[64px]');
        responsiveNav.classList.remove('xl:visible');
        searchBtnEl.classList.add('invisible');
        openMenuBtn.classList.add('invisible');
    }
    
})
     


// nav bar js Ends here


// Slider Goes here

let textShowEl = document.querySelector('#textShowEl')
let textH1El = document.querySelectorAll('.textH1');
let textH2El = document.querySelector('#textH2');
let textH3El = document.querySelector('#textH3');
setTimeout(()=>{
    for(let i of textH1El){
        i.classList.remove('mt-[50px]');
        i.classList.remove('opacity-0')
        i.classList.add('opacity-1');
    }
},1000)

setTimeout(()=>{
    textH2El.classList.remove('mt-[50px]');
    textH2El.classList.remove('opacity-0')
    textH2El.classList.add('opacity-1');
},1100)

setTimeout(()=>{
    textH3El.classList.remove('mt-[50px]');
    textH3El.classList.remove('opacity-0')
    textH3El.classList.add('opacity-1');
},1200)

let firstMovieEl = document.querySelector('#firstMovie');
let secondMovieEl = document.querySelector('#secondMovie');
let scrollStatusEl = document.querySelector('#scrollStatus');
let scrollTopEl = document.querySelector('#scrollTop')
let scrollDownEl = document.querySelector('#scrollDown')


let lastScrollPositionsecond= 0
window.addEventListener('scroll',()=>{
    let scrollPositionsecond = window.scrollY;
    if(scrollPositionsecond > lastScrollPositionsecond){
        if(window.scrollY > 0 && window.scrollY < 50){
            secondMovieEl.scrollIntoView();
            
            scrollTopEl.classList.remove('flex-1')
            scrollTopEl.classList.add('flex-2')
            scrollDownEl.classList.remove('flex-2')
            scrollDownEl.classList.add('flex-1')
            
            
        }
    }
    if(scrollPositionsecond < lastScrollPositionsecond){
        if(window.scrollY > 700 && window.scrollY < 1000){
            firstMovieEl.scrollIntoView()
            scrollTopEl.classList.remove('flex-2')
            scrollTopEl.classList.add('flex-1')
            scrollDownEl.classList.remove('flex-1')
            scrollDownEl.classList.add('flex-2')
            
        }
    }

    lastScrollPositionsecond = scrollPositionsecond
})




