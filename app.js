"use strict";
const GIPHY_BASE_URL = "http://api.giphy.com/v1/";
/** Evoked on form submit, retrieves form input string
 * calls giphySearch passing input string
 * TODO: separate out giphySearch()
 * 
 */
function getSearchVal(e) {
  e.preventDefault();
  let formInput = $("input").val();
  console.log(formInput);
  giphySearch(formInput);
}
/** Generates and returns random number(0-50)
 *  used as an index of JSON data
 * TODO: change max of 50 to max arr length
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
// check lecture notes
  let giphy = await axios.get( //giphyAPIresult or response
    `${GIPHY_BASE_URL}gifs/search?q=${formInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
// TODO: can set src to variable
  $(".gif-container").append(
    $("<img>").attr(
      "src",
      `${giphy.data.data[randomNumber].images.downsized_medium.url}`
    )
  );
}

$(".submit-search-btn").on("submit", getSearchVal);
$(".clear-all-btn").on("click", clearGifContainer);
