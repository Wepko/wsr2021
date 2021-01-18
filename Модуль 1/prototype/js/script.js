(($) => {
  $.fn.openPopup = function(option) {
    const el = $(this)
  }
})($)


  $('[data-modal]').on('click', function(e) {
    const $modal = $(`#${$(this).data('modal')}`)
    $modal.fadeIn()
    document.body.style.overflow = 'hidden';
    $modal.addClass('modal-show')
    console.log($modal)
    $('[data-btn=modal-close]').on('click',()=>{
      $modal.fadeOut()
      document.body.style.overflow = 'auto';
    })
  })

  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
    const nameSection = $(this).attr('href')
    const scrollingSection = $(nameSection).offset().top
    $('html, body').animate({scrollTop: scrollingSection})
  })


  let flagStep1 = false
  let flagStep2 = false
  const rnd = Math.floor(Math.random() * 100)
  function animationBounce() {
    const promo = $(this).data().field
    const step = $(`[data-step=${promo}]`)
    
    step.addClass('bounce')
    step.addClass('border-green')
    
      if (!$('[data-step="promo_3"]').hasClass('bounce')) {
        flagStep1 = $('[data-step="promo_1"]').hasClass('bounce')
        flagStep2 = $('[data-step="promo_2"]').hasClass('bounce')
      } else {
        flagStep1 = false
        flagStep2 = false
      }
    
      if (flagStep1 && flagStep2) {
        setTimeout(()=>{
          const promo1 = $('[data-field="promo_3"]')
          animationBounce.call(promo1)
          promo1.children('.input')[0].value=`${rnd}%`
          $('.promo__itog-cost')[0].innerHTML = `${rnd} 000 руб`
        }, 500)
      }
    }


  $('[data-field]').on('change', animationBounce)  



  $('.seat__place').on('click', function() {
    $(this).toggleClass('seat__active')
  })
  

