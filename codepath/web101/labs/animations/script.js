let bg = document.getElementById("bg");
let bird = document.getElementById("bird");
let forest = document.getElementById("forest");
let foliage = document.getElementById("foliage");
let text = document.getElementById("text");

let rates = {
    bg: 0.05,
    bird: 0.7,
    forest: 0.15,
    foliage: 0.1,
    text: 1
}

const handleScroll = () => {
    let scrollDistance = window.scrollY;
  
    bg.style.top = scrollDistance * rates.bg + 'px';
    bird.style.left = -scrollDistance * rates.bird + 'px';
    forest.style.top = -scrollDistance * rates.forest + 'px';
    foliage.style.top = scrollDistance * rates.foliage + 'px';
    text.style.top = scrollDistance * rates.text + 'px';
}

window.addEventListener('scroll', handleScroll);