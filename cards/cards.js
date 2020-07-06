// play around with making cards with ranges

const createFragment = () => {
    return document.createRange().createContextualFragment(
        `
        <>
        </>
        `
        )
}

const createUnorderedList = array =>{
    let list = '<ul>'
    array.forEach(ele => {
        list += `<li>${ele}</li>`
    })
    return list + '</ul>'; 
}

let sampleArray = ['Aliqua esse ea ipsum et adipisicing nisi cupidatat.','Exercitation reprehenderit duis proident quis velit duis culpa laboris dolore cillum quis.','Tempor minim nulla aute aliqua occaecat tempor quis labore nostrud irure anim ut.']; 

const createCard = (array, options={}) => {
    // debugger
    return document.createRange().createContextualFragment(`
        <div class='card__container ${options.classes}' data-id=${options.dataset}>
            <div class='card--left'>
            </div>
            <div class='card--info__container card--right'>
                    ${createUnorderedList(array)}
            </div>
        </div>
        `
    )
}

// test above function 
let test = createCard(sampleArray, {classes:'', dataset:78979}) 
document.body.appendChild(test); 