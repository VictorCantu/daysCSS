window.onload = () => {
  const petals = document.getElementsByTagName("span");
  const sakura = document.getElementById("sakura");
  let petalNumber = 1;
  let angle = 360 / 16;
  let petalAngle;

  Array.from(petals).map((e) => {
    petalAngle = petalNumber * angle;
    e.style.transform = `rotate(${petalAngle}deg) translateY(0)`;
    petalNumber++;
  });
};
