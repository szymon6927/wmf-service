$(window).bind("load", function () {

  var footerHeight = 0,
    footerTop = 0,
    $footer = $(".footer-2");

  positionFooter();

  function positionFooter() {
    footerHeight = $footer.height();
    // 20 is as padding height
    footerTop = ($(window).scrollTop() + $(window).height() - footerHeight - 53) + "px";

    if (($(document.body).height() + footerHeight) < $(window).height()) {
      $footer.css({
        position: "absolute",
        width: "100%"
      }).animate({
        top: footerTop
      })
    }
    else {
      $footer.css({
        position: "static"
      })
    }

  }

  $(window)
    .scroll(positionFooter)
    .resize(positionFooter)
});


$(document).ready(function () {
  $('').carousel()
  $('.carousel .carousel-item').first().addClass('active');
});

$(document).ready(function () {
  $('.cta-contact').submit(function (e) {
    e.preventDefault();
    console.log("Submited!");
    var email = $('.cta-contact .email').val();
    console.log(email);
    var successMsg = $(this).data('success');
    $('.cta-message').html(`<div class="success">${successMsg}</div>`).delay(5000).fadeOut(400);
  })
});

