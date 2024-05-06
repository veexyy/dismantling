// Фиксированное меню
const navBar = document.querySelector(".header__bottom");
const menuLink = document.querySelector(".nav__link--menu");
const submenuList = document.querySelector(".submenu__list");
const fixedMenuBtn = document.querySelector(".fixed-menu__btn");
const fixedMenuInner = document.querySelector(".fixed-menu__inner");
const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".header-menu");
const body = document.querySelector(".body");

const navPos = navBar.offsetTop;

window.addEventListener("scroll", function () {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPos >= navPos) {
    navBar.classList.add("header__bottom--fixed");
  } else {
    navBar.classList.remove("header__bottom--fixed");
  }
});

// Открытие меню в бургер меню
menuLink.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
  }
  submenuList.classList.toggle("submenu__list--active");
});

// Фиксированная меню справа на странице, вкл/вык
fixedMenuBtn.addEventListener("click", function () {
  fixedMenuBtn.classList.toggle("fixed-menu__btn--active");
  fixedMenuInner.classList.toggle("fixed-menu__inner--visible");
});

// Бургер меню
burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("burger-btn--active");
  headerMenu.classList.toggle("header-menu--visible");
  body.classList.toggle("body--hidden");
});

// Открытие меню в шапке
const headerMenuOverlay = document.querySelector(".header-menu__overlay");
headerMenuOverlay.addEventListener("click", function () {
  burgerBtn.classList.remove("burger-btn--active");
  const headerMenu = document.querySelector(".header-menu");
  headerMenu.classList.remove("header-menu--visible");
  const body = document.querySelector(".body");
  body.classList.remove("body--hidden");
});

//Валидация номера(начало)
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputs);
//Валидация номера(конец)

//Открытие вспывающих списков(начало)
const submenuBtn = document.querySelectorAll(".submenu__btn[data-dropdown]");
submenuBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("dropdown--active");
  });
});
//Открытие вспывающих списков(конец)

//Кастомный инпут с type='file'(начало)
let fileSelect = document.querySelectorAll("[data-label-file]");

fileSelect.forEach((item) => {
  let fileInput = item.querySelector('input[type="file"]');

  item.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.onchange = function () {
    let filename = fileInput.files[0].name;
    let selectName = item.querySelector(".file-select-button");
    selectName.innerText = filename;
  };
});
//Кастомный инпут с type='file'(Конец)
