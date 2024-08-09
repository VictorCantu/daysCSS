window.onload = () => {
  const m = document.getElementById("m");
  const p = document.getElementById("p");
  const num = document.getElementById("num");
  let n = 0;
  m.addEventListener("click", () => {
    n = parseInt(num.innerText);
    n--;
    num.innerText = n;
  });
  p.addEventListener("click", () => {
    n = parseInt(num.innerText);
    n++;
    num.innerText = n;
  });
};
