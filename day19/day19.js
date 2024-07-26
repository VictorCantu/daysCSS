window.onload = () => {
  const circle_1 = document.getElementById("circle-1");
  const circle_2 = document.getElementById("circle-2");
  const circle_3 = document.getElementById("circle-3");

  const slider = document.getElementById("slider");

  const point = document.getElementById("point");

  circle_1.addEventListener("click", () => {
    point.style.left = 4 + "px";
    slider.style.left = 0 + "px";
  });

  circle_2.addEventListener("click", () => {
    point.style.left = 60 + "px";
    slider.style.left = -400 + "px";
  });
  circle_3.addEventListener("click", () => {
    point.style.left = 116 + "px";
    slider.style.left = -800 + "px";
  });
};
