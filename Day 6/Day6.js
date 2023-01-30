document.addEventListener("DOMContentLoaded", function(){
    // Get references to the form and search results section
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");
  
    // Listen for form submissions
    searchForm.addEventListener("submit", (event) => {
        // Prevent the form from refreshing the page
        event.preventDefault();
  
        // Get the value of the search input
        const searchTerm = searchForm.searchInput.value;
  
        // Use the search term to make an API call to Open Library
        fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
            // Clear the previous search results
            searchResults.innerHTML = "";
  
            // Loop through the data and create elements to display the books
            data.docs.forEach((book) => {
              const bookContainer = document.createElement("div");
              bookContainer.classList.add("book");
              bookContainer.innerHTML = `<h2>${book.title}</h2>
                                        <p>By ${book.author_name.join(", ")}</p>`;
  
              // Add a click event to the book element to show more details
              bookContainer.addEventListener("click", () => showBookDetail(book));
  
              searchResults.appendChild(bookContainer);
            });
          });
      });
  
    // Function to display more details of a selected book
    function showBookDetail(book) {
      const bookDetail = document.getElementById("book-detail");
      bookDetail.innerHTML = `<h2 class="title">${book.title}</h2>
                             <p>By ${book.author_name.join(", ")}</p>
                             <p>Published in ${book.first_publish_year}</p>
                             <p>${book.notes}</p>`;
    }
  });
  