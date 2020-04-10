$(function(){
 
    $(document).ready(function(){
        $('.slider').bxSlider({
            auto: true,
            pause: 3000,
        });
    });

// リンク
    $('.jump').click(function(){
        var id = $(this).attr('id');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 300);
    });

// お知らせ
    $('li').hide();
    $('li').eq(0).addClass('active');
    $('li').eq(1).addClass('active');
    $('li').eq(2).addClass('active');
    $('li').eq(3).addClass('active');
    $('.active').show();

// history
    $('.chapter').click(function(){
     $('.act').removeClass('act');
     var index = $('.chapter').index($(this));
     $('.show').eq(index).addClass('act');
    });
     

});