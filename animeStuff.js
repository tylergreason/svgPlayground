let height = window.innerHeight;
let targets = document.querySelectorAll('.wka, .anotherWKA')
let wkaHeight = window.getComputedStyle(targets[0]).height;

anime({
    targets: '.anotherWKA', 
    // top: 0,
    // right: 500,
    easing: 'linear',
    rotate: '1turn'
})

let menuUp = anime({
    targets: '.wka', 
    top: function(wka, i, l){
        console.log(wka);
        console.log(i);
        console.log(l);
        return 0 + (i * 100)
    },
    // loop: true,
    easing: 'easeInOutSine',
    // left: 10,
    // easing: 'linear',
    duration: 800,
    autoplay: false
    // delay: anime.stagger(100)
    // rotate: '1turn'
})

targets[4].addEventListener('click', () => {
    menuUp.direction = "normal"; 
    menuUp.play();
})

targets[0].addEventListener('click', () => {
    menuUp.direction = "reverse"; 
    menuUp.play(); 
})