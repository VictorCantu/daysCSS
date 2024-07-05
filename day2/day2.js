window.onload = () => {
  const menu = document.getElementById("menu");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  menu.addEventListener("click", (e) => {
    line1.classList.remove("no-animation");
    line2.classList.remove("no-animation");
    line3.classList.remove("no-animation");
    menu.classList.toggle("active");
  });
};
