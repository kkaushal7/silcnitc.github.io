$(function(){ // document ready

  var stickyTop = $('.sticky_sidebar').offset().top; // returns number

  $(window).scroll(function(){ // scroll event

    var windowTop = $(window).scrollTop(); // returns number

    if (stickyTop < windowTop) {
      $('.sticky_sidebar').css({ position: 'fixed', top:'3em' });
      $('.main > section').css('margin-left','15em');
    }
    else {
      $('.sticky_sidebar').css('position','static');
      $('.main > section').css('margin-left','0');
    }

  });

});
