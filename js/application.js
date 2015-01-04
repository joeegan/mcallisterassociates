$(function(){

   var carousel = $('#testimonials');
   var prevClicked = false;
   var next;

   carousel.carousel({
      interval: 0
   });

   carousel.bind('slide', function(ev){

      if (prevClicked) {
         next = $('.active').prev('.item');
      } else {
         next = $('.active').next('.item');
      }

      var nextItem =  next.length ? next : $('.item:first');
      carousel.animate({
          height: nextItem.outerHeight()
       });
   });

   $('.carousel-control.left').click(function(){
      prevClicked = true;
   });
   $('.carousel-control.right').click(function(){
      prevClicked = false;
   });

   $('.nav li a').click(function(ev){
      var id = $(this).attr('href');
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');
      $('html, body').animate({
          scrollTop: $(id).offset().top - $('.nav').outerHeight() - 20
      }, 1000);
      ev.preventDefault();
   });

//   $('#complaints').modal();
   $('#legal').modal({
      show: false
   });


});