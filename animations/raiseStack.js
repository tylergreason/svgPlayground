let wkas = Array.from(document.getElementsByClassName('wka')); 

// function to return raising frames 
let framesUp = (ele,i) => {
    // find element's height  
    let eleHeight = parseStyleValue(eleStyle(ele).height); 
    let eleTop = parseStyleValue(eleStyle(ele).top); 
    
    // move element to a certain position - (height * i)
    return [
        {top:eleTop+'px', left:'0px', easing: 'ease'},
        // {top:`${0 + (eleHeight * i)}px`, easing: 'ease'},
        {top:`${0 + (eleHeight * i)}px`, left:'0px'},
    ]
}

// function to return lowering frames 
let framesDown = (ele,i) => {
    // find element's height  
    // let eleHeight = parseStyleValue(eleStyle(ele).height); 
    let eleTop = parseStyleValue(eleStyle(ele).top); 
    
    // move element to a certain position - (height * i)
    return [
        {top:eleTop+'px', easing: 'ease'},
        // {top:`${0 + (eleHeight * i)}px`, easing: 'ease'},
        {top:`100vh`},
    ]
}

let framesLeft = (ele) => {
    // find width and left values
    let eleWidth = parseStyleValue(eleStyle(ele).width); 
    let eleLeft = parseStyleValue(eleStyle(ele).left); 
    
    // move element to a certain position - (height * i)
    return [
        {left:eleLeft+'px', easing: 'ease'},
        // {top:`${0 + (eleHeight * i)}px`, easing: 'ease'},
        {left:`${0 - eleWidth}px`},
    ]
}

// function to move all wkas up 
const raiseEles = array => {
    array.forEach((ele, index) => {
        ele.animate(framesUp(ele, index), {duration: 500, fill: 'forwards'})
    })
}

// function to move all wkas down
const lowerEles = array => {
    array.forEach((ele, index) => {
        ele.animate(framesDown(ele, index), {duration: 500, fill: 'forwards'})
    })
}

const moveElesLeft = array => {
    array.forEach((ele, index) =>{
        window.setTimeout(
            function (){
                ele.animate(framesLeft(ele), {duration: 500, fill:'forwards'})
            }, 
            50*index
            )
    })
}