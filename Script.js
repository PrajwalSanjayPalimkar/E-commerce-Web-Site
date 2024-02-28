const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
{/* <script> */}
    document.querySelector('#copyright-year').innerText = new Date().getFullYear();
{/* </script> */}
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});