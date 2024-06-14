// слайдер
new Swiper(".swiper", {
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: ".portfolio__arrow_right",
    prevEl: ".portfolio__arrow_left",
    disabledClass: "portfolio__arrow_disable",
  },
  mousewheel: true,
  keyboard: true,
});

// бургер-меню
$(".header__contacts-burger").click(() => {
  $(".header__contacts").slideToggle();
});

// модальное окно
$(".present__order-btn ").click(() => {
  $(".page__overlay_modal").fadeIn(400).css("display", "flex");
  $("body").addClass('no-scroll');
});

$(".modal__close ").click(() => {
  $(".page__overlay_modal").fadeOut(400);
  $("body").removeClass('no-scroll');
});

$(".page__overlay").click((event) => {
  if ($(event.target).hasClass("page__overlay")) {
    $(".page__overlay_modal").fadeOut(400);
  }
});

// маска
const inputTel = document.querySelector(".callback__input_tel");
const inputMask = new Inputmask('+375(99)999-99-99');

inputMask.mask(inputTel);

// валидация формы

const form = document.querySelector('.modal__form');
const formInputs = document.querySelectorAll('.callback__input');
const inputPhone = document.querySelector('.callback__input_tel');


// function validatePhone(phone) {
//     let re = /^[0-9\s]*$/;
//     return re.test(String(phone));
// }

// form.onsubmit = function () {
//     let phoneVal = inputPhone.value,
//         emptyInputs = Array.from(formInputs).filter(input => input.value === '');

//     formInputs.forEach(function (input) {
//         if (input.value === '') {
//             input.classList.add('error');

//         } else {
//             input.classList.remove('error');
//         }
//     });

//     if (emptyInputs.length !== 0) {
//         console.log('inputs not filled');
//         return false;
//     } 

//     if (!validatePhone(phoneVal)) {
//         console.log('phone not valid');
//         inputPhone.classList.add('error');
//         return false;
//     } else {
//         inputPhone.classList.remove('error');
//     }

// }