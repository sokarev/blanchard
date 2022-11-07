const smoothLinks = document.querySelectorAll('.nav__list-link');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

$(window).scroll(function() {
    if ($(this).scrollTop() > window.innerHeight * 0.75) {
        $(".header").fadeIn();
        $(".header").addClass('fixed')
    } else {
        $(".header").removeClass('fixed')
    }
});

document.querySelector(".burger").addEventListener("click", function() {
    document.querySelector(".header__menu").classList.toggle("active");
})


const swiperHero = new Swiper('.hero__swiper', {

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

    pagination: {
        el: ".gallery-pagination",
        type: 'fraction',
        clickable: true

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
    },
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        // },
        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
    }

});

const swiperEvent = new Swiper('.swiper-event', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
    a11y: true,

    navigation: {
        nextEl: ".event__swiper-next",
        prevEl: ".event__swiper-prev"
    },
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        // },
        // when window width is >= 640px
        768: {
            // slidesPerView: 3,
            slidesPerGroup: 3,

            spaceBetween: 27,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
            a11y: true,
            // pagination: enabled,
        },
    },


});

const swiperProject = new Swiper('.project__swiper', {

    slidesPerGroup: 1,
    spaceBetween: 50,
    a11y: true,

    navigation: {
        nextEl: ".project__btn-next",
        prevEl: ".project__btn-prev"
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            // slidesPerGroup: 1,

            // spaceBetween: 27,

        },
        1025: {
            slidesPerView: 3,
        },
    },


});

document.querySelectorAll(".dropdown__list").forEach(dropdown__list => {
    new SimpleBar(dropdown__list, {
        autoHide: false,
        scrollbarMaxSize: 25,
    });
})

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".dropdown");

            document.querySelectorAll(".header__btn").forEach(el => {
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
        if (!target.closest(".header__list-item")) {
            document.querySelectorAll(".dropdown").forEach(el => {
                el.classList.remove("active-dropdown");
            })
            document.querySelectorAll(".header__btn").forEach(el => {
                el.classList.remove("active-btn");
            });
        }
    })
})

let tabsBtn = document.querySelectorAll('.catalog__list-autor');
let tabsItem = document.querySelectorAll('.catalog__painter-item');

tabsBtn.forEach(function(el) {
    el.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('catalog__list-autor--active') });
        e.currentTarget.classList.add('catalog__list-autor--active');

        tabsItem.forEach(function(el) { el.classList.remove('catalog__painter-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter-item--active');

    })
})

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: [],

});

// Перебираем каждый элемент шапки
document.querySelectorAll('.catalog__list-btn').forEach(function(trigger) {
    // Получаем родителя, элемент аккордеона
    var parent = trigger.closest('.catalog__list-item');

    // клик по шапке
    trigger.addEventListener('click', function(e) {

        // если при клике у него уже есть активный класс 
        if (parent.classList.contains('active')) {
            // то мы его удаляем
            parent.classList.remove('active');
        }
        // если при клике мы не нашли у элемента активный класс
        else {
            // удаляем у всех элементов активный класс
            document.querySelectorAll('.catalog__list-item').forEach(function(item) {
                item.classList.remove('active');
            });
            // добавляем класс тому элементу, по которому кликнули
            parent.classList.add('active');
        }
    })
});

document.querySelector('.catalog__list-inner').addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('menu__item')) {
        for (let i = 0; i < menuItem.length; i++) {
            // Убираем у других
            parent.querySelectorAll('.catalog__list-item')[i].classList.remove('active');
        }
        // Добавляем тому на который нажали
        target.classList.add('active');
    }
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

let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.popup-link');
let popupBody = document.querySelector('.popup__body');
let popupClose = document.querySelector('.popup__close');

openPopupButtons.forEach((el) => {
    el.addEventListener('click', (e) => {
        // e.target - целевой элемент
        popup.classList.add('open');

        let imgSrc = e.target.querySelector('.gallery-image').src;
        let popupBox = document.querySelector('.popup__content');
        let title = e.target.querySelector('h3').innerHTML;
        let desc = e.target.querySelector('.swiper-box__desc').innerHTML;
        let date = e.target.querySelector('.swiper-box__date').innerHTML;
        let text = e.target.querySelector('.swiper-box__text').innerHTML;

        let popBox = `
                <a class="popup__close" href="#">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666641 15.3043L15.3333 3.17761e-05L16 0.695679L1.33331 15.9999L0.666641 15.3043Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666725 -2.96187e-06L15.3334 15.3042L14.6667 15.9999L5.76143e-05 0.695644L0.666725 -2.96187e-06Z" fill="black"/>
                    </svg>
                </a>
                 <picture class="popup__picture">
                    <img class="popup__img" src="${imgSrc}" alt="">
                  </picture>

                <div class="popup__box">
                    <h3 class="popup__title">${title}</h3>
                    <span class="popup__desc"> ${desc}</span>
                    <span class="popup__date"> ${date}</span>

                    <p class="popup__text">${text}</p>
                </div>`;
        popupBox.innerHTML = popBox;
    });
});

document.addEventListener('click', function(event) {
    if (event.target === popupBody || event.target.className === 'popup__close') {
        event.preventDefault();
        popup.classList.remove('open');
    };
});
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);





let validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
        color: '#D11616',
        fontSize: '12px',
        fontFamily: '14px',
        paddingBottom: '5px',

    },

});
validation
    .addField('#name', [{
            rule: 'required',
            errorMessage: 'Как вас зовут?',
        },

        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Не менее 3 символов',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Слишком длинное имя',
        },
    ])
    .addField('#tel', [{
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',

    }, ])
    .onSuccess((event) => {
        validation.form.submit();
    });