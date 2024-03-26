// Click handler for search button
const captureSearchValue = () => {
  const searchQuery = document.getElementById("search-bar");
  return searchQuery.value;
};

// Filter books based on search input
const filterBooks = (query, books) => {
  const booksOfObj = [];
  const booksFound = flattenObjectValuesIntoArray(books).filter((book) =>
    book.includes(query)
  );
  console.log(booksFound.length);
  booksFound.forEach((book) => {
    const [title, author, ...tags] = book;
    booksOfObj.push({ title, author, tags });
  });
  console.log(booksOfObj.length);
  return booksOfObj;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (filteredBooks) => {
  const booksListContainer = document.getElementById("bookList");
  const html = filteredBooks.map((book) => structureBookAsHtml(book));
  return html;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
  const query = captureSearchValue();
  const filteredBooks = filterBooks(query, books);
  const formattedBooks = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(formattedBooks);
};

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler();
});
