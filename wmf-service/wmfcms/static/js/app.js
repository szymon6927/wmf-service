$(window).bind("load", function () {

  let footerHeight = 0,
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
    } else {
      $footer.css({
        position: "static"
      })
    }

  }

  $(window)
    .scroll(positionFooter)
    .resize(positionFooter)
});


$(document).ready(function() {
  $('').carousel()
  $('.carousel .carousel-item').first().addClass('active');
  // $('.slider-wrapper').slick({
  //   centerMode:true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   infinite: true,
  //   cssEase: 'linear',
  //   variableWidth: true,
  //   variableHeight: true
  // });
})