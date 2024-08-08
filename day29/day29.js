window.onload = () => {
  const input = document.getElementById("input");
  const txt = document.getElementsByTagName("span");
  const searches = document.getElementById("searches");

  input.addEventListener("input", (e) => {
    if (e.target.value != "" && e.target.value.trim().length != 0) {
      searches.style.opacity = 1;
      txt[0].innerText = e.target.value;
      txt[1].innerText = e.target.value;
      txt[2].innerText = e.target.value;
    } else {
      searches.style.opacity = 0;
    }
  });
};
