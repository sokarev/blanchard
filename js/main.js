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

    const swiperGaller = new Swiper('.gallery__swiper', {
        slidesPerView: 3, // показывать по 3 превью
	    spaceBetween: 50,
        // centeredSlides: true,
        // spaceBetween: 15,
        // initialSlide: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    // document.querySelectorAll(".dropdown").forEach(dropdown => {
    //     new SimpleBar(dropdown, {
    //         /* чтобы изначально ползунок был виден */
    //         autoHide: false,
    //         /* с помощью этого значения вы можете управлять высотой ползунка*/
    //         scrollbarMaxSize: 25,
    //     });
    // })

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll(".submenu__btn").forEach(item => {
//         item.addEventListener("click", function() {
//             let btn = this;
//             let dropdown = this.parentElement.querySelector(".dropdown");

//             document.querySelectorAll(".submenu__list-item").forEach(el => {
//                 if (el != btn) {
//                     el.classList.remove("active-btn");
//                 }
//             });

//             document.querySelectorAll(".dropdown").forEach(el => {
//                 if (el != dropdown) {
//                     el.classList.remove("active-dropdown");
//                 }
//             })
//             dropdown.classList.toggle("active-dropdown");
//             btn.classList.toggle("active-btn")
//         })
//     })

//     document.addEventListener("click", function(e) {
//         let target = e.target;
//         if (!target.closest(".submenu__list")) {
//             document.querySelectorAll(".dropdown").forEach(el => {
//                 el.classList.remove("active-dropdown");
//             })
//             document.querySelectorAll(".submenu__btn").forEach(el => {
//                 el.classList.remove("active-btn");
//             });
//         }
//     })
// })


const element = document.querySelector('#selectGallery');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: [],
});
