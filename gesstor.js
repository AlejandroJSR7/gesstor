console.log('file: gesstor.js');
$( document ).ready(function() {
  console.log( "ready!" );
  $('.js-open-menu-btn').click(function() {
    console.log('Oopen Menu');
    $( ".header__main-nav" ).toggleClass( 'active-menu' );
    $( ".js-open-menu-btn" ).toggleClass( 'open-menu-btn-active' );
  });


  $('.js-cube-item').click(function () {
    alert("Click");
  });

});