// script.js
let toggleBtn = document.querySelector(".toggle-btn");
let lowerMenu = document.querySelector(".menu-lower");
let toggleButtonIcon = document.querySelector(".toggle-btn .button");

toggleBtn.addEventListener("click", () => {
  console.log("working");

  // Toggle the 'active' class
  if (!lowerMenu.classList.contains("active")) {
    lowerMenu.classList.add("active");
    toggleButtonIcon.src = "images/xmarktwo.png"; // Change to cross icon when active
    console.log("class added, menu opened");
  } else {
    lowerMenu.classList.remove("active");
    toggleButtonIcon.src = "images/menuOne.png"; // Change back to menu icon when closed
    console.log("class removed, menu closed");
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";
  return direction;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Trigger GSAP animation for the current slide's text
  gsap.from(slides[slideIndex - 1].querySelector(".slide-text"), {
    y: 150,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
}
