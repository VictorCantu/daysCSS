window.onload = () => {
  const btn = document.getElementById("btn");
  const btn_re = document.getElementById("btn-re");
  const circle = document.getElementById("circle");
  const innerCircle = document.getElementById("innerCircle");
  const mail = document.getElementById("mail");
  const plane = document.getElementById("plane");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    circle.style.animation = "circle 1s ease forwards";
    innerCircle.style.animation = "innerCircle 1s ease forwards";
    mail.style.strokeDashoffset = 325;
    plane.style.strokeDashoffset = 0;
    mail.style.transition = "1s ease-in-out ";
    plane.style.transition = "1s ease-in-out 0.6s";
    plane.style.animation = "fly 2.5s ease forwards";
    btn.style.animation = "btn 1.5s ease forwards 1.7s";
    btn_re.style.display = "inline-block";
    btn_re.style.animation = "reset 2s ease-in-out forwards 1.8s";
  });
  btn_re.addEventListener("click", (e) => {
    e.preventDefault();
    circle.style.animation = "";
    innerCircle.style.animation = "";
    mail.style.strokeDashoffset = 0;
    plane.style.strokeDashoffset = 325;
    mail.style.transition = "";
    plane.style.transition = "";
    plane.style.animation = "";
    btn.style.animation = "";
    btn_re.style.display = "none";
    btn_re.style.animation = "";
  });
};
