$(function(){

//hide cross on page load
  $( ".cross" ).hide();
  $( ".hamburger" ).click( function(e) {
    $( ".menu" ).toggleClass( "open-nav" );
    $( ".hamburger" ).hide();
    $( ".cross" ).show();

  });

  $( ".cross" ).click(function() {
    $( ".menu" ).toggleClass( "open-nav" );
    $( ".cross" ).hide();
    $( ".hamburger" ).show();

  });

});