// make rectangle, append it to SVG div, manipulate its coordinates 
let rect = document.createElement('rect'); 
rect.height = '500px';
rect.width = '100px';
rect.fill = 'green'
const body = Array.from(document.getElementsByTagName('body'))[0]
const svgPlayground = document.getElementById('svgPlayground');
// svgPlayground.style.height = '200px'
console.log(svgPlayground.style.height)
svgPlayground.appendChild(rect); 


// polygon.points[0].x = 20;   
// polygon.points[0].x = 300;   

rectangle.classList.add('rotated')

// try making new rect element with javascript 
const a = document.createElement('rect'); 
a.classList.add("rectangle2"); 
// svgPlayground.appendChild(a); 


// webkit animations 