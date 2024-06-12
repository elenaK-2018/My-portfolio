new Swiper('.swiper', {
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.portfolio__arrow_right',
    prevEl: '.portfolio__arrow_left',
    disabledClass: 'portfolio__arrow_disable',
  },
  mousewheel: true,
  keyboard: true,
});



$('.header__contacts-burger').click(() => {
  $('.header__contacts').slideToggle();
})

$('.present__order-btn ').click(() => {
  $('.page__overlay_modal').fadeIn(400).css('display', 'flex');
})

$('.modal__close ').click(() => {
  $('.page__overlay_modal').fadeOut(400);
})

$('.page__overlay').click((event) => {
  if($(event.target).hasClass('page__overlay')) {
    $('.page__overlay_modal').fadeOut(400);
  }
})


const inputTel = document.querySelector('.callback__input_tel');    
const telMask = new Inputmask('+375(99)999-99-99'); 

telMask.mask(inputTel);