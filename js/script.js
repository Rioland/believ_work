const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


const form = [...document.querySelector('.form').children];
form.forEach((item, i) =>{
    setTimeout(() =>{
        item.style.opacity = 1;
    }, i*100);
})