window.onload = () => {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  const card1 = document.getElementById("c1");
  const card2 = document.getElementById("c2");
  const card3 = document.getElementById("c3");

  btn1.addEventListener("click", () => {
    card1.classList.remove("active");
    card1.classList.add("inactive");
    card2.classList.remove("inactive");
    card2.classList.add("active");
    card1.style.zIndex = "0";
    card2.style.zIndex = "3";
  });
  btn2.addEventListener("click", () => {
    card2.classList.remove("active");
    card2.classList.add("inactive");
    card3.classList.remove("inactive");
    card3.classList.add("active");
    card2.style.zIndex = "0";
    card3.style.zIndex = "3";
  });
  btn3.addEventListener("click", () => {
    card3.classList.remove("active");
    card3.classList.add("inactive");
    card1.classList.remove("inactive");
    card1.classList.add("active");
    card3.style.zIndex = "0";
    card1.style.zIndex = "3";
  });
};
