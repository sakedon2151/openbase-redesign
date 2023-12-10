$(function(){

    // ----- 스크롤 섹션이동 -----
    $(".stack").each(function () {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 50;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                    $('.right_nav ul li a').removeClass('active');
                }
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                    $('.right_nav ul li a').removeClass('active');
                }
            }
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });

    // ----- 최상단 이동버튼 -----
    $('.launch').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    // ----- 풀페이지 네비게이션 -----
    $('.sec1_tracker').click(function () {
        var offset = $('#section1').offset();
        $('.right_nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: offset.top }, 500);
    });
    $('.sec2_tracker').click(function () {
        var offset = $('#section2').offset();
        $('.right_nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: offset.top }, 500);
    });
    $('.sec3_tracker').click(function () {
        var offset = $('#section3').offset();
        $('.right_nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: offset.top }, 500);
    });
    $('.sec4_tracker').click(function () {
        var offset = $('#section4').offset();
        $('.right_nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: offset.top }, 500);
    });
    $('.sec5_tracker').click(function () {
        var offset = $('#section5').offset();
        $('.right_nav ul li a').removeClass('active');
        $(this).addClass('active');
        $('html').animate({ scrollTop: offset.top }, 500);
    });

    // ----- 뎁스 스크립트 -----
    $('#gnb').hover(function () {
        $('#header_dim').stop().slideDown(200);
        $('.depth2').stop().slideDown(200);
    }, function () {
        $('#header_dim').stop().slideUp(200);
        $('.depth2').stop().slideUp(200);
    });
    $('#gnb .depth1').hover(function () {
        $(this).addClass('on');
        $(this).next().addClass('on');
    }, function () {
        $(this).removeClass('on');
        $(this).next().removeClass('on');
    });
    $('#gnb .depth2').hover(function () {
        $(this).addClass('on');
        $(this).prev().addClass('on');
    }, function () {
        $(this).removeClass('on');
        $(this).prev().removeClass('on');
    });

    // ----- 푸터 뎁스 only hover -----
    $('.f_col_right').hover(function () {
        $('.family_depth').stop().slideDown(200);
    }, function () {
        $('.family_depth').stop().slideUp(200);
    });

    // ----- 인접한 사이트맵 보더 조정 -----
    $('.f_col_left>p').hover(function () {
        $(this).css('border-right', '0.625rem solid #fff');
        $(this).prev().css('border-right', '0.3125rem solid #999');
        $(this).next().css('border-right', '0.3125rem solid #999');
    }, function () {
        $(this).css('border-right', '0rem solid #444');
        $(this).prev().css('border-right', '0rem solid #444');
        $(this).next().css('border-right', '0rem solid #444');
    });

    // ----- 언어 전환 버튼 -----
    $('.etc_lang>a').click(function(){
        $('.etc_lang a').removeClass('on');
        $(this).addClass('on');
    });

    // ----- a태그 픽스 -----
    $("a").click(function(e){
        e.preventDefault();
    });

    // ----- section1 - visual slide -----
    const s1_swiper = new Swiper('.s1-swiper', {
        direction: 'horizontal',
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // ----- section5 - news slide -----
    const s5_swiper = new Swiper('.s5-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            360: {
                slidesPerView: 2,  //브라우저가 360보다 클 때 2개
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,  //브라우저가 768보다 클 때 3개
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,  //브라우저가 1024보다 클 때 4개
                spaceBetween: 40,
            }
        }
    });

    // ----- 페럴렉스 액션 트리거 -----
    $(window).on('scroll', function () {
        var $window = $(window);
        var top = $window.scrollTop();
        var parent = $(".stack");
        parent.each(function () {
            if (top > $(this).offset().top - 100) {
                $(this).find(".paraBox").addClass('active');
            } else {
                $(this).find(".paraBox").removeClass('active');
            }
        });
    });

    // ----- 다크모드 전환 ----- 
    $('#darkmode').on('click', function () {
        if ($(this).is(':checked')) {
            $('#section2, #section3, #section4, #section5').css('background-color', '#111');
            $('#section2 *').css('color', '#fff');
            $('.s3-title *').css('color', '#fff');
            $('.s4-title *').css('color', '#fff');
            $('#section5 *').css('color', '#fff');
            $('.defaultBtn').css('color', '#222').css('border-color', '#fff');
        } else {
            $('#section2, #section3, #section4, #section5').css('background-color', 'white');
            $('#section2 *').css('color', '#222');
            $('.s3-title *').css('color', '#222');
            $('.s4-title *').css('color', '#222');
            $('#section5 *').css('color', '#222');
            $('.defaultBtn').css('color', '#222').css('border-color', '#222');
        }
    });

    // ----- 스크롤 헤더 디자인 -----
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $("#header, #m_header").css("background-color", "rgba(255, 255, 255,.5)").css("border-bottom", "0.0625rem solid #888");
            $(".depth1").css("color", "#222");
            $(".depth2 a").css("color", "#222");
            $("#header_dim").css("background-color", "rgba(255, 255, 255,.5");
            $(".logo_img, .m_logo_img").removeClass('active_logo');
            $(".logo_img, .m_logo_img").prev().addClass('active_logo');
            $("#fp_nav ul li a").css("background-color", "#222");
            $("#fp_nav ul").removeClass('on');
            $("#m_menu a i").css("color", "#222");
        } else {
            $("#header, #m_header").css("background-color", "rgba(0, 0, 0,.5)").css("border-bottom", "0.0625rem solid #444");
            $(".depth1").css("color", "#fff");
            $(".depth2 a").css("color", "#fff");
            $("#header_dim").css("background-color", "rgba(0, 0, 0,.5)");
            $(".logo_img, .m_logo_img").removeClass('active_logo');
            $(".logo_img, .m_logo_img").next().addClass('active_logo');
            $("#fp_nav ul li a").css("background-color", "#fff");
            $("#fp_nav ul").addClass('on');
            $("#m_menu a i").css("color", "#fff");
        }
    });

});