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

    $('.count_wrap div strong').each(function(){
        var cnt_num = $(this).text();
        console.log(cnt_num);
        var cnt_num_com = cnt_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        console.log(cnt_num_com);
        $(this).text(cnt_num_com);
    });

    var sfSlider = new Swiper('.special_feature', {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

function md_signin(){
    $('.modal_wrap, #md_signin').show();
}