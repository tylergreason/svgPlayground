let wkas = Array.from(document.getElementsByClassName('wka')); 

// function to return raising frames 
let framesUp = (ele,i) => {
    // find element's height  
    let eleHeight = parseStyleValue(eleStyle(ele).height); 
    let eleTop = parseStyleValue(eleStyle(ele).top); 
    
    // move element to a certain position - (height * i)
    return [
        {top:eleTop+'px', easing: 'ease'},
        // {top:`${0 + (eleHeight * i)}px`, easing: 'ease'},
        {top:`${0 + (eleHeight * i)}px`},
    ]
}

// function to return lowering frames 
let framesDown = (ele,i) => {
    // find element's height  
    let eleHeight = parseStyleValue(eleStyle(ele).height); 
    let eleTop = parseStyleValue(eleStyle(ele).top); 
    
    // move element to a certain position - (height * i)
    return [
        {top:eleTop+'px', easing: 'ease'},
        // {top:`${0 + (eleHeight * i)}px`, easing: 'ease'},
        {top:`100vh`},
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
