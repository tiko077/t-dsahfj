const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});


// Функция для отслеживания появления второго элемента на экране
window.addEventListener('scroll', function() {
  const firstElement = document.querySelector('.first-element');
  const secondElement = document.querySelector('.homm');
  
  // Получаем позицию второго элемента относительно окна
  const secondElementPosition = secondElement.getBoundingClientRect().top;
  
  // Если второй элемент появился на экране, скрываем первый
  if (secondElementPosition < window.innerHeight && secondElementPosition >= 0) {
    firstElement.style.opacity = 0; // Прячем первый элемент
    secondElement.style.opacity = 1; // Показываем второй элемент
  } else {
    firstElement.style.opacity = 1; // Показываем первый элемент, если второй ещё не на экране
    secondElement.style.opacity = 0; // Скрываем второй элемент
  }
});