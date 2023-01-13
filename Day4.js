const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("new-quote");

button.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = data.content;
      quoteAuthor.innerText = "~" + data.author;
    })
    .catch(error => console.log(error));
}

// call the function initially to load a quote on page load
getQuote();
