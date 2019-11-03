$(document).ready(function(){
	
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

    $('.scroll-down-buton').click (function() {
    	console.log($('.scroll-down-buton'));
      $('html, body').animate({scrollTop: $('section#test2').offset().top }, 'slow');
      return false;
    });
});