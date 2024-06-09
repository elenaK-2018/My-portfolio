new Swiper('.swiper', {
    navigation: {
        nextEl: '.portfolio__arrow_right',
        prevEl: '.portfolio__arrow_left',
        disabledClass: 'portfolio__arrow_disable',
      },
})

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