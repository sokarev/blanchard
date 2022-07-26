// const hero__container = document.querySelector(".hero__container")
const swiperHero = new Swiper('.hero__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
        delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: '.swiper-bullet-pagination',
        type: 'bullets',
        clickable: true
    }

});

const swiperGallery = new Swiper('.gallery-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: true,
    // slidesPerView: 'auto',
    // direction: 'vertical',
    // loop: true,
    // slidesPerGroup: 3,
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: true,
    //     pageUpDown: true,

    // },

    // spaceBetween: 30,
    pagination: {
        el: ".gallery-pagination",
        // clickable:true,
        type: 'fraction',
    },
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev"
    },
    a11y: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
        init: function() {
            this.slides.forEach((slide) => {
                if (!slide.classList.contains("slide-visible")) {
                    slide.tabIndex = "-1";
                } else {
                    slide.tabIndex = "";
                }
            });
        },
        slideChange: function() {
            this.slides.forEach((slide) => {
                if (!slide.classList.contains("slide-visible")) {
                    slide.tabIndex = "-1";
                } else {
                    slide.tabIndex = "";
                }
            });
        },
        beforeResize: function() {
            this.slides.forEach((el) => {
                el.style.marginTop = "";
            });
        }
    }

});

const swiperEvent = new Swiper('.swiper__event', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    // loop: true,

    navigation: {
        nextEl: ".catalog__swiper-next",
        prevEl: ".catalog__swiper-prev"
    },

});


const swiperProject = new Swiper('.project__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    // loop: true,

    navigation: {
        nextEl: ".project__btn-next",
        prevEl: ".project__btn-prev"
    },

});


document.querySelectorAll(".dropdown__list").forEach(dropdown__list => {
    new SimpleBar(dropdown__list, {
        /* чтобы изначально ползунок был виден */
        autoHide: false,
        /* с помощью этого значения вы можете управлять высотой ползунка*/
        scrollbarMaxSize: 25,
    });
})



document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".submenu__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".dropdown");

            document.querySelectorAll(".submenu__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active-btn");
                }
            });

            document.querySelectorAll(".dropdown").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-dropdown");
                }
            })

            dropdown.classList.toggle("active-dropdown");
            btn.classList.toggle("active-btn")
        })

    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".submenu__list-item")) {
            document.querySelectorAll(".dropdown").forEach(el => {
                el.classList.remove("active-dropdown");
            })
            document.querySelectorAll(".submenu__btn").forEach(el => {
                el.classList.remove("active-btn");
            });

        }

    })


    // document.addEventListener('click', function(e) {
    //     if (e.target.matches('.dropdown__link')) {
    //         document.querySelectorAll(".dropdown").classList.remove('active-dropdown');
    //         document.querySelectorAll(".submenu__btn").classList.remove('active-btn');
    //     }
    // });



})



const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: [],
});

$(function() {
    $("#accordion").accordion({

        heightStyle: "content",
        header: '>.catalog__list-item >.catalog__list-btn',
        active: 0,
        collapsible: true

    });

});
$(function() {
    $("#accordion").accordion({

        heightStyle: "content",
        header: '>.catalog__list-autor >.catalog__painter-item',
        active: 0,
        collapsible: true

    });

});
ymaps.ready(init);

function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
        "map", {
            center: [55.75846806898367, 37.60108849999989],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        }, {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "350px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "270px", right: "20px" }
        }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
        [55.75846806898367, 37.60108849999989], {}, {
            iconLayout: "default#image",
            iconImageHref: "../img/ball.svg",
            iconImageSize: [20, 20],
            iconImageOffset: [-20, -40],
        }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
}