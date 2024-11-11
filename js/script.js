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

let transitionOneSecond = ()=>{
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
}

transitionOneSecond()


let firstMovieEl = document.querySelector('#firstMovie');
let secondMovieEl = document.querySelector('#secondMovie');
let scrollStatusEl = document.querySelector('#scrollStatus');
let scrollTopEl = document.querySelector('#scrollTop')
let scrollDownEl = document.querySelector('#scrollDown')
let scrollBlur = document.querySelector('#scrollBlur')


let lastScrollPositionsecond= 0
window.addEventListener('scroll',()=>{
    let scrollPositionsecond = window.scrollY;
    
    if(window.scrollY > 1000){
        scrollStatusEl.classList.add('hidden')
    }else{
        scrollStatusEl.classList.remove('hidden')
    }
    
    
    if(scrollPositionsecond > lastScrollPositionsecond){
        if(window.scrollY > 0 && window.scrollY < 50){
            secondMovieEl.scrollIntoView();
            scrollTopEl.classList.remove('flex-1')
            scrollTopEl.classList.add('flex-2')
            scrollDownEl.classList.remove('flex-2')
            scrollDownEl.classList.add('flex-1')
            setTimeout(()=>{
                scrollBlur.classList.remove('h-[90vh]')
                scrollBlur.classList.remove('hidden')
                scrollBlur.classList.add('h-[1px]')
            },500) 

            
            
            
            
            
        }
    
    }
    if(scrollPositionsecond < lastScrollPositionsecond){
        if(window.scrollY > 700 && window.scrollY < 1000){
            firstMovieEl.scrollIntoView()
            scrollTopEl.classList.remove('flex-2')
            scrollTopEl.classList.add('flex-1')
            scrollDownEl.classList.remove('flex-1')
            scrollDownEl.classList.add('flex-2')
            scrollBlur.classList.remove('h-[1px]')
            scrollBlur.classList.add('h-[90vh]')
            // scrollBlur.classList.add('hidden')
        }
    }
    

    lastScrollPositionsecond = scrollPositionsecond
})


// second part goes here

let secondPartTransition = document.querySelectorAll('#transition')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 1100) {
        setTimeout(()=>{
            for(let i of secondPartTransition){
                i.classList.remove('mt-[50px]');
                i.classList.remove('opacity-0')
                i.classList.add('opacity-1');
            }
        },1000)
    }else{
        setTimeout(()=>{
            for(let i of secondPartTransition){
                i.classList.add('mt-[50px]');
                i.classList.add('opacity-0')
                i.classList.remove('opacity-1');
            }
        },1000)
    }
})

let windowView = window.innerHeight * 0.9
window.addEventListener('scroll' , ()=>{
    let allDivs = document.querySelectorAll('#viewM')
    for(let i of allDivs){
        let top = i.getBoundingClientRect().top
        if(top < windowView){
            i.classList.remove('mt-[50px]')
            i.classList.remove('opacity-0')
        }else{
            i.classList.add('mt-[50px]')
            i.classList.add('opacity-0')
        }
    }
})


// Footer goes here
let headerFooterEL = document.querySelector('#headerFooter')
let moveContainerEl = document.querySelector('#moveContainer')
let purchaseText = document.querySelector('#purchase')
let servicesText = document.querySelector('#services')
let topUl = document.querySelector('#topLinks')
let downUl = document.querySelector('#downLinks')


window.addEventListener('scroll',()=>{
    let hieghtEl = headerFooterEL.clientHeight / 2
    let topParentEL = headerFooterEL.getBoundingClientRect().top
    let topEl = moveContainerEl.getBoundingClientRect().top
    let resultEl = topParentEL - topEl
    if(resultEl > -hieghtEl){
        topUl.classList.remove('mt-[50px]')
        topUl.classList.remove('opacity-0')
        purchaseText.classList.remove('text-gray-600')
    }else{
        topUl.classList.add('mt-[50px]')
        topUl.classList.add('opacity-0')
        purchaseText.classList.add('text-gray-600')
    }

    if(resultEl < -hieghtEl){
        downUl.classList.remove('-ml-[150px]')
        downUl.classList.remove('opacity-0')
        servicesText.classList.remove('text-gray-600')
    }else{
        downUl.classList.add('-ml-[150px]')
        downUl.classList.add('opacity-0')
        servicesText.classList.add('text-gray-600')
    }
})
