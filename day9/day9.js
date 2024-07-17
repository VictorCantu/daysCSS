window.onload = () => {
  const container = document.getElementById("container");
  for (let i = 0; i < 30; i++) {
    let gota = document.createElement("div");
    gota.classList.add("gota");
    gota.style.left = Math.random() * (390 - 20) - 20 + "px";
    gota.style.opacity = Math.random();
    let randomTime = Math.random() * (2 - 1) + 1;
    let randomTime2 = Math.random() * (2 - 1) + 1;
    gota.style.animation = `drop ${randomTime}s linear ${randomTime2}s infinite`;
    container.appendChild(gota);
  }
};
