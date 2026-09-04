const navbar = document.getElementById("navbar");
const navLinks = Array.from(document.querySelectorAll(".navbar__link"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setNavbarSize = () => {
  navbar.classList.toggle("navbar--compact", window.scrollY > 24);
};

const highlightNav = () => {
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;

  let activeId = sections[0].id;
  if (atBottom) {
    activeId = sections[sections.length - 1].id;
  } else {
    const probe = navbar.getBoundingClientRect().bottom;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= probe + 1) {
        activeId = section.id;
      }
    });
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }
    const top =
      target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

window.addEventListener("scroll", () => {
  setNavbarSize();
  highlightNav();
});

window.addEventListener("resize", highlightNav);
setNavbarSize();
highlightNav();

const carousel = document.getElementById("carousel");
const track = carousel.querySelector(".carousel__track");
const slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
let slideIndex = 0;

const goToSlide = (nextIndex) => {
  slideIndex = (nextIndex + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === slideIndex);
  });
};

carousel
  .querySelector(".carousel__arrow--prev")
  .addEventListener("click", () => goToSlide(slideIndex - 1));
carousel
  .querySelector(".carousel__arrow--next")
  .addEventListener("click", () => goToSlide(slideIndex + 1));

const openModal = (id) => {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  }
};

const closeModals = () => {
  document.querySelectorAll(".modal.is-open").forEach((modal) => {
    modal.classList.remove("is-open");
  });
  document.body.classList.remove("modal-open");
};

document.querySelectorAll("[data-modal-open]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.modalOpen));
});

document.querySelectorAll("[data-modal-close]").forEach((node) => {
  node.addEventListener("click", closeModals);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModals();
  }
});
