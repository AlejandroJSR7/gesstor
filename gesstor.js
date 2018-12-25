console.log('file: gesstor.js');
$( document ).ready(function() {
  console.log( "ready!" );
  $('.js-open-menu-btn').click(function() {
    console.log('Oopen Menu');
    $( ".header__main-nav" ).toggleClass( 'active-menu' );
    $( ".js-open-menu-btn" ).toggleClass( 'open-menu-btn-active' );
  });


  $('.js-cube-item').click(function () {
    console.log("Click");
  });

  var item_options_toggle = document.querySelector('.js-item-options-toggle')
  var items_options = document.querySelectorAll('.item-option')

  var item_make_toggle = document.querySelector('.item-make-toggle');
  var items_make_hover = document.querySelectorAll(".item-make");

  var open_close_cube = document.querySelector('.js-open-close-cube');
  var map_cube = document.querySelector('.map-cube')

  // Add event listeners
  item_make_toggle.addEventListener('click', function() {
    for (elm of items_make_hover) {
      elm.classList.toggle('active');
    }
  });

  item_options_toggle.addEventListener('click', function() {
    for (elm of items_options) {
      elm.classList.toggle('item-option-active');
    }
    for (elm of items_make_hover) {
      elm.classList.remove('active');
    }
  });

  open_close_cube.addEventListener('click', function() {
    map_cube.classList.toggle('map-cube-active');
  });

});