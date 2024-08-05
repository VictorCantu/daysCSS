window.onload = () => {
  const btn = document.getElementById("btn");
  const txt = document.getElementById("txt");
  const circle = document.getElementById("circle");
  const ima = document.getElementById("ima");

  let i = 0;
  btn.onclick = (e) => {
    e.preventDefault();
    if (i == 0) {
      btn.style.animation =
        "button 0.6s ease-out forwards, back 0.5s ease-out forwards 1.4s";
      txt.style.animation = "txt 0.3s ease-out forwards";
      circle.style.animation = "circle 2s ease-out forwards 0.5s";
      ima.style.animation = "icon 1s ease-out forwards 1.4s";
      i++;
    } else {
      btn.style.animation = "";
      txt.style.animation = "";
      circle.style.animation = "";
      ima.style.animation = "";
      i--;
    }
  };
};
