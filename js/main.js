$( window ).ready(function() {
  var windowHei = $(window).height();
  $("#slider").height(windowHei-30);
  $(".newsletter").css("margin-top", ($("#slider").height() - $(".newsletter").height())/2);

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: (target.offset().top - 10 - $(".navbar").height())}, 1000);
          return false;
        }
      }
    });
  });
});