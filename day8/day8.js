window.onload = () => {
  const ball = document.getElementById("ball");
  const container = document.getElementById("container");

  ball.addEventListener("click", (e) => {
    for (let i = 0; i < 30; i++) {
      let particles = document.createElement("i");
      particles.classList.add("particles");

      let randomX = (Math.random() - 0.4) * container.clientWidth;
      let randomY = (Math.random() - 0.4) * container.clientHeight;

      particles.style.setProperty("--x", randomX + "px");
      particles.style.setProperty("--y", randomY + "px");

      let randomSize = Math.random() * 60 + 10;

      particles.style.width = randomSize + "px";
      particles.style.height = randomSize + "px";

      let duration = Math.random() * 3 + 2;

      particles.style.animation = `animate ${duration}s ease forwards`;

      document.body.appendChild(particles);

      setTimeout(() => {
        particles.remove();
      }, 5000);
    }
  });
};
