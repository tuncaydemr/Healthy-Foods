$(() => {
  $('.dropdown-menu').hide();

  $('.dropdown-toggle').mouseenter(function () {
    let $show = $(this).index('.dropdown-toggle');
    $('.dropdown-menu').hide();
    $('.dropdown-menu').eq($show).fadeToggle('slow');

    $(this).mouseleave(function () {
      $('.dropdown-menu').hide();
    });
  });

  $('.menus nav ul a').mouseenter(function () {
    let $card = $(this).index();
    $('.menus nav ul a').css({
      opacity: '0.3'
    });
    $('.menus nav ul a').eq($card).css({
      opacity: '1'
    });
    $('.menus nav ul a').eq($card).css({
      transform: 'scale(1.1)'
    });

    $(this).mouseleave(function () {
      $('.menus nav ul a').css({
        opacity: '1'
      });
      $('.menus nav ul a').css({
        transform: 'none'
      });
    });
  });

  $('.side-menu').hide();

  $('.side-menu-button').click(function () {
    $('.side-menu').slideToggle();
  });

  $('.side-menu').mouseleave(function () {
    $(this).slideToggle();
  });

  // Scroll on animation

  let offset = {
    offset: '80%'
  }

  $('.banner-img').waypoint(() => {
    $('.banner-img').addClass('animate__animated animate__lightSpeedInLeft');
  }, offset);

  $('.food-menu, .vitamin-mineral-details-border, .foods-section').waypoint(() => {
    $('.food-menu, .vitamin-mineral-details-border, .foods-section').addClass('animate__animated animate__backInLeft');
  }, offset);

  $('.food-menu-area, #dairy-products-section, #grains-products-section, #proteins-products-section, #vegetables-products-section, #fruits-products-section').waypoint(() => {
    $('.food-menu-area, #dairy-products-section, #grains-products-section, #proteins-products-section, #vegetables-products-section, #fruits-products-section').addClass('animate__animated animate__backInRight');
  }, offset);

  $('.menus').waypoint(() => {
    $('.menus').addClass('animate__animated animate__backInDown');
  }, offset);

  $('.about-us').waypoint(() => {
    $('.about-us').addClass('animate__animated animate__bounceInLeft');
  }, offset);

  $('#about-us figure img').waypoint(() => {
    $('#about-us figure img').addClass('animate__animated animate__bounceInRight');
  }, offset);

  $('#contact').waypoint(() => {
    $('#contact').addClass('animate__animated animate__zoomInUp');
  }, offset);

  $('.dairy-products-area, .grains-products-area, .proteins-products-area, .vegetables-products-area, .fruits-products-area').waypoint(() => {
    $('.dairy-products-area, .grains-products-area, .proteins-products-area, .vegetables-products-area, .fruits-products-area').addClass('animate__animated animation-transform');
  }, offset);

  $('.dairy-products, .grains-products, .proteins-products, .vegetables-products, .fruits-products').waypoint(() => {
    $('.dairy-products, .grains-products, .proteins-products, .vegetables-products, .fruits-products').addClass('animate__animated animation-transform-product');
  }, offset);

  $('.vitamin-mineral-list').waypoint(() => {
    $('.vitamin-mineral-list').addClass('animate__animated animation-translate');
  }, offset);

  let $timer;

  function $changeText() {
    $('.shopping-cart').text('Add to Cart');
  }

  $('.shopping-cart').click(function (e) {
    e.preventDefault();
    $(this).text('Added to Cart');

    clearTimeout($timer);

    $(this).mouseleave(function () {
      $timer  = setTimeout($changeText, 1000);
    });
  });
});
