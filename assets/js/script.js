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

$('.open-product-menu').on('click', function () {
    $('.submenu-head').toggleClass('opened-submenu');
})

$('.close-submenu').on('click', function () {
    $('.submenu-head').removeClass('opened-submenu');
})








document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.reviews-grid-items');

    // Инициализация Masonry
    var msnry = new Masonry(grid, {
        itemSelector: '.reviews-grid-item',
        columnWidth: '.reviews-grid-item',
        gutter: 20,
        fitWidth: false, // чтобы тянулось на всю ширину
    });

    // ждём загрузки картинок
    imagesLoaded(grid).on('progress', function () {
        msnry.layout();
    });

    // кнопка "показать ещё"
    document.querySelector('.reviews-btn-more').addEventListener('click', function () {
        var hiddenItems = document.querySelectorAll('.reviews-grid-hid');

        hiddenItems.forEach(function (item) {
            item.classList.remove('reviews-grid-hid'); // показываем
        });

        imagesLoaded(grid, function () {
            msnry.reloadItems();
            msnry.layout();
        });

        this.style.display = 'none'; // спрятать кнопку, если блоков больше нет
    });
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
    slidesPerView: 5,
    speed: 500,
    spaceBetween: 24,
    breakpoints: {
        '1599': {
            slidesPerView: 5,
            spaceBetween: 16,
        },
        '1300': {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '570': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1,
            spaceBetween: 16,
        },
    },
    navigation: {
        nextEl: ".bestsellers-next",
        prevEl: ".bestsellers-prev",
    },
});


let nutritionSwiper = new Swiper(".nutrition-slider", {
    slidesPerView: 5,
    speed: 500,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        '1599': {
            slidesPerView: 5,
            spaceBetween: 16,
        },
        '1300': {
            slidesPerView: 4,
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
    slidesPerView: 5,
    speed: 500,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        '1599': {
            slidesPerView: 5,
            spaceBetween: 16,
        },
        '1300': {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        '570': {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        '320': {
            slidesPerView: 1,
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
    let accordion = new Accordion($('.accordion'), false);
});






$('.open-hidden-accordion').on('click', function () {
    $(this).addClass('hidden-acc-btn');
    $('.accordion-box').removeClass('accordion-hidden');
})













let inswiper = new Swiper(".partners-slider", {
    slidesPerView: 10,
    loop: true,
    spaceBetween: 0,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 2000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        '1020': {
            slidesPerView: 10,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        '320': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 0,

        },
    },
});




let positiveswiper = new Swiper(".positive-slider", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 30,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 2600,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        '1020': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 30,

        },

        '320': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 30,

            speed: 2800,

        },
    },
});






let productBigSwiper = new Swiper(".product-sm-slider", {
    spaceBetween: 8,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,

});
let productSwiper = new Swiper(".product-big-slider", {
    spaceBetween: 8,
    navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
    },
    thumbs: {
        swiper: productBigSwiper,
    },
    pagination: {
        el: ".product-pagination",
        clickable: true,
    },
});



