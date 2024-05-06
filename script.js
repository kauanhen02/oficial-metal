const carousel = document.querySelector(".carousel")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const totalImages = document.querySelectorAll(".carousel-item").length
let position = 0

nextBtn.addEventListener("click", () => {
  position -= carousel.offsetWidth / 3 // Move para a próxima imagem

  if (position <= -(carousel.offsetWidth * (totalImages - 3))) {
    // Se a próxima imagem for a última, volte para a primeira
    position = 0
  }

  carousel.style.transition = "transform 0.5s ease" // Adiciona transição suave
  carousel.style.transform = `translateX(${position}px)`
})

prevBtn.addEventListener("click", () => {
  position += carousel.offsetWidth / 3 // Move para a imagem anterior

  if (position > 0) {
    // Se estiver na primeira imagem e clicar para ir para trás, vá para a última
    position = -(carousel.offsetWidth * (totalImages - 3))
  }

  carousel.style.transition = "transform 0.5s ease" // Adiciona transição suave
  carousel.style.transform = `translateX(${position}px)`
})

// Adiciona um ouvinte de evento de transição para verificar quando a transição termina
carousel.addEventListener("transitionend", () => {
  if (
    position === 0 ||
    position <= -(carousel.offsetWidth * (totalImages - 3))
  ) {
    // Se a posição estiver na primeira ou última imagem, remova a transição
    carousel.style.transition = "none"
  }
})
