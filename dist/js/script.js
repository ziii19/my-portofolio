/** @format */

// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Typed Js

const typed = new Typed(".multiple-text", {
  strings: ["Student", "Mobile Apps Developer", "Front End Web"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Anonymus Button Confirm
const link = "https://ngl.link/_ziii081";
const wa = "https://wa.me/6283867246731?text=Assalamu'alaikum";

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function chatWa() {
  window.open(wa, "_blank");
}

function confirmAction() {
  window.open(link, "_blank");
}

// Alert Cv
const alertCv = document.getElementById("alertCv");
const buttonCv = document.getElementById("buttonCv");
const closeBtn = document.getElementById("closeAlert");

buttonCv.addEventListener("click", function () {
  alertCv.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  alertCv.style.display = "none";
});

// Close when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == alertCv) {
    alertCv.style.display = "none";
  }
};
