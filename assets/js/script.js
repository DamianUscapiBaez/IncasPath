
// ------hamburguericon----------------- 

const toggle = document.querySelector("#toggle"),
    hamburger = document.querySelector(".hamburger-icon"),
    mobile_menu = document.querySelector(".st-menu-mobile__navigation");
toggle.onclick = function () {
    hamburger.classList.toggle("active"), mobile_menu.classList.toggle("active");
};

const menu_list = document.querySelectorAll(
    ".st-menu-mobile__list > li.has-children > a"
);
menu_list.forEach((e, t) => {
    e.onclick = function (e) {
        e.preventDefault();
        const l = this.nextElementSibling,
            o = this.parentElement;
        l.classList.toggle("active"),
            o.classList.toggle("active-menu-item"),
            l.style.maxHeight
                ? (l.style.maxHeight = null)
                : (reset_mobile_menu(t), (l.style.maxHeight = l.scrollHeight + "px"));
    };
}),
    (reset_mobile_menu = (e) => {
        menu_list.forEach((t, l) => {
            const o = t.nextElementSibling,
                n = t.parentElement;
            e !== l &&
                n.classList.contains("active-menu-item") &&
                n.classList.remove("active-menu-item"),
                o.style.maxHeight && (o.style.maxHeight = null);
        });
    });


var height = $('.incaspath-menu__upper').height();
//console.log(height);
$(window).scroll(function () {
    if ($(this).scrollTop() > height) {
        $('.incaspath-menu__nav').removeClass('relative');
        $('.incaspath-menu__nav').addClass('fixed');

    } else {
        $('.incaspath-menu__nav').addClass('relative');
        $('.incaspath-menu__nav').removeClass('fixed');

    }
})

// =================slider de entradas===================

var swiper = new Swiper(".swiper-container ", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        200: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        420: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        550: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});


// animacion destination
let animado = document.querySelector(".animation");
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset < 1500){
        animado.style.opacity = 1;
        animado.classList.add("mostrarA");
    }
});

