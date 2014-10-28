$( window ).ready(function() {
  var windowHei = $(window).height();
  $(".slider").height(windowHei-30);
  $(".newsletter").css("margin-top", ($(".slider").height() - $(".newsletter").height())/2);
});