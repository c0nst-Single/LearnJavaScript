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
function slider1() {
  const slider = document.querySelector(".slider-132-133 .slider");
  const prevButon = document.querySelector(".slider-132-133 .prev-btn");
  const nextButon = document.querySelector(".slider-132-133 .next-btn");
  const slides = [...slider.querySelectorAll("img")]; // получем массив из всех изоброжений находящихся в slider
  const slideCount = slides.length;

  let slideIndex = 0; // индекс текущего слайда

  // функция для обновления слайдера >
  const updateSlider = () => {
    // перибираем всле слайды и отображаем только текущий
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "block" : "none";
    });
  };

  // функция для показа следующего слайда
  const showNextSlide = () => {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSliderDots(); // обновляем слайдер с точками
  };

  // функция для показа предидущего слайда
  const showPrevSlide = () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSliderDots(); // обновляем слайдер с точками
  };

  updateSlider();

  // доббовляем оброботчики событий для кнопок
  nextButon.addEventListener("click", showNextSlide);
  prevButon.addEventListener("click", showPrevSlide);

  // обработка событий нажатия клавиш для слайдера
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showPrevSlide();
    } else if (event.key === "ArrowRight") {
      showNextSlide();
    }
  });

  // создаем точки для слайдера
  const slidrDots = document.querySelector(".slider-132-133 .slider-dots");

  slides.forEach(() => {
    const dot = document.createElement("span"); // создаем элементы для точек
    dot.classList.add("slider-dot"); // даем элементам классы с свойствами в css
    slidrDots.append(dot); // вставляем точки в div с кномками
  });

  const dots = [...slidrDots.querySelectorAll(".slider-dot")];

  // функция для обновления слайдера с учотом точек
  const updateSliderDots = () => {
    updateSlider(); // обновляем слайдер

    // Подвсветка текущей точки
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideIndex);
    });
  };

  // Добовляем оброботчики событий для точек слайдера
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slideIndex = index;
      updateSliderDots(); // обновляем слайдер
    });
  });
}

// slider-132-133 end

// rating-134 start

function starRating() {
  const stars = document.querySelectorAll(".rating-134 i");
  const starNumberRating = document.querySelector(
    ".rating-134 .spanNumberRating"
  );

  // реребираем все звезды
  stars.forEach((item, index) => {
    // на каждую звезду вешаем оброботчик событий
    item.addEventListener("click", () => {
      starNumberRating.textContent = index + 1; // вставляем цифру рейтинга выьранной звезды
      // перебираем звезды после клика
      stars.forEach((item, index2) => {
        // если выбранная звезда по индексу больше чем была до этого то добовляем звезде класс активности... ,
        // если выбранная звезда по индексу меньше чем была до этого то убираем класс активности тем звездам которые по индексу больше
        index >= index2
          ? item.classList.add("active")
          : item.classList.remove("active");
      });
    });
  });
}

// rating-134 end

// timer-135 start

function timer135() {
  const elements = {
    sale: document.querySelector(".timer-135 .sale"),
    date: document.querySelector(".timer-135 .date"),
    spans: document.querySelectorAll(".timer-135 span"),
    paragraphs: document.querySelectorAll(".timer-135 p"),
  };

  document.querySelector(".timer-135 .close").addEventListener("click", () => {
    elements.sale.classList.toggle("hidden");
  });

  const endDate = new Date(); // в переменную устанавливаем время
  // миняем установленное время на наше
  endDate.setHours(endDate.getHours() + 0); // миняем часы в нашей переменно со вроменем
  endDate.setMinutes(endDate.getMinutes() + 1); // миняем минуты в нашей переменно со вроменем

  // основная функция
  const updateCountDown = () => {
    const now = new Date();
    const distance = endDate - now; // получаем миллисекунды
    // дальше получаем из миллисекунд - часы, минуты, секунды используя деструктуризацию
    const { hours, minutes, seconds } = {
      hours: String(Math.floor(distance / (1000 * 60 * 60))).padStart(2, "0"),
      // используем String чтобы можно было использовать padStart для дополнения времени нулем если одна цифра
      minutes: String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0"),
      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      ),
    };

    elements.date.textContent = `${hours} ч ${minutes} мин ${seconds} с`;

    if (distance < 0) {
      clearInterval(intervalValid);
      elements.sale.classList.toggle("hidden");
      elements.spans.forEach((el) => el.classList.toggle("hidden"));
      elements.paragraphs.forEach(
        (item) => (item.style.textDecoration = "none")
      );
    }
  };

  updateCountDown();
  const intervalValid = setInterval(updateCountDown, 1000); // обновляем нашу функцию каждую секунду
}

