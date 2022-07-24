$(document).ready(function(){
    var navOffset = $('nav').offset();
    $(window).scroll(function(){
        if( $(document).scrollTop() > navOffset.top ){
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    $('.modal_close').click(function(){
        $('.modal_wrap, #md_signin').hide();
    });

    var cnt_num = $('.count_wrap div strong');
    var cnt_num_com = cnt_num.toLocaleString('ko-KR');
    cnt_num.text(cnt_num_com);
});

function md_signin(){
    $('.modal_wrap, #md_signin').show();
}