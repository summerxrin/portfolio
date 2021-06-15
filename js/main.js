;
(function () {

    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    var fullHeight = function () {

        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 100, 'easeInOutExpo');
                    });

                }, 50);

            }

        }, {
            offset: '85%'
        });
    };



    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };

    var pieChart = function () {
        $('.chart').easyPieChart({
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'butt',
            barColor: '#4c94ff',
            trackColor: "#f5f5f5",
            size: 160,
            animate: 1500
        });
    };

    var skillsWayPoint = function () {
        if ($('#fh5co-skills').length > 0) {
            $('#fh5co-skills').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(pieChart, 400);
                    $(this.element).addClass('animated');
                }
            }, {
                offset: '90%'
            });
        }

    };


    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };


    $(function () {
        contentWayPoint();
        goToTop();
        loaderPage();
        fullHeight();
        parallax();
        // pieChart();
        skillsWayPoint();
    });


}());


/*scrollspy 메뉴바*/
$(function () {

    var link = $('#navbar a.dot');
    link.on('click', function (e) {

        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href'));

        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);

        //active 클래스 부여
        $(this).addClass('active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });

    $(window).on('scroll', function () {
        findPosition();
    });

    function findPosition() {
        $('section').each(function () {
            if (($(this).offset().top - $(window).scrollTop()) < 20) {
                link.removeClass('active');
                $('#navbar').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    }

    findPosition();

});
/*메뉴바 끝*/

/*scrollspy 메뉴바 1*/
$(function () {

    var link = $('#navbar1 a.dot');
    link.on('click', function (e) {

        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href'));

        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);

        //active 클래스 부여
        $(this).addClass('active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });

    $(window).on('scroll', function () {
        findPosition();
    });

    function findPosition() {
        $('section').each(function () {
            if (($(this).offset().top - $(window).scrollTop()) < 20) {
                link.removeClass('active');
                $('#navbar1').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    }

    findPosition();

});
/*메뉴바 끝*/

/*모달팝업 시작*/
function openModal(modalname) {
    document.get
    $("#modal").fadeIn(300);
    $("." + modalname).fadeIn(300);
    $('body').css("overflow", "hidden");
}

$("#modal, .closep").on('click', function () {
    $("#modal").fadeOut(300);
    $(".modal-con").fadeOut(300);
    $('body').css("overflow", "scroll");
});
/*모달팝업 끝*/