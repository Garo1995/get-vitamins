document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.querySelector(".open-menu");
    const menuContent = document.querySelector(".menu-content");
    const body = document.body;
    const navLinks = document.querySelectorAll(".nav-menu a");

    openMenu.addEventListener("click", function () {
        this.classList.toggle("close-menu");

        if (this.classList.contains("close-menu")) {
            menuContent.classList.add("transition-menu");
            body.classList.add("body_fix");
        } else {
            menuContent.classList.add("menu-width");
            body.classList.remove("body_fix");
            menuContent.classList.remove("transition-menu");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuContent.classList.add("menu-width");
            body.classList.remove("body_fix");
            menuContent.classList.remove("transition-menu");
            openMenu.classList.remove("close-menu");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openProductMenu = document.querySelector(".open-product-menu");
    const submenuHead = document.querySelector(".submenu-head");
    const closeSubmenu = document.querySelector(".close-submenu");

    if (openProductMenu) {
        openProductMenu.addEventListener("click", function () {
            submenuHead.classList.toggle("opened-submenu");
        });
    }

    if (closeSubmenu) {
        closeSubmenu.addEventListener("click", function () {
            submenuHead.classList.remove("opened-submenu");
        });
    }
});






document.addEventListener("DOMContentLoaded", function () {
    let grid = document.querySelector('.reviews-grid-items');

    // Инициализация Masonry
    let msnry = new Masonry(grid, {
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
        let hiddenItems = document.querySelectorAll('.reviews-grid-hid');

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



document.addEventListener("DOMContentLoaded", function () {
    class Accordion {
        constructor(el, multiple = false) {
            this.el = el;
            this.multiple = multiple;

            this.links = this.el.querySelectorAll(".link");
            this.links.forEach(link => {
                link.addEventListener("click", (e) => this.dropdown(e, link));
            });
        }

        dropdown(e, link) {
            const next = link.nextElementSibling;

            // slideToggle
            if (next.style.maxHeight) {
                next.style.maxHeight = null;
            } else {
                next.style.maxHeight = next.scrollHeight + "px";
            }

            if (!this.multiple) {
                this.el.querySelectorAll(".submenu").forEach(submenu => {
                    if (submenu !== next) {
                        submenu.style.maxHeight = null;
                    }
                });
            }

            if (!link.classList.contains("open")) {
                this.el.querySelectorAll(".link").forEach(l => l.classList.remove("open"));
                link.classList.add("open");
            } else {
                link.classList.remove("open");
            }
        }
    }

    const accordion = new Accordion(document.querySelector(".accordion"), false);
    const accordionTow = new Accordion(document.querySelector(".accordion-two"), false);
});





document.addEventListener("DOMContentLoaded", function () {
    const openBtns = document.querySelectorAll(".open-hidden-accordion");

    openBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            this.classList.add("hidden-acc-btn");

            // показать все скрытые блоки
            document.querySelectorAll(".accordion-box.accordion-hidden")
                .forEach(box => box.classList.remove("accordion-hidden"));
        });
    });
});









let inswiper = new Swiper(".partners-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 14000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        '1020': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,

        },
    },
});




let positiveswiper = new Swiper(".positive-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 36,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 15500,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
});






let productBigSwiper = new Swiper(".product-sm-slider", {
    spaceBetween: 8,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        '1020': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        '767': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        '570': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
        '320': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    },
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



