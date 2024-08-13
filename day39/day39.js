window.onload = () => {
  const menuIcon = document.getElementById("menu-icon");
  const lineTop = document.getElementById("line-top");
  const lineBot = document.getElementById("line-bot");
  const menu = document.getElementById("menu");

  menuIcon.addEventListener("click", () => {
    lineTop.classList.remove("paused");
    lineBot.classList.remove("paused");
    lineTop.classList.toggle("active");
    lineBot.classList.toggle("active");
    menu.classList.toggle("active");
  });
  menu.addEventListener("click", () => {
    lineTop.classList.remove("paused");
    lineBot.classList.remove("paused");
    lineTop.classList.toggle("active");
    lineBot.classList.toggle("active");
    menu.classList.toggle("active");
  });
};
