window.onload = () => {
  const menu = document.getElementById("menu");
  const main = document.getElementById("main");
  const sideMenu = document.getElementById("sideMenu");
  const searchIcon = document.getElementById("search-icon");
  const headerInput = document.getElementById("header-input");
  menu.addEventListener("click", (e) => {
    main.classList.toggle("active");
    sideMenu.classList.toggle("showMenu");
  });
  searchIcon.addEventListener("click", (e) => {
    headerInput.classList.toggle("active");
  });
};
