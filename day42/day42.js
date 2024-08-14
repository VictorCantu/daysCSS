window.onload = () => {
  const container = document.getElementById("container");
  for (let i = 0; i < 250; i++) {
    let s = document.createElement("i");
    s.classList.add("star");
    let time = Math.random() * (5 - 2) + 2;
    let t = Math.random() * (400 - 5) + 5;
    let l = Math.random() * (400 - 5) + 5;
    s.style.top = t + "px";
    s.style.left = l + "px";
    s.style.animation = `shine ${time}s ease infinite both`;
    container.appendChild(s);
  }
};
