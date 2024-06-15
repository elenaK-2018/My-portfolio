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
  $("body").addClass("no-scroll");
});

$(".modal__close ").click(() => {
  $(".page__overlay_modal").fadeOut(400);
  $("body").removeClass("no-scroll");
});

$(".page__overlay").click((event) => {
  if ($(event.target).hasClass("page__overlay")) {
    $(".page__overlay_modal").fadeOut(400);
  }
});

// маска
const inputTel = document.querySelector(".callback__input_tel");
const inputMask = new Inputmask("+375(99)999-99-99");

inputMask.mask(inputTel);

// валидация формы
const inputPhone = document.querySelector(".callback__input_tel");
const validator = new JustValidate(".modal__form");

const modalTitle = document.querySelector(".modal__title");

// const modalForm = $(".modal__form");
// const modalTitle = $(".modal__title");

// modalForm.submit(function (event) {
//   event.preventDefault();
//   $.ajax({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     type: "POST",
//     data: $(this).serialize(),
//     success(data) {
//       modalTitle.text("Ваша заявка принята, номер заявки " + data.id);
//       modalForm.slideUp(300);
//     },
//     error() {
//       modalTitle.text("Что-то пошло не так, попробуйте позже!");
//     },
//   });
// });

validator
  .addField(".callback__input_name", [
    {
      rule: "required",
      errorMessage: "Как вас зовут?",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не короче 3 символов",
    },
    {
      rule: "maxLength",
      value: 40,
      errorMessage: "Слишком длинное имя",
    },
  ])
  .addField(".callback__input_tel", [
    {
      rule: "required",
      errorMessage: "Укажите ваш телефон",
    },
    {
      validator: (value) => {
        const phone = inputPhone.inputmask.unmaskedvalue();
        console.log(phone);
        return !!(Number(phone) && phone.length === 9);
      },
      errorMessage: "Телефон не корректный!",
    },
  ])
  .onSuccess((event) => {
    const target = event.target;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: target.name.value,
        tel: inputTel.inputmask.unmaskedvalue(),
        connect: target.connect.value,
      })
      .then((response) => {
        modalTitle.textContent = `Спасибо ваша заявка принята, номер заявки ${response.data.id}!`;
        target.reset();
      })
      .catch((err) => {
        console.error(err);
        modalTitle.textContent = "Что-то пошло не так, попробуйте позже!";
      });
  });