window.onload = () => {
  const bike = document.getElementById("bike");
  const heli = document.getElementById("heli");

  for (let i = 0; i < 10; i++) {
    let i = document.createElement("i");
    i.classList.add("dirt");

    let randomW = Math.random() * (12 - 6) + 6;

    i.style.width = randomW + "px";

    let randomTime = Math.random() * (2 - 1) + 1;
    i.style.animation = `dirt ${randomTime}s linear infinite`;
    bike.appendChild(i);
  }

  for (let i = 0; i < 12; i++) {
    let i = document.createElement("i");
    i.classList.add("air");

    let randomW = Math.random() * (30 - 10) + 10;

    i.style.width = randomW + "px";
    i.style.top = Math.random() * (180 - 20) + 20 + "px";

    let randomTime = Math.random() * (1 - 0.5) + 0.5;
    i.style.animation = `dirt ${randomTime}s linear infinite`;
    heli.appendChild(i);
  }
};
