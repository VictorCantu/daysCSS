window.onload = () => {
  const container = document.getElementById("back-i");

  for (let i = 0; i < 50; i++) {
    let di = document.createElement("div");

    di.classList.add("line");

    di.style.width = 700 + "px";
    di.style.height = 4 + "px";

    container.appendChild(di);
  }
};
