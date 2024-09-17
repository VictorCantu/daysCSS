window.onload = () => {
  const range = document.getElementById("range");
  const c = document.getElementById("center");
  let shadow = range.value * 0.01;

  range.addEventListener("input", (e) => {
    shadow = e.target.value * 0.01;
    c.style.boxShadow = `0px 0px 32px rgba(255,255,255, ${shadow})`;
  });
};