// timer-135 end

// accordion-136 start

function accordion136() {
  // получаем блоки в которых заголовок и текст
  const accordionItems = document.querySelectorAll(".accordion-item");

  // перебираем каждый заголовок
  accordionItems.forEach((item) => {
    // в текущем блоке получаем - заголовок, текст и знак +
    const heading = item.querySelector(".accordion__block");
    const content = item.querySelector(".accordion__content");
    const plus = item.querySelector(".accordion-136 .plus");
    // на заголовок вешаем оброботчмк по клику и через добовление/удаление класса раскрываем/скрываем текст и миняем + на х
    heading.addEventListener("click", () => {
      content.classList.toggle("active");
      heading.classList.toggle("active");
      plus.classList.toggle("rotate");
    });
  });
}
// accordion136();
// accordion-136 end

// themes-137 start
function themes137() {
  const btn = document.querySelector(".themes-137 .btn");

  btn.addEventListener("click", () => {
    const body = document.querySelector(".themes-137");
    body.classList.toggle("dark-mode");
  });
}

// themes-137 end

// local Storage-138 star
// local Storage - хранилище данных
// local Storage - сохроняет данные даже после перезагрузки страницы
// Session Storage - данные обнуляются после перезагрузки
function locStor1() {
  localStorage.setItem("username", "Underson"); // добовляет (ключ, занчение) в хранилище
  // localStorage.clear(); // очищает хранилище
  console.log(localStorage.getItem("username")); // получаем значение по ключу
  //console.log(localStorage.getItem("noRial")); // при указании ключа которого несуществует вернут null

  const myName = localStorage.getItem("username"); // сохроняем значение по ключу в переменную

  localStorage.removeItem("username"); // удачение элемента по ключу
}

function locStor2() {
  const user = {
    name: "Underson",
    email: "undermail.com",
    color: "red",
  };

  localStorage.setItem("user", JSON.stringify(user)); // передаем обьект(JSON.stringify для перевода обьекта в строку)

  let sevaUser = JSON.parse(localStorage.getItem("user"));
  console.log(sevaUser); // JSON.parse превращаем обратно в обьект
}
//locStor2();
// localStorage.clear();

function locStor3() {
  const form = document.getElementById("form");
  const userInput = document.querySelector("#user");

  const save = localStorage.getItem("username");

  if (save) {
    userInput.value = save;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("username", userInput.value);
    userInput.value = "";
  });
}
// locStor3();
// практика 137 + 138
// фунеция для сохранения выбранной темыпосле обновления
function locStor4() {
  const btn = document.querySelector(".themes-137 .btn");
  const body = document.querySelector(".themes-137");
  const save = localStorage.getItem("theme");

  if (save) body.classList.add(save);

  btn.addEventListener("click", () => {
    const a1 = body.classList.contains("dark-mode")
      ? "light-theme"
      : "dark-mode";

    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", a1);
  });
}

// Local Storage-138 end

// audioInit-139 start

function audioInit139() {
  const userInput = document.querySelector(".audioInit-139 .input");
  const btn = document.querySelector(".audioInit-139 .send");
  const audioTrue = new Audio("attack.mp3"); // кладем аудио фаил в переменную
  const audioFalse = new Audio("age_advance.mp3");

  // функция - при нажитии кнопки Отправить если в инпут > 3 символоф то играет 1 мелодияелси мень 2 мелодия
  btn.addEventListener("click", () => {
    if (userInput.value.length > 3) {
      audioTrue.play();
      userInput.value = "";
    } else {
      audioFalse.play();
    }
  });
}

