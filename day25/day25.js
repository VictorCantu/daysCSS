window.onload = () => {
  const point = document.getElementById("point");
  const flip = document.getElementById("flip");

  const ac = document.getElementsByTagName("a");
  point.addEventListener("click", () => {
    flip.classList.add("active");
  });
  ac[0].addEventListener("click", () => {
    flip.classList.remove("active");
  });
  ac[1].addEventListener("click", () => {
    flip.classList.remove("active");
  });
};
