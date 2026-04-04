const v = "http://127.0.0.1:5500/";

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("exit");

  void document.body.offsetHeight;

  document.body.classList.add("enter");
});

function go(url) {
  document.body.classList.remove("enter");

  document.body.classList.add("exit");

  const target = url === "home" ? v : v + "pages/" + url;

  setTimeout(() => {
    window.location.href = target;
  }, 600); 
}
