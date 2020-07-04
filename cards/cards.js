// play around with making cards with ranges

const createFragment = () => {
    return document.createRange().createContextualFragment(
        `
        <>
        </>
        `
        )
}

const createUnorderedList = array => {
    let list = document.createRange().createContextualFragment('<ul></ul>')
    // outside.appendChild(list); 
    array.forEach(ele => {
        // add text in ele (assuming it's a string) to the li that's appended to the ul here: 
        let lI = document.createElement('li'); 
        lI.innerText = ele; 
        return list.appendChild(lI);
    })
    return list; 
}

let sampleArray = [1,2,3,4, '1']; 

const createCard = (array) => {
    return document.createRange().createContextualFragment(`
        <div class='card__container'>
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
let test = createCard(sampleArray) 
document.body.append(test); 