"use strict";

function getSearchVal(e) {
  e.preventDefault();
  let formInput = $("input").val();
  console.log(formInput);
  giphySearch(formInput);
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 50);
}

async function giphySearch(formInput) {
  // put formInput into ajax .get() request
  // returns JS object
  // access payload with .data and update DOM

  let giphy = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${formInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  console.log("giphy: ", giphy);

  console.log("giphy.data: ", giphy.data.data[0].url);

  $(".gif-container").append($("<img>").attr("src", `${giphy.data.data[0].url}`));

}

$(".submit-search-btn").on("click", getSearchVal);

console.log("Let's get this party started!");
