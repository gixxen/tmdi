//// LIGHT / DARK MODE
const themeMap = {
  dark: "light",
  light: "dark"
};

const theme = localStorage.getItem('theme') ||
  (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
  var themeText = document.querySelector('.theme');
  if (bodyClass.contains('dark')) {
    themeText.innerHTML = "Light Mode";
  } else {
    themeText.innerHTML = "Dark Mode";
  }
}

document.getElementById('themeButton').onclick = toggleTheme;


//// NAV LOGO
var logo = document.querySelector('.logoPNG')
var nav = document.querySelector('.navbar')

nav.addEventListener('mouseenter', function () {

  logo.classList.add('visible');
})
nav.addEventListener('mouseleave', function () {

  logo.classList.remove('visible');
})

//// SEARCH BAR EXPAND & CLOSE WHEN CLICK OUT OF FOCUS
var input, filter, ul, li, a, i;
input = document.querySelector(".search");
filter = input.value.toUpperCase();
ul = document.querySelector(".search-options");
li = ul.getElementsByTagName("li");

var searchIcon = document.querySelector('.search-toggle');
var searchInput = document.querySelector('#search');
var searchOptions = document.querySelector('.search-options');

searchIcon.addEventListener('click', function () {
  
  searchInput.classList.toggle('search-input-open');
  searchOptions.classList.toggle('search-open');

  // Detect all clicks on the document
  document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".top-menu")) return;

    // If user clicks outside the element, remove class
    searchInput.classList.remove("search-input-open");
    searchOptions.classList.remove('search-open');
    searchInput.value = "";
    
    // RESET ALL STYLES OF FILTERED LIST
    var resets = document.querySelectorAll('.search-options li a');
    for (const reset of resets) {
      reset.style.display = "none";
    }


  });
  input = document.querySelector(".search");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".search-options");
  li = ul.getElementsByTagName("li");
});

//// SEARCH FILTER  
function search() {
  var input, filter, a, i;
  input = document.querySelector(".search");
  filter = input.value.toUpperCase();
  div = document.querySelector(".search-options");;
  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
    } else {
      a[i].style.display = "";
    }
  }
}