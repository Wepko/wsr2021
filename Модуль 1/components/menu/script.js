$(() => {
  $(window).scroll(() => {
    const windowTop = $(window).scrollTop()
  })

  $('.logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  })

  $('a[href*="#"]').on('click', function(e){
    console.log($($(this).attr('href')).offset())
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },500);
    e.preventDefault();
  });
})