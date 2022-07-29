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
        //console.log(cnt_num);
        var cnt_num_com = cnt_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        //console.log(cnt_num_com);
        $(this).text(cnt_num_com);
    });

    var review = new Swiper('.review', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        }
    });

    var sfSlider = new Swiper('.special_feature', {
        slidesPerView: 1,
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
        breakpoints: {
            1280: {
                slidesPerView: 4,
              },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        }
    });

    var order = new Swiper('.order-list', {
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });

    var youtube = new Swiper('.youtube', {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });

    var yta = $('.youtube a');
    var ytw = yta.width();
    //console.log(ytw);
    var yth = ((ytw / 16) * 9);
    //console.log(yth);
    yta.height(yth);

    $("a.yt_play").YouTubePopUp({autoplay:0});
});