$(document).ready(function() {
  $(window).scroll(function(){
    // $('body .container .header').css({'background-color':'#e4f9f5','opacity':'0.5'});
    // $('body .container .header .header-body .title-blog').css({'color':'#40514e'});
    // $('body .container .header .header-body .nav ul li a').css({'color':'#40514e'});
    if ($(window).scrollTop()>=200) {
      $('body .container .header').css({'opacity':'0.5'});
    }else{
      $('body .container .header').css({'opacity':'1'});
    }
    console.log("scroll: "+$(window).scrollTop());
  });
});
