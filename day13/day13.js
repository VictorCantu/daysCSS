window.onload = () => {
  const detail = document.getElementById("detail");
  const plus = document.getElementById("plus");
  const close = document.getElementById("close");

  plus.addEventListener("click", (e) => {
    // console.log("hola");
    detail.classList.add("active");
  });
  close.addEventListener("click", (e) => {
    detail.classList.remove("active");
  });
};
