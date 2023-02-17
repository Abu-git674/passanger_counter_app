
let countEl = document.getElementById('count-el') // pass in arguments
let saveEl = document.getElementById('save-el')
let count = 0;


function increment(){

    count ++
    countEl.textContent = count;
}

function save(){

    let countStr = count + " - "
    saveEl.textContent += countStr; 
    
    countEl.textContent = 0
    count = 0

    
}



// innerText alternatives textContent