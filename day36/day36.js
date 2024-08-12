window.onload = () => {
  const dash = document.getElementById("dash");
  const comm = document.getElementById("comm");
  const noti = document.getElementById("noti");
  const sett = document.getElementById("sett");

  const dashboard = document.getElementById("dashboard");
  const comments = document.getElementById("comments");
  const notifications = document.getElementById("notifications");
  const settings = document.getElementById("settings");

  dash.addEventListener("click", () => {
    comments.classList.remove("active");
    notifications.classList.remove("active");
    settings.classList.remove("active");
    dashboard.classList.add("active");

    comm.classList.remove("active");
    noti.classList.remove("active");
    sett.classList.remove("active");
    dash.classList.add("active");
  });
  comm.addEventListener("click", () => {
    dashboard.classList.remove("active");
    notifications.classList.remove("active");
    settings.classList.remove("active");
    comments.classList.add("active");

    dash.classList.remove("active");
    noti.classList.remove("active");
    sett.classList.remove("active");
    comm.classList.add("active");
  });
  noti.addEventListener("click", () => {
    comments.classList.remove("active");
    dashboard.classList.remove("active");
    settings.classList.remove("active");
    notifications.classList.add("active");

    dash.classList.remove("active");
    comm.classList.remove("active");
    sett.classList.remove("active");
    noti.classList.add("active");
  });
  sett.addEventListener("click", () => {
    comments.classList.remove("active");
    notifications.classList.remove("active");
    dashboard.classList.remove("active");
    settings.classList.add("active");

    dash.classList.remove("active");
    noti.classList.remove("active");
    comm.classList.remove("active");
    sett.classList.add("active");
  });
};
