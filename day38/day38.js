window.onload = () => {
  const big = document.getElementById("big");
  const small = document.getElementById("small");
  const container = document.getElementById("container");

  container.addEventListener("click", () => {
    big.classList.toggle("active");
    small.classList.toggle("active");
  });
};
