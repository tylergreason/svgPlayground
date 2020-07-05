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

let sampleArray = [1,2,3,4, '1']; 

const createCard = (array) => {
    return document.createRange().createContextualFragment(`
        <div class='card__container'>
            <div class='card--left'>
            </div>
            <div class='card--info__container card--right'>
                <li>this is a list item</li>
                    ${createUnorderedList(array)}
            </div>
        </div>
        `
    )
}

// test above function 
let test = createCard(sampleArray) 
document.body.appendChild(test); 