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

function BurgerMenu() {
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
}

// burger menu end 124

// burger menu2-125 start

function BurgerMenu2() {
  const hamburger = document.querySelector(".burger__menu2-125 .hamburger");
  const navMenu = document.querySelector(".burger__menu2-125 .nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // document.querySelectorAll(".burger__menu2-125 .nav-link").forEach((el) => {
    //   el.addEventListener("click", () => {
    //     hamburger.classList.remove("active");
    //     navMenu.classList.remove("active");
    //   });
    // });

    navMenu.addEventListener("click", function (event) {
      if (event.target.classList.contains("nav-link")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });
}
//BurgerMenu2();

// burger menu2-125 end

// smooth__scrolling-126 start
function smoothScroll() {
  const navLinksHead = document.querySelectorAll(
    ".smooth__scrolling-126 .nav-link"
  );
  function option1() {
    for (let link of navLinksHead) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const href = this.getAttribute("href");
        // console.log(href);
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }

  function option2() {
    navLinksHead.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
  //option2();

  function option3() {
    document
      .querySelector(".smooth__scrolling-126 .nav__ul")
      .addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.classList.contains("nav-link")) {
          document
            .querySelector(e.target.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        }
      });
  }

  document.getElementById("topRun").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  });
  option3();
}

// smooth__scrolling-126 end

// tab-127 start
function tab127() {
  const buttons = document.querySelector(".tabs-127 .buttons");
  const links = document.querySelectorAll(".tabs-127 .link");
  const block = document.querySelectorAll(".tabs-127 .block");

  buttons.addEventListener("click", function (event) {
    if (event.target === buttons) return;

    links.forEach((el) => {
      el.classList.remove("link-active");
    });

    block.forEach((item) => {
      item.classList.add("hidden");
    });

    if (event.target.classList.contains("link")) {
      event.target.classList.add("link-active");
    }

    const data = event.target.getAttribute("data-");
    console.log(data);

    document
      .querySelector(`.block-content--${data}`)
      .classList.remove("hidden");
  });
}
//tab127();

// teb-127 end

// inimation__header-128 start
function animationHeader() {
  const header = document.querySelector(".inimation__header-128 header");
  const links = document.querySelectorAll(".inimation__header-128 .link");
  const logo = document.querySelector(".inimation__header-128 .logo");

  function linksAnimation(e) {
    if (e.target.classList.contains("link")) {
      const targetLink = e.target; // присваеваем тикущий эдемент на который наводим

      links.forEach((el) => {
        el.style.opacity = this; // this - ссылаеца на сам обьект в оброботчике события
      });
      logo.style.opacity = this;
      header.classList.toggle("head");
      targetLink.style.opacity = 1;
    }
  }

  header.addEventListener("mouseover", linksAnimation.bind(0.4)); // в скобках через bind значение opacity(по контексту)
  header.addEventListener("mouseout", linksAnimation.bind(1));
}

// inimation__header-128 end

// interObsAPI-129 start
// intersection Obsorver API - позволяет оствлеживать пересечение определенны элементов в браузере
function interObsAPI1() {
  const d3 = document.querySelector(".d--3");

  function fn1(intries) {
    console.log(intries); // функция для переменной obs - выполняется в случае если экран поподает на указ. элемент obs.observe(d3) ...
    // на указ. процент видимости в обьекте настроек - options(threshold)
  }
  const options = {
    threshold: 0.2, // настройки для переменной obs...
    // ...20% - вызов функции когда указ. обьект появится в окне сайта на 20%
  };

  const obs = new IntersectionObserver(fn1, options); // принимает 2 параметр(функцию, обьект с настройками)
  obs.observe(d3); // предаем то что будим отслеживать(d3)
}

function interObsAPI2() {
  const d5 = document.querySelector(".d--5");
  const header = document.querySelector(".inimation__header-128 header");

  const headerObs = new IntersectionObserver(
    function (entries) {
      entries.forEach((el) => {
        //isIntersecting это элемент обьекта - entries со значение true если экран попадает на указ. процент видимости в обьекте настройках, ...
        // ... или значением false если экран не находится на укза. проценте видимости
        if (el.isIntersecting) {
          header.classList.add("k2");
        } else {
          header.classList.remove("k2");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  headerObs.observe(d5);
}
//interObsAPI2();

function interObsAPI0() {
  const block = document.querySelectorAll(".interObsAPI-129 .block");

  function fn2(entries, obs) {
    const sec = entries[0];
    if (sec.isIntersecting) {
      sec.target.classList.add("h4");
    }
    console.log(entries);
    obs.unobserve(sec.target); // unobserve - прекратить наблюдение(кекущий эдемент)
  }

  const sectionObs = new IntersectionObserver(fn2, {
    threshold: 0.2,
  });

  block.forEach((el) => {
    sectionObs.observe(el);
  });
}

// interObsAPI-129 end

// .lazy_images-130 start
function lazy_images() {
  const imgAll = document.querySelectorAll(".lazy_images-130 img[data-img]");

  console.log(imgAll); // получаем nodeList с щестью изоброженияеми

  const imgHandler = function (entries, obs) {
    // obs - для снятия наблюдателя - .observe
    const entry = entries[0];

    const img = entry.target;

    if (entry.isIntersecting) {
      img.src = img.dataset.img; // dataset - оброщаемся к атрибуту

      img.addEventListener("load", function () {
        // load - событие прогрузки указ. элемента(изоброжения)
        img.classList.remove("blur");
      });
    } else {
      img.classList.add("blur");
    }
    //obs.unobserve(entry.target);
  };

  const imgObserver = new IntersectionObserver(imgHandler, {
    root: null,
    threshold: 0.5,
  });

  imgAll.forEach((el) => imgObserver.observe(el));
}

// .lazy_images-130 end

// slider-132-133 start

const slider = document.querySelector(".slider-132 .slider");
const prevButon = document.querySelector(".slider-132 .prev-btn");
const nextButon = document.querySelector(".slider-132 .next-btn");
const slides = [...slider.querySelectorAll("img")]; // получем массив из всех изоброжений находящихся в slider
const slideCount = slides.length;

let slideIndex = 0; // индекс текущего слайда

// функция для обновления слайдера >
const updateSlider = () => {
  // перибираем всле слайды и отображаем только текущий
  slideCount.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
};

// функция для показа следующего слайда
const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSliderDots(); // обновляем слайдер с точками
};

// slider-132-133 end
