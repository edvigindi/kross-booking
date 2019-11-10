$(document).ready(function(){
	
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

    /* $('.scroll-down-buton i').click (function() {
    	console.log($('.scroll-down-buton i'));
      $('html, body').animate({scrollTop: $('section#test2').offset().top }, 'slow');
      return false;
    }); */
    $(document).on('click','.fa-arrow-alt-circle-down',function(){
      console.log($('i'));
      $('html, body').animate({scrollTop: $('section#test2').offset().top - 120}, 'slow');
    });
});
