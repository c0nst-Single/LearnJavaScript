"use strict";
//

function imagesRund() {
  const img = document.querySelector(".img");
  const rundCount = Math.floor(Math.random() * 9);
  img.setAttribute("src", `images/img-practice/img${rundCount}.jpg`);
}
imagesRund();
const modalBtnRundom = document.querySelector(".modal__btn-random");
modalBtnRundom.addEventListener("click", imagesRund);

// логика модального окна >

function closeModal() {
  modal.classList.add("hidden"); // добовляем класс со свойством display: none
  overlay.classList.add("hidden"); // добовляем класс со свойством display: none
}
const btnModalOpen = document.querySelector(".btn"); // кнопка - Покозать модальное окно
const modal = document.querySelector(".modal"); // модальное окно
const modalClose = document.querySelectorAll(".modal__close"); // отдельная кнопка закрыть
const overlay = document.querySelector(".overlay"); // блок затемнения фона

const modalOpen = () => {
  modal.classList.remove("hidden"); // удаляем класс на котором свойство display: none для модального окна
  overlay.classList.remove("hidden"); // для блока затемнения фона
};
btnModalOpen.addEventListener("click", modalOpen);

modalClose.forEach((val) => {
  // класс ".modal__close" есть у двух элементов поэтому используем forEach для их перебора
  val.addEventListener("click", closeModal); // закрытие мод. окна по крестеку и кнопке
});

overlay.addEventListener("click", () => {
  // закрывает модальное окно и фон затемнения по клику на фон затемнения(делает тоже что и запись выше)
  closeModal();
});

document.addEventListener("keydown", function (e) {
  // также закрываем modal и overlay по нажатию на Esc
  if (e.key === "Escape") {
    closeModal();
  }
});

// рандомное ихоброжеине >
