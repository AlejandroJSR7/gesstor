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

  var dock_menu_list_items = document.querySelectorAll('.dock-menu-list li');
  var show_name__text = document.querySelector('.show-name__text');
  var show_name = document.querySelector('.show-name');

  var cube_faces = document.querySelectorAll('.cube__face a');

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

  dock_menu_list_items.forEach(function(elm) {
    elm.addEventListener('mouseenter', function(e) {
      var data_title = e.target.getAttribute("data-title");
      show_name__text.innerText = data_title;
    });
  });

  cube_faces.forEach(function(elm) {
    elm.addEventListener('mouseenter', function(e) {
      var data_title = e.target.getAttribute("data-title");
      show_name__text.innerText = data_title;
    });
  });

  

});