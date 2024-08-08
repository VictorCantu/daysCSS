window.onload = () => {
  const dots = document.getElementsByTagName("span");

  for (let i = 0; i < 20; i++) {
    let t = (60 / (40 + 20 + i)) * 1000;
    dots[i].style.animation = `pop ${t}ms ease-in-out infinite`;
  }
};
