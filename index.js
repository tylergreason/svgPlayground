const height = window.innerHeight; 
const width = window.innerWidth; 

// make rectangle, append it to SVG div, manipulate its coordinates 
let rect = document.createElement('rect'); 
rect.height = '500px';
rect.width = '100px';
rect.fill = 'green'
// const body = Array.from(document.getElementsByTagName('body'))[0]
const svgPlayground = document.getElementById('svgPlayground');
// svgPlayground.style.height = '200px'
// console.log(svgPlayground.style.height)
svgPlayground.appendChild(rect); 


// polygon.points[0].x = 20;   
// polygon.points[0].x = 300;   

rectangle.classList.add('rotated')

// try making new rect element with javascript 
const a = document.createElement('rect'); 
a.classList.add("rectangle2"); 
// svgPlayground.appendChild(a); 


// webkit animations 

// keyframe array
const kfaFun = heightOffset => {

    return [
        {top: '100vh'},
        {top: `${0 + heightOffset}px`}
    ]
}

// timing properties 
let tp = {
    duration: 1000, 
    easing: 'steps(60, end)',
    fill: 'forwards'
    // iterations: Infinity
}

// make array of elements to animate 
const eleToAnimate = Array.from(document.getElementsByClassName('wka')); 

// animate the elements 
eleToAnimate.forEach((ele, index) => {
    let styles = window.getComputedStyle(ele); 
    
    // let ani = ele.animate(kfaFun(index*150), tp)
    // change inner text to represent place in the array 
    ele.innerText = `my place in the array is ${index}`
    // ele.addEventListener('click', e => {
    //     console.log(index);
    // })
})
// create a range, then with that range create an HTML fragement 
// let newEle = document.createRange().createContextualFragment(
//         // wrap document fragments in a div or span, but only the elements inside that can be modified like normal elements
//         `
//         <div id='newEle'>
//             <div id='newDiv'>This is another new element
//                 <div>This is another new element</div>
//             </div>
//         </div>
//         `)

// make document fragment with id='newEle' 
document.body.appendChild(document.createRange().createContextualFragment(
    // wrap document fragments in a div or span, but only the elements inside that can be modified like normal elements
    `
    <div id='newEle'>
        <div id='newDiv'>This is another new element
            <div>This is another new element</div>
        </div>
    </div>
    `))

// function to find argument element's current height 
const eleHeight = ele => {
    return window.getComputedStyle(ele).top;
}
// animate newDiv
// create frames 
let framesForwards = ele => {
    return [
        {top: eleHeight(ele), easing: 'ease'},
        {top: '50vh'},
    ]
}

let framesBackwards = (ele) =>{
    return [
        {top: eleHeight(ele), easing: 'ease'},
        {top: '100vh'},
    ]
}
// create timing 
let timing = {
    duration: 500, 
    // loop: true,
    // iterations: Infinity,
    fill: 'forwards'
}
// const forwardsAnimation = newDiv.animate(framesForwards, timing); 
// create functions to raise and lower div 
const raiseDiv = (ele) => {
    ele.animate(framesForwards(ele), timing);
}

const lowerDiv = (ele) => {
    ele.animate(framesBackwards(ele), timing);
    // debugger
    // {...timing, fill: 'backwards'}
}

let wkas = Array.from(document.getElementsByClassName('wka')); 
wkas.forEach(ele => raiseDiv(ele))