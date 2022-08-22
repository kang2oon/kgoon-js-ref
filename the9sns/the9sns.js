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

    $('.tab_wrap>div').click(function(){
        var tab = $(this).attr('data-tab');
        //console.log(tab);
        $('.tab_wrap>div').removeClass('active');
        $(this).addClass('active');
        //$('.tab_cont.step1>div[data-tab='+tab+']').addClass('active');
        if(tab == 'tab1'){
            cate1();
        }else if(tab == 'tab2'){
            cate2();
        }else if(tab == 'tab3'){
            cate3();
        }else if(tab == 'tab4'){
            cate4();
        }else if(tab == 'tab5'){
            cate5();
        }else if(tab == 'tab6'){
            cate6();
        }else if(tab == 'tab7'){
            cate7();
        }else if(tab == 'tab8'){
            cate8();
        }
    });

    $('.category_wrap ul li a').click(function(){
        $('.category_wrap ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.category_wrap .mask span').click(function(){
        $('.category_wrap ul, .category_wrap .mask').toggleClass('on');
    });

    $('.aco_wrap .aco.tab').click(function(){
        var tab = $(this).attr('data-tab');
        $('.aco_wrap .aco').removeClass('active');
        $('.aco_wrap .aco[data-tab="'+tab+'"]').addClass('active');
    });
});

function cate1() {
  	$("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");    
}
function cate2() {
    //console.log('tab2');
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");
}
function cate3() {
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");
}
function cate4() {
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");
}
function cate5() {
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");
}
function cate6() {
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");
}
function cate7() {
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='52']").wrap("<i></i>");
    $("#orderform-category option[value='53']").wrap("<i></i>");
    $("#orderform-category option[value='54']").wrap("<i></i>");
    $("#orderform-category option[value='55']").wrap("<i></i>");
    $("#orderform-category option[value='56']").wrap("<i></i>");
    $("#orderform-category option[value='57']").wrap("<i></i>");
}
function cate8() {
    $("#orderform-category i option").unwrap("");
    $("#orderform-category option[value='1']").wrap("<i></i>");
    $("#orderform-category option[value='2']").wrap("<i></i>");
    $("#orderform-category option[value='3']").wrap("<i></i>");
    $("#orderform-category option[value='4']").wrap("<i></i>");
    $("#orderform-category option[value='5']").wrap("<i></i>");
    $("#orderform-category option[value='6']").wrap("<i></i>");
    $("#orderform-category option[value='8']").wrap("<i></i>");
    $("#orderform-category option[value='9']").wrap("<i></i>");
    $("#orderform-category option[value='10']").wrap("<i></i>");
    $("#orderform-category option[value='11']").wrap("<i></i>");
    $("#orderform-category option[value='12']").wrap("<i></i>");
    $("#orderform-category option[value='13']").wrap("<i></i>");
    $("#orderform-category option[value='14']").wrap("<i></i>");
    $("#orderform-category option[value='15']").wrap("<i></i>");
    $("#orderform-category option[value='17']").wrap("<i></i>");
    $("#orderform-category option[value='18']").wrap("<i></i>");
    $("#orderform-category option[value='19']").wrap("<i></i>");
    $("#orderform-category option[value='20']").wrap("<i></i>");
    $("#orderform-category option[value='21']").wrap("<i></i>");
    $("#orderform-category option[value='22']").wrap("<i></i>");
    $("#orderform-category option[value='26']").wrap("<i></i>");
    $("#orderform-category option[value='27']").wrap("<i></i>");
    $("#orderform-category option[value='29']").wrap("<i></i>");
    $("#orderform-category option[value='30']").wrap("<i></i>");
    $("#orderform-category option[value='31']").wrap("<i></i>");
    $("#orderform-category option[value='32']").wrap("<i></i>");
    $("#orderform-category option[value='33']").wrap("<i></i>");
    $("#orderform-category option[value='34']").wrap("<i></i>");
    $("#orderform-category option[value='35']").wrap("<i></i>");
    $("#orderform-category option[value='36']").wrap("<i></i>");
    $("#orderform-category option[value='37']").wrap("<i></i>");
    $("#orderform-category option[value='38']").wrap("<i></i>");
    $("#orderform-category option[value='39']").wrap("<i></i>");
    $("#orderform-category option[value='40']").wrap("<i></i>");
    $("#orderform-category option[value='41']").wrap("<i></i>");
    $("#orderform-category option[value='42']").wrap("<i></i>");
    $("#orderform-category option[value='43']").wrap("<i></i>");
    $("#orderform-category option[value='44']").wrap("<i></i>");
    $("#orderform-category option[value='45']").wrap("<i></i>");
    $("#orderform-category option[value='46']").wrap("<i></i>");
    $("#orderform-category option[value='47']").wrap("<i></i>");
    $("#orderform-category option[value='48']").wrap("<i></i>");
    $("#orderform-category option[value='49']").wrap("<i></i>");
    $("#orderform-category option[value='50']").wrap("<i></i>");
    $("#orderform-category option[value='51']").wrap("<i></i>");
}