const toggle = document.getElementById("toggle");
const navbar = document.querySelector(".dashboard-child-1");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};