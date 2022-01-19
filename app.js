"use strict";



function getSearchVal(e) {
    e.preventDefault();
    let formInput = $("input").val();
    console.log(formInput);
    
}

function giphySearch(formInput) {
    // put formInput into ajax .get() request
    // returns JS object
    // access payload with .data and update DOM
}

$(".submit-search-btn").on("click", getSearchVal);

console.log("Let's get this party started!");