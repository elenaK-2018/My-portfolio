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
const modalTitleElement = document.querySelector(".modal__title");

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
    event.preventDefault(); 
    const target = event.target;
    const formData = {
      name: target.name.value,
      tel: inputPhone.inputmask.unmaskedvalue(),
      connect: target.connect.value,
    };

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "POST",
      data: formData,
      success(response) {
        modalTitleElement.textContent = `Спасибо, ваша заявка принята, номер заявки ${response.id}!`;
        target.reset();
      },
      error(err) {
        console.error(err);
        modalTitleElement.textContent = "Что-то пошло не так, попробуйте позже!";
      },
    });
  });