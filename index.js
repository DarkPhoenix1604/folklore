let hamburger = document.querySelector('.lines');
let hamLines = document.querySelectorAll('.line');
let list = document.querySelector('.phone-links');
let n = 0;

hamburger.setAttribute("style", "pointer-events:all");

hamburger.addEventListener('click', () => {
    if (n == 0) {
        for(index of hamLines){
            index.classList.add('cross');
        }
        list.classList.add('show');
        n = 1;
    }
    else{
        for(index of hamLines){
            index.classList.remove('cross');
        }
        n = 0;
        list.classList.remove('show');
    }
})