const carousel = document.querySelector(".carousel")
const carouselItems = document.querySelectorAll(".carousel-item")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let currentIndex = 0

function showImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length
  showImage(currentIndex)
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length
  showImage(currentIndex)
}


