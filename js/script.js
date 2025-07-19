// Drop down logic for navbar

const toggles = document.querySelectorAll(".dropdown__toggle");

document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown__menu").forEach((menu) => {
    menu.classList.remove("show");
  });

  toggles.forEach((toggle) => {
    if (toggle.contains(e.target)) {
      const menu = toggle.nextElementSibling;
      menu.classList.toggle("show");
      e.preventDefault();
    }
  });
});

//Carousal effect logic for testomonial section

const cardsContainer = document.querySelector(".testomonial__cards");
const cards = document.querySelectorAll(".testomonial__card");
const cardCount = cards.length;

const visibleCards = 2;
let currentIndex = 0;

const cardStyle = getComputedStyle(cards[0]);
const cardWidth = cards[0].offsetWidth;
const gap = parseInt(cardStyle.marginRight) || 40;
const slideWidth = cardWidth + 40;

function slide() {
  currentIndex++;
  if (currentIndex > cardCount - visibleCards) {
    currentIndex = 0;
  }
  const translateX = -(slideWidth * currentIndex);
  cardsContainer.style.transform = `translateX(${translateX}px)`;
}

setInterval(slide, 3000);

const dotsContainer = document.querySelector(".carousel__dots");
const totalSlides = Math.ceil(cardCount / visibleCards);

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.setAttribute("data-index", i);
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".carousel__dots button");

function updateActiveDot(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function slide() {
  currentIndex++;
  if (currentIndex > cardCount - visibleCards) {
    currentIndex = 0;
  }
  const translateX = -(slideWidth * currentIndex);
  cardsContainer.style.transform = `translateX(${translateX}px)`;

  const dotIndex = Math.floor(currentIndex / visibleCards);
  updateActiveDot(dotIndex);
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    currentIndex = index * visibleCards;
    const translateX = -(slideWidth * currentIndex);
    cardsContainer.style.transform = `translateX(${translateX}px)`;
    updateActiveDot(index);
  });
});