// audioInit139()

// audioInit-139 end

// comments-140-141 start

const stars = document.querySelectorAll(".comments-140 i");
const spanNumberRating = document.querySelector(
  ".comments-140 .spanNumberRating"
);

const btnCommentAdd = document.querySelector(".comments-140 .add-comment");
const form = document.querySelector(".comments-140 .form");
const btnCloseForm = document.querySelector(".comments-140 .close");
const btnSendForm = document.querySelector(".comments-140 .send");
const formInputName = document.querySelector(".comments-140 .form__input-name");
const formInputLastName = document.querySelector(
  ".comments-140 .form__input-surname"
);
const wrapper = document.querySelector(".comments-140 .wrapper");
const textArea = document.querySelector(".comments-140 .form__textarea");
const commentUser = document.querySelector(
  ".comments-140 .block__comment-user"
);

stars.forEach((item, index) => {
  item.addEventListener("click", () => {
    spanNumberRating.textContent = index + 1;
    stars.forEach((item, index2) => {
      index >= index2
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  });
});

function addCommentHandler() {
  form.classList.toggle("hidden");
  btnCommentAdd.classList.toggle("hidden");
}

btnCommentAdd.addEventListener("click", () => {
  addCommentHandler();
});

btnCloseForm.addEventListener("click", () => {
  addCommentHandler();
});

btnSendForm.addEventListener("click", () => {
  if (formInputName.value.length >= 3 && formInputLastName.value.length >= 4) {
    const ratingCpmment = +spanNumberRating.textContent;
    console.log(ratingCpmment);

    const arrStrt = [];

    for (let i = 0; i < ratingCpmment; i++) {
      const a1 = document.createElement("span");
      a1.textContent = "★";
      arrStrt.push(a1);
    }
    console.log(arrStrt);
    htmlContainer(arrStrt);
    textArea.value = formInputName.value = formInputLastName.value = ""; // очищаем поля
    addCommentHandler();
    showHiddenComment();
  } else {
    alert("Введите корректные данные");
  }
});

function htmlContainer(arr) {
  const date = new Date().toLocaleString("default", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  wrapper.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="block">
                <h1 class="block__h1">${formInputName.value} ${
      formInputLastName.value
    }</h1>
                <p class="block__p">Оценка:${spanNumberRating.textContent}${arr
      .map((el) => `<span class="spanstar">${el.textContent}</span>`)
      .join("")}</p>
                <p class="block__comment">Коментарии: ${
                  textArea.value === "" ? "❌" : "✅"
                }</p>
                <p class="block__comment-user">
                ${textArea.value === "" ? "Нет комментариев" : textArea.value}
                </p> 
                <div class="block__date">${date}</div>
            </div>

    `
  );
}

// функция скрытия комментариев

let buttonsAdded = false;
let hideState = false;

function showHiddenComment() {
  const div = document.querySelectorAll(".comments-140 .block");
  console.log(div);

  const arrayDiv = [...div];

  if (div.length > 2 && !buttonsAdded) {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="buttons-block">
        <button class="btn1">Показать еще</button>
        <button class="btn2">Скрыть</button>
      </div>

      `
    );

    buttonsAdded = true;

    const showMoreBtn = document.querySelector(".comments-140 .btn1");

    showMoreBtn.addEventListener("click", () => {
      arrayDiv.forEach((el) => {
        el.classList.remove("hidden");
      });
      showMoreBtn.style.display = "none";
      hideState = false;
    });

    const hideBtn = document.querySelector(".comments-140 .btn2");
    hideBtn.addEventListener("click", function () {
      if (!hideState) {
        arrayDiv.slice(1).forEach((el) => {
          el.classList.add("hidden");
        });
        hideState = true;
        showMoreBtn.style.display = "inline-block";
      }
    });
  }

  if (div.length > 2) {
    arrayDiv.forEach((el, index) => {
      if (index > 1) {
        el.classList.add("hidden");
      }
    });
  }
}

// comments-140-141 end

// (... > ООП)
