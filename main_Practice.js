"use strict";
//
// modal__window-121-122 start
function modWin() {
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
}
//modWin();
// modal__window-121-122 end

// dialog 123 start

const dialog = document.querySelector(".dialog"); // тег dialog
const openModal = document.querySelector(".open"); // кнопка для открытия тега dialog
const closeDialog = document.querySelector(".close__dialog"); // кнопка для закрытия тега dialog

openModal.addEventListener("click", function () {
  dialog.showModal(); // включает тег dialog
});

closeDialog.addEventListener("click", () => {
  dialog.close(); // выключает тег dialog
});

// dialog 123 end

// burger menu 124 start

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const closed = document.querySelector(".burger__close");
const overlay = document.querySelector(".burger__overlay");

burger.addEventListener("click", function () {
  nav.classList.add("add");
  overlay.classList.remove("burger__hidden");
});

closed.addEventListener("click", function () {
  nav.classList.remove("add");
  overlay.classList.add("burger__hidden");
});
overlay.addEventListener("click", function () {
  nav.classList.remove("add");
  overlay.classList.add("burger__hidden");
});

// burger menu end 124
