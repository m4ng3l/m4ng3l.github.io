(function($) {
    'use strict';

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    if ($(window).width() < 992) {
        $('#navigation .dropdown-toggle').on('click', function() {
            $(this).siblings('.dropdown-menu').animate({
                height: 'toggle'
            }, 300);
        });
    }

    $('.hero-slider').slick({
        autoplay: true,
        infinite: true,
        arrows: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
        dots: false,
        autoplaySpeed: 7000,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    $('.hero-slider').slickAnimation();

    setTimeout(function() {
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
    }, 500);

    $('.testimonial-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.clients-logo-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.company-gallery').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    var scroll = new SmoothScroll('a[href*="#"]');

    function counter() {
        var oTop;
        if ($('.counter').length !== 0) {
            oTop = $('.counter').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }

    $(window).scroll(function() {
        counter();

        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $('.navigation').addClass('sticky-header');
        } else {
            $('.navigation').removeClass('sticky-header');
        }
    });

    $('.portfolio-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom',
        navigateByImgClick: true,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        tPrev: 'Previous (Left arrow key)',
        tNext: 'Next (Right arrow key)',
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

})(jQuery);