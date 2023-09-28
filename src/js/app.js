import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/fullpage.min.js";
import "./modules/fslightbox.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


// Инициализация слайдера about-slider
const aboutSlider = document.querySelector('.about-slider');
var mySwiperAbout = new Swiper(aboutSlider, {
    slidesPerView: 3,
    speed: 800,
    loop: true,
    centeredSlides: true,
});

// Инициализация слайдера product-slider
const productSlider = document.querySelector('.product-slider');
var mySwiperProduct = new Swiper(productSlider, {
    slidesPerView: 3,
    speed: 800,
    spaceBetween: 24,
    navigation: {
        prevEl: document.querySelector('.related .nav-arrow-prev'),
        nextEl: document.querySelector('.related .nav-arrow-next'),
    },
});

// production-slider
document.querySelectorAll('.product').forEach(n => {
    const mySwiperProduction = new Swiper(n.querySelector('.production-slider'), {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 600,
        allowTouchMove: true,
        navigation: {
            prevEl: document.querySelector('.production-slider .nav-arrow-prev'),
            nextEl: document.querySelector('.production-slider .nav-arrow-next'),
        },
        thumbs: { // указываем на превью слайдер
            swiper: {
                el: n.querySelector('.production-thumb-slider'),      
                slidesPerView: 4,
                spaceBetween: 20,
                direction: 'vertical',
                speed: 600,
                watchSlidesProgress: true,
            }
        },
    });
});

new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});

let catalogBtn = document.querySelector('.header__menu');
let catalogMenu = document.querySelector('.header-catalog');
let catalogBtnClose = document.querySelector('.header-catalog__close');

catalogBtn.addEventListener('click', () => {
    catalogMenu.classList.add('active');
});
catalogBtnClose.addEventListener('click', () => {
    catalogMenu.classList.remove('active');
});