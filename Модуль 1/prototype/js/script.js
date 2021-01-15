(function($) {
  console.log($.fn);
  $.fn.openPopup = function(settings) {
    console.log('open')
    let elem = $(this)
    console.log(elem)
  }

  $.fn.closePopup = function(setting) {
    console.log('close')
  }

})(jQuery)


$('.open-popup').click(function() {
  $(this).openPopup()
})
$('.close-popup').closePopup();