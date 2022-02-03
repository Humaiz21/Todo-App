/// TODO CRUD FUNCTIONS


var arrayOfQuotes = ["humaiz","hamza","ammar"];
var inputBar = document.getElementById('inputBar');
var quotesCont = document.getElementById('quotesCont');
var addBtn = document.getElementById('addBtn');


//read

// console.log(arrayOfQuotes);


//delete

function deleteQuote (index) {
    let newArr = [];

    for (let i = 0; i < arrayOfQuotes.length; i++) {
        if (i == index) {
            console.log("this is delete");
        }else{
            newArr.push(arrayOfQuotes[i]);
        }
        
    }

    arrayOfQuotes = newArr;
}

// deleteQuote(1)

// console.log(arrayOfQuotes);


function findIndex(quote){
    let result;

    for (let i = 0; i < arrayOfQuotes.length; i++) {
        if (arrayOfQuotes[i] == quote) {
            result = i;
        }
        
    }
    return result;
}




function updateQuote(index,value){
    arrayOfQuotes[index] = value;
}


function addQuotes (quote) {
    arrayOfQuotes.push(quote);
}

addBtn.addEventListener('click',  (e)=>{
    let quote = inputBar.value;
    addQuotes(quote);
    mapQuotes();
})

quotesCont.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        let index = e.target.getAttribute("index");
        deleteQuote(+index);
        mapQuotes();
    }
    if (e.target.classList.contains('upt-btn')) {
        let index = e.target.getAttribute("index");
        deleteQuote(+index);
        mapQuotes();
    }
    if (e.target.classList.contains('upd-btn')) {
        let index = e.target.getAttribute("index");
        updateQuote(+index);
        mapQuotes();
    }
})

mapQuotes();    


function mapQuotes(){

    quotesCont.innerHTML = "";
  for (let i = 0; i < arrayOfQuotes.length; i++) {
    quotesCont.innerHTML += `<div class="quote-style">` + arrayOfQuotes[i] + ` <button index="` + i + `" class="del-btn btn-style">X</button> <button class = "upd-btn">update</button></div>`;
}

}