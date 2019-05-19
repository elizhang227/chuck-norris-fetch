"use strict"

const getMoreQuotesButton = document.getElementById('getMoreQuotes');
getMoreQuotesButton.addEventListener('click', function(e){
    e.preventDefault();
    updateChuckSays();
});

function updateChuckSays() {
    get('https://api.chucknorris.io/jokes/random?category=dev')
    .then((response) => {
        addItem(response);
    });
}

function addItem(item) {
    const chuckQuotes = document.getElementById('chuckQuotes');
    const theQuoteItem = document.createElement('li');
    theQuoteItem.textContent = item;
    chuckQuotes.append(theQuoteItem);
}
