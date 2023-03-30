let btn = document.querySelector('.button');
let alert = document.querySelector('.aunth');
let shadow = document.querySelector('.conisclick');
const scrollTop = document.querySelector('.slideup')
let arrow = document.querySelector('.bord');


let w = window.innerWidth;
let h = window.innerHeight;

btn.addEventListener('click', function(){
    alert.style.opacity = 1;
    alert.style.visibility = 'visible';
    console.log('clicl');
})

let x=document.querySelector('.xclose').addEventListener('click', function(){
    alert.style.opacity = 0;
    alert.style.visibility = 'hidden';

})

let scrolled = function(){
    var scroll;

    console.log(window.innerHeight)

    scroll = pageYOffset
    console.log (scroll)
     
    
    if(scroll === 0){
        window.scrollTo(0,1000);

        
    }
    if(scroll > 0){
        window.scrollTo(0,0)

    }
};

scrollTop.addEventListener('click', function(){
    scrolled();
    arrow.classList.toggle('rot')
})
