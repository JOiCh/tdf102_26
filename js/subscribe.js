$(document).ready(function () {
    //subscribe動畫
    $('footer #submit').click(function () {
        $(this).toggleClass('submitMove');
        $(this).html('<i class="far fa-check"></i>');
        // $(this).animate({width:'40px'},500)

    });
  
});