"use strict";
/** Evoked on form submit, retrieves form input string
 * calls giphySearch passing input string
 */
function getSearchVal(e) {
  e.preventDefault();
  let formInput = $("input").val();
  console.log(formInput);
  giphySearch(formInput);
}
/** Generates and returns random number(0-50)
 *  used as an index of JSON data
 */
function randomNumberGenerator() {
  return Math.floor(Math.random() * 50);
}
/** Clears gif-container div of child divs */
function clearGifContainer() {
  $(".gif-container").empty();
}
/** Accepts form input data string and passes it into axios.get request
 * to the giphy api
 * Takes response object and select random index of search result to
 * append new gif to DOM
 */
async function giphySearch(formInput) {
  let randomNumber = randomNumberGenerator();
  let giphy = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${formInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );

  $(".gif-container").append(
    $("<img>").attr(
      "src",
      `${giphy.data.data[randomNumber].images.downsized_medium.url}`
    )
  );
}

$(".submit-search-btn").on("click", getSearchVal);
$(".clear-all-btn").on("click", clearGifContainer);
