let width = window.innerWidth;
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
    easing: 'spring(1, 800, 100, 0)',
    // left: 10,
    // easing: 'linear',
    duration: 800,
    autoplay: false,
    // delay: anime.stagger(100),
    // rotate: '1turn'
})

let meteorAni = anime({
    targets: '.meteor',
    // duration: 0,
    // left: anime.random(0, 100)
    left: {
        value: function(){return anime.random(width/2 - 100, width/2 + 100)},
        duration: 0
    },
    bottom: {
        value: 0,
        duration: 0
    },
    rotate: {
        value: 135, 
        duration: 0
    },
    backgroundColor: 'rgb(244, 86, 255)',
})

targets[4].addEventListener('click', () => {
    menuUp.direction = "normal"; 
    menuUp.play();
})

targets[0].addEventListener('click', () => {
    console.log(menuUp);
    menuUp.reverse(); 
    menuUp.play(); 
    // if (menuUp.completed !== true){
    //     menuUp.reverse();
    // }else{

        // menuUp.direction = "reverse"; 
    // }
})