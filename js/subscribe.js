$(document).ready(function () {
    //漢堡按鈕動畫
    $("button.hamburger").on("click", function(){
        $(this).toggleClass("is-active");
        $('.bg_menu').toggleClass("bg_show");
        $('#menu').toggleClass("slide_right");
      });    
    //捲動時離開側選單
      $(window).on('scroll',function(){
        $('.hamburger').removeClass("is-active");
        $('.bg_menu').removeClass("bg_show");
        $('#menu').removeClass("slide_right");
      });

    //subscribe動畫
    $('footer #submit').click(function () {
        $(this).toggleClass('submitMove');
        $(this).html('<i class="far fa-check"></i>');
        // $(this).animate({width:'40px'},500)

    });
  
});