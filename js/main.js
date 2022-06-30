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

const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 50,
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
        el: ".swiper-pagination",
        // clickable:true,
        type: 'fraction',
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev"
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

            document.querySelectorAll(".submenu__list-item").forEach(el => {
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
})

// const dropdowns = document.querySelectorAll('.submenu__list-item');
// dropdowns.forEach(subMenu => {
//     const submenuBtn = subMenu.querySelector('.submenu__btn');
//     // const submenu__btn = dropdown.querySelector('.submenu__btn'); поворот стрелочки и цвет текста
//     const drop = subMenu.querySelector('.dropdown');
//     const options = subMenu.querySelector('.dropdown__link');
//     const selected = subMenu.querySelector('.selected');

//     submenuBtn.addEventListener('click', () => {
//         submenuBtn.classList.toggle('active-btn');
//         drop.classList.toggle('active-dropdown');
//     });
//     options.forEach(option => {
//         option.addEventListener('.click', () => {
//             selected.innerText = option.innerText;
//             submenuBtn.classList.remove("active-btn");
//             // удалить класс с поворотом кнопки и сменой фона
//             drop.classList.remove('.active-dropdown');
//             options.forEach(option => {
//                 option.classList.remove('active');
//             });
//             option.classList.add('active');
//         });
//     });
// });


const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: [],
});