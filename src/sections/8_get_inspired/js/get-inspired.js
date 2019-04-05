const carousel = document.querySelector('.slider');
const wrapper = document.querySelector('.wrapper');
const lightbox = document.querySelector('.light-box');
const overlay = document.querySelector('.overlay');
const items = [...document.querySelectorAll('.gallery-image')];
const images = [...document.querySelectorAll('.gallery-image-photo')];
const wrapperWidth = wrapper.offsetWidth;
const dots = [...document.querySelectorAll('.gallery-dots-dot')];
const margin = +getComputedStyle(document.querySelector('.gallery-image')).marginRight.slice(0,2);
const imgSources = [
    'img/get-inspired/gal1.jpg',
    'img/get-inspired/gal2.jpg',
    'img/get-inspired/gal3.jpg',
    'img/get-inspired/gal4.jpg',
    'img/get-inspired/gal5.jpg',
    'img/get-inspired/gal6.jpg',
    'img/get-inspired/gal7.jpg',
    'img/get-inspired/gal8.jpg',
    'img/get-inspired/gal9.jpg',
    'img/get-inspired/gal10.jpg',
    'img/get-inspired/gal11.jpg',
    'img/get-inspired/gal12.jpg'
];
let offset = 0;
let counterBlocks = 1;
let divIndex =null;
let targetImg =null;
let imgs = [];
let carouselWidth = wrapperWidth*4 + margin*3;
let quantityBlocks = Math.floor(carouselWidth/wrapperWidth);
carousel.style.width = `${carouselWidth}px`;
for (let i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
}
function toggleActive(counter) {
    dots[counter].classList.toggle('active');
    dots[counter-1].classList.toggle('active');
}
function getNodeIndex( elm ){
    let attr =images.map(function (image) {
        return image.getAttribute('src');
    });
    return attr.indexOf(elm.getAttribute('src'));
}
function replaceImg(src) {
    document.querySelector('.light-box-image').setAttribute('src', src);
}

function getHref(index) {
    return items[index].children[0].getAttribute('href');
}

document.addEventListener('click' ,function (e) {
    let target = e.target;
    if (target.getAttribute('data-action') === "slideRight" && counterBlocks <quantityBlocks) {
        toggleActive(counterBlocks);
        counterBlocks++;
        offset -= wrapperWidth+margin;
        carousel.style.transform = `translateX(${offset}px)`;
    }
    if (target.getAttribute('data-action') === "slideLeft" && counterBlocks >1 ) {
        counterBlocks--;
        toggleActive(counterBlocks);
        offset += wrapperWidth+margin;
        carousel.style.transform = `translateX(${offset}px)`;
    }
    if (target.classList.contains('gallery-dots-dot')) {
        let counterDots = +target.getAttribute('data-action').slice(3);
        let step = Math.abs(counterDots -counterBlocks);
        dots[counterBlocks-1].classList.toggle('active');
        if (counterDots !== counterBlocks) {
            offset = (counterDots > counterBlocks) ? offset -(wrapperWidth+margin)*step : offset +(wrapperWidth+margin)*step;
            carousel.style.transform = `translateX(${offset}px)`;
            counterBlocks= counterDots;
            dots[counterBlocks-1].classList.toggle('active');
        }
    }
    if (target.classList.contains('gallery-image-photo')) {
        e.preventDefault();
        targetImg = target.closest('a').getAttribute('href');
        divIndex = getNodeIndex(target);
        replaceImg(targetImg);
        overlay.classList.toggle('fadeInOut');
        lightbox.classList.toggle('fadeInOut');
    }
    if (target.classList.contains('overlay')) {
        overlay.classList.toggle('fadeInOut');
        lightbox.classList.toggle('fadeInOut');
        replaceImg('#');
    }

    if (target.getAttribute('data-action') === "bigSlideLeft" && (divIndex) > 0) {
        targetImg = getHref(divIndex - 1);
        divIndex --;
        replaceImg(targetImg);
    }
    if (target.getAttribute('data-action') === "bigSlideRight" && (divIndex + 1) < items.length) {
        targetImg = getHref(divIndex + 1);
        divIndex ++;
        replaceImg(targetImg);
    }
});