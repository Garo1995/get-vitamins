$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});





let magnesiumSwiper = new Swiper(".magnesium-slider", {
    slidesPerView: 1,
    speed: 500,
    pagination: {
        el: ".magnesium-pagination",
        clickable: true,
    },
});


let bestsellersSwiper = new Swiper(".bestsellers-slider", {
    slidesPerView: 4,
    speed: 500,
    spaceBetween: 24,
    breakpoints: {
        '1300': {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    },
    navigation: {
        nextEl: ".bestsellers-next",
        prevEl: ".bestsellers-prev",
    },
});


let nutritionSwiper = new Swiper(".nutrition-slider", {
    slidesPerView: 4,
    speed: 500,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        '1300': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    },
    navigation: {
        nextEl: ".nutrition-next",
        prevEl: ".nutrition-prev",
    },
});


let magazineSwiper = new Swiper(".magazine-slider", {
    slidesPerView: 4,
    speed: 500,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        '1300': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    },
    navigation: {
        nextEl: ".magazine-next",
        prevEl: ".magazine-prev",
    },
});




$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});

