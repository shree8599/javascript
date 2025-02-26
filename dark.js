const btn = document.querySelector('.cover');
const body = document.querySelector('body');
const content = document.querySelector('h1');
const change = document.querySelector('.togle');
 btn.addEventListener('click', () => {
    if(body.style.backgroundColor === 'white'){
    body.style.backgroundColor = 'black';
    body.style.transition = 'all 0.5s';
    content.style.color = 'white';
    change.style.backgroundColor = 'grey';
    btn.style.transform = 'translateX(80px)';
    btn.style.transition = 'all 0.5s'; }
    else{
    body.style.backgroundColor = 'white';
    content.style.color = 'black';
    change.style.backgroundColor = 'black';
    btn.style.transform = 'translateX(0px)';
    btn.style.transition = 'all 0.5s';
    
    }
 })




