let u = 1;
let d = 0;
let c = 0;
let m = 0;

let isCounting;
const stopCounting = () => {
  clearInterval(isCounting);
  isCounting = null;
};

const startCounting = () => {
  isCounting = setInterval(() => {
    if (u == 10) {
      u = 0;
      d++;
      if (d == 10) {
        d = 0;
        c++;
        if (c == 10) {
          c = 0;
          m++;
          if (m == 10) {
            m = 0;
          }
        }
      }
    }
    uni.innerText = u;
    dec.innerText = d;
    cen.innerText = c;
    mil.innerText = m;
    u++;
  }, 1000);
};

window.onload = () => {
  const icons = document.getElementById("icons");

  const play = document.getElementById("play");
  const pause = document.getElementById("pause");

  const mil = document.getElementById("mil");
  const cen = document.getElementById("cen");
  const dec = document.getElementById("dec");
  const uni = document.getElementById("uni");

  icons.addEventListener("click", () => {
    play.classList.toggle("hide");
    pause.classList.toggle("hide");
    if (!isCounting) {
      startCounting();
    } else {
      stopCounting();
    }
  });
};
