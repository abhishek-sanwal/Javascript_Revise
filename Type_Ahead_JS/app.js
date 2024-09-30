"using strict";

const cities = new Array();

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(endpoint)
  .then((blob) => blob.json())
  .then((arr) => cities.push(...arr));

console.log("JS is running");

function findMatch(wordToMatch, cities) {
  return cities.filter((element) => {
    const regex = RegExp(wordToMatch, "gi");
    return element.city.match(regex) || element.state.match(regex);
  });
}

function displayMatch(match) {
  return `
    <p>
      ${match.city} , ${match.state}, ${match.population}
    </p>
    `;
}

function handleInput(e) {
  const suggestions = document.querySelector(".suggestions--hints");
  console.log("Inside function");
  const searchedData = this.value;
  console.log(searchedData, "Value");

  const match = findMatch(searchedData, cities).map((match) =>
    displayMatch(match)
  );
  console.log(match.slice(0, 10));
  suggestions.innerHTML = match.slice(10);
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search");
  searchBox.addEventListener("input", handleInput);
});
