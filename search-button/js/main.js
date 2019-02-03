const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip');

searchBtn.addEventListener('click', () =>{
    search.style.width = '80%';
    search.style.paddingLeft = '60px';
    search.style.cursor = 'text';
    search.focus();
    
   
    typewriter();

})

var i = 0;
var message = 'A Guy Who Loves Coding';
var speed = 100;

function typewriter(){
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typewriter, speed);
    }
}

search.addEventListener('keydown', ()=> {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
})
