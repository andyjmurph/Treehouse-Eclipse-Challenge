'use strict';

$('.sun').hide();
$('.moon').hide();

$('.glasses').on('click', function() {
  $('.warning').fadeOut();
  $('.sun').delay( 800 ).fadeIn();
  $('.moon').delay(1000).show(3000);
  $('.eclipse').delay(4000).queue(function() {
    $(this).css({
      transition: 'box-shadow 1s ease-out',
      'box-shadow': '0px 0px 30px rgba(255, 255, 255, .9)'
    }).dequeue();
  })
})
