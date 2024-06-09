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
  document.getElementById("myModal").style.display = "flex";
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
  alertCv.style.display = "flex";
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

const portfolioItems = [
  {
    title: "Portofolio 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, vel!",
    imgSrc: "dist/images/portofolio.png",
    githubLink: "https://github.com/ziii19",
    aosAnimation: "fade-left",
  },
  {
    title: "Portofolio 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, vel!",
    imgSrc: "dist/images/portofolio.png",
    githubLink: "https://github.com/ziii19",
    aosAnimation: "fade-right",
  },
  {
    title: "Portofolio 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, vel!",
    imgSrc: "dist/images/portofolio.png",
    githubLink: "https://github.com/ziii19",
    aosAnimation: "fade-left",
  },
  {
    title: "Portofolio 4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, vel!",
    imgSrc: "dist/images/portofolio.png",
    githubLink: "https://github.com/ziii19",
    aosAnimation: "fade-right",
  },
];

const portfolioContainer = document.getElementById("portfolio-container");

portfolioItems.forEach((item) => {
  const portfolioItem = document.createElement("div");
  portfolioItem.classList.add("w-full", "px-4", "mb-5", "md:w-1/2", "lg:w-1/3");
  portfolioItem.setAttribute("data-aos", item.aosAnimation);
  portfolioItem.setAttribute("data-aos-duration", "500");
  portfolioItem.setAttribute("data-aos-easing", "ease-in-out");

  portfolioItem.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary overflow-hidden mb-5">
      <img src="${item.imgSrc}" alt="portofolio" class="w-full" />
      <div class="py-4 px-6">
        <h3 class="font-semibold text-xl">${item.title}</h3>
        <p class="mt-2 text-sm">${item.description}</p>
        <div class="flex flex-wrap mt-3">
          <div class="w-1/2">
            <a href="${item.githubLink}" target="_blank">
              <button class="px-2 py-1 bg-primary border-2 border-dark text-xs rounded-full hover:bg-teal-300 hover:shadow-md hover:shadow-primary">
                Source Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  portfolioContainer.appendChild(portfolioItem);
});
