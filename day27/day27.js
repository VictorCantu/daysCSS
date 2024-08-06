window.onload = () => {
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const item3 = document.getElementById("item3");
  const item4 = document.getElementById("item4");

  const ok1 = document.getElementById("ok1");
  const ok2 = document.getElementById("ok2");
  const ok3 = document.getElementById("ok3");
  const ok4 = document.getElementById("ok4");

  const c1 = document.getElementById("cir1");
  const c2 = document.getElementById("cir2");
  const c3 = document.getElementById("cir3");
  const c4 = document.getElementById("cir4");

  item1.addEventListener("click", () => {
    ok1.classList.toggle("checked");
    c1.classList.toggle("cir");
    item1.classList.toggle("opa");
  });
  item2.addEventListener("click", () => {
    ok2.classList.toggle("checked");
    c2.classList.toggle("cir");
    item2.classList.toggle("opa");
  });
  item3.addEventListener("click", () => {
    ok3.classList.toggle("checked");
    c3.classList.toggle("cir");
    item3.classList.toggle("opa");
  });
  item4.addEventListener("click", () => {
    ok4.classList.toggle("checked");
    c4.classList.toggle("cir");
    item4.classList.toggle("opa");
  });
};
