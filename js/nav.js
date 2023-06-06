/* search bar*/

const searchContainer = document.querySelector('.search-container');
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('expanded');
  searchBar.focus();
});

