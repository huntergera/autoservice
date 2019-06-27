;(function($) {

//Mobile-menu
$('.mobile_btn').on ('click', function(){
    $("body").addClass("menu-active");
    $(".body-mask").show();
});

$('.btn_close, .body-mask').on ('click', function(){
    $("body").removeClass("menu-active");
    $(".body-mask").hide();
});

//Language dropdown
$('.dropdown').on('click', function() {
    if (!$(this).hasClass('show')) {
        $(this).siblings('.dropdown__list').stop(true, false).slideDown(100);
        $(this).addClass('show');
    }
    else {
        $(this).siblings('.dropdown__list').stop(true, false).slideUp(100);
        $(this).removeClass('show');
    }
});

//Top-line fixed
$(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 0) {
        $('.header').addClass('header__fixed');
    }else  {
        $('.header').removeClass('header__fixed');
    };
});

//Tabs conditions
$('.tabs__menu').on('click', '.tabs__control--item:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active')
        .eq($(this).index()).addClass('active');
});

//Sliders
$('.bg-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
});

$(function() {
    $('.slider-comments').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        // centerMode: true,
        // centerPadding: '10px',
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1025,
                settings: 'unslick'
            },
        ]
    });

    $(window).on('resize', function() {
        $('.slider-comments').slick('resize');
    });
});

new WOW().init();

})(jQuery);


