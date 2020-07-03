let wkas = Array.from(document.getElementsByClassName('wka')); 
wkas.forEach(ele => console.log(ele))

// function to return raising frames 
let framesUp = (ele,i) => {
    // find element's height  
    let eleHeight = eleStyle(ele).height; 
    let eleTop = eleStyle(ele).top; 
    console.log(eleHeight + eleTop);
    
    // move element to a certain position - (height * i)
    // return [
    //     {top:eleTop},
    //     {top:`${0 + }`},
    // ]
}