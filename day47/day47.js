window.onload = () => {
  const spa = document.getElementsByTagName("span");
  const arr = Array.from(spa);
  arr.forEach((i) => {
    i.addEventListener("click", () => {
      i.classList.toggle("active");
    });
  });
};
