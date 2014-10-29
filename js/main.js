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

  $("#btnNewsletter").click(function(){
    var valEmail = $("#txtNewsletterEmail").val();
    if(IsEmail(valEmail)){
      $.post( "newsletter.php", { email:  valEmail})
      .done(function( data ) {

        switch (data) {
          case "1":
          alert("Muito obrigado pelo cadastro, a partir de agora lhe manteremos atualizado sobre o projeto!");
          $("#txtNewsletterEmail").val("");
          break; 
          case "1062":
          alert("Você ja está cadastrado em nosso sistema com esse email.");
          break; 
          default: 
          alert("Ops! Houve algum erro. Por favor nos comunique através dos links na área de contato.");
        }

      });
    }else{
      alert("Email Inválido! Por favor, verifique.");
    }
  });

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

});