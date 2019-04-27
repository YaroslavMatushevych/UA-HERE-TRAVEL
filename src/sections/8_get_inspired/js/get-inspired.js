let quantitySliders;
let changedMediaFirst = false;
let changedMediaSecond = false;
chooseMedia();
const carousel = document.querySelector('.get-inspired-wrapper-slider');
const slider = document.querySelector('.get-inspired-wrapper');
const items = [...document.querySelectorAll('.get-inspired-wrapper-slider-image')];
const wrapperWidth = document.querySelector('.get-inspired-wrapper').offsetWidth;
const slideWidth = document.querySelector('.get-inspired-wrapper-slider-image').offsetWidth;
const margin = parseInt(getComputedStyle(items[0]).marginRight);
const carouselWidth = wrapperWidth*3 + margin*4;
let offset = -wrapperWidth;
let counterBlocks = 1;
let targetImg = null;
let divIndex = null;

carousel.style.width = `${slideWidth*quantitySliders}px`;

function toggleFadeInOut() {
    document.querySelector('.get-inspired-wrapper-overlay').classList.toggle('get-inspired-fadeInOut');
    document.querySelector('.get-inspired-wrapper-box').classList.toggle('get-inspired-fadeInOut');
}

function getNodeIndex( elm ){
    let attr =[...document.querySelectorAll('.get-inspired-wrapper-slider-image-photo')].map(function (image) {
        return image.getAttribute('src');
    });
    return attr.indexOf(elm.getAttribute('src'));
}

function replaceImg(src) {
    document.querySelector('.get-inspired-wrapper-box-zoom-image').setAttribute('src', src);
}

function getSrc(index) {
    return items[index].children[0].getAttribute('src');
}

function toggleActiveDot() {
    document.querySelectorAll('.get-inspired-dots-dot').forEach(function (dot) {
        if (dot.classList.contains('dot-active')) dot.classList.remove('dot-active');
        dot.style.backgroundColor = 'rgb(255, 255, 255)';
    });
    document.querySelectorAll('.get-inspired-dots-dot')[counterBlocks-1].style.backgroundColor = 'rgb(255, 208, 8)';
}
window.addEventListener('resize', chooseMedia);
document.addEventListener('click' ,function (e) {
    let target = e.target;
    if (target.getAttribute('data-action') === "slideRight"){
        nextSlide();
        counterBlocks++;
        if (counterBlocks === quantitySliders) counterBlocks = 1;
        toggleActiveDot();
    }
    if (target.getAttribute('data-action') === "slideLeft") {
        previousSlide();
        counterBlocks--;
        if (counterBlocks === 0) counterBlocks = quantitySliders-1;
        toggleActiveDot();
    }
    if (target.classList.contains('get-inspired-dots-dot')) {
        let counterDots = +target.getAttribute('data-action').slice(3);
        let step = Math.abs(counterDots -counterBlocks);
        if (counterDots !== counterBlocks) {
            offset = (counterDots > counterBlocks) ? offset -(slideWidth*quantitySliders)*step : offset +(slideWidth*quantitySliders)*step;
            carousel.style.transform = `translateX(${offset}px)`;
            counterBlocks= counterDots;
            if (!target.classList.contains('active')) toggleActiveDot();
        }
    }
    if (target.classList.contains('get-inspired-wrapper-slider-image-photo')) {
        targetImg = target.previousElementSibling.getAttribute('src');
        divIndex = getNodeIndex(target);
        replaceImg(targetImg);
        toggleFadeInOut();
    }
    if (target.classList.contains('get-inspired-wrapper-overlay') || target.classList.contains('get-inspired-wrapper-box-zoom-close')) {
        toggleFadeInOut();
        setTimeout(function () {
            replaceImg('#');
        },400)
    }

    if (target.getAttribute('data-action') === "bigSlideLeft") {
        if (divIndex > 0) {
            targetImg = getSrc(divIndex - 1);
            divIndex --;
        }
        else {
            targetImg = getSrc(items.length -1);
            divIndex = items.length -1;
        }
        replaceImg(targetImg);
    }
    if (target.getAttribute('data-action') === "bigSlideRight") {
        if ((divIndex + 1) < items.length) {
            targetImg = getSrc(divIndex + 1);
            divIndex ++;
        }
        else {
            targetImg =getSrc(0);
            divIndex=0;
        }
        replaceImg(targetImg);
    }
});
document.addEventListener('dblclick',function (e) {
    let target = e.target;
    console.log(target);
    if (target.id === 'zoom-image' || target.classList.contains('get-inspired-wrapper-overlay')) {
        console.log('zoom');
        toggleFadeInOut();
        setTimeout(function () {
            replaceImg('#');
        },400)
    }
});
const sliderInit= (slider) => {
    const firstSlide = items.filter(function (slide, i) {
        return i< quantitySliders;
    });
    const lastSlide = items.filter(function (slide, i) {
        return i > slider.querySelectorAll('.get-inspired-wrapper-slider-image').length - quantitySliders -1;
    });
    const firstSlideClone = document.createDocumentFragment();
    firstSlide.forEach(function (slide) {
        let cloneSlide = slide.cloneNode(true);
        firstSlideClone.appendChild(cloneSlide);
    });
    const lastSlideClone = document.createDocumentFragment();
    lastSlide.forEach(function (slide) {
        let cloneSlide = slide.cloneNode(true);
        lastSlideClone.appendChild(cloneSlide);
    });
    carousel.insertBefore(lastSlideClone,firstSlide[0]);
    carousel.appendChild(firstSlideClone);
    firstSlide.forEach(function (slide) {
        slide.classList.add('slide-active');
    });
    carousel.style.width = slideWidth * (document.querySelectorAll('.get-inspired-wrapper-slider-image').length) + 'px';
    carousel.style.transform = `translateX(${-slideWidth*quantitySliders}px)`;
};

function nextSlide() {
    carousel.style.transition = '';
    const sliderItems = [].slice.call(document.querySelectorAll('.get-inspired-wrapper-slider-image'));
    const currentSlide = sliderItems[sliderItems.indexOf(slider.querySelectorAll('.slide-active')[quantitySliders-1])];
    const currentItem = sliderItems.indexOf(slider.querySelector('.slide-active'));
    let nextSlide = currentSlide.nextElementSibling;
    let nextSlideNextSibling = nextSlide.nextElementSibling;
    for (let i = 0; i<quantitySliders-1; i++ ) {
        nextSlideNextSibling = nextSlideNextSibling.nextElementSibling;
    }
    carousel.style.transform = `translateX(${-slideWidth * (currentItem + quantitySliders)}px)`;
    items.forEach(function (slide) {
        if (slide.classList.contains('slide-active')) slide.classList.remove('slide-active');
    });
    if (!nextSlideNextSibling) {
        for (let i = 0; i<quantitySliders; i++ ) {
            sliderItems[i+quantitySliders].classList.add('slide-active');
        }
        setTimeout(function(){
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-slideWidth*quantitySliders}px)`
        },500);
    } else {
        for (let i = 0; i<quantitySliders; i++ ) {
            nextSlide.classList.add('slide-active');
            nextSlide = nextSlide.nextElementSibling;
        }
    }
}
function previousSlide() {
    carousel.style.transition = '';
    const sliderItems = [].slice.call(document.querySelectorAll('.get-inspired-wrapper-slider-image'));
    const currentSlide = sliderItems[sliderItems.indexOf(slider.querySelector('.slide-active'))];
    const currentItem = sliderItems.indexOf(slider.querySelector('.slide-active'));
    let previousSlide = currentSlide.previousElementSibling;
    let previousSlidePreviousSibling = previousSlide.previousElementSibling;
    for (let i = 0; i<quantitySliders-1; i++ ) {
        previousSlidePreviousSibling = previousSlidePreviousSibling.previousElementSibling;
    }
    carousel.style.transform = `translateX(${-slideWidth * (currentItem - quantitySliders)}px)`;
    items.forEach(function (slide) {
        if (slide.classList.contains('slide-active')) slide.classList.remove('slide-active');
    });
    currentSlide.classList.remove('slide-active');
    if (!previousSlidePreviousSibling) {
        for (let i = document.querySelectorAll('.get-inspired-wrapper-slider-image').length - 2*quantitySliders; i< document.querySelectorAll('.get-inspired-wrapper-slider-image').length -quantitySliders; i++ ) {
            sliderItems[i].classList.add('slide-active');
        }
        setTimeout(function(){
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-slideWidth*quantitySliders*3}px)`
        },500);
    } else {
        for (let i = document.querySelectorAll('.get-inspired-wrapper-slider-image').length - 2*quantitySliders; i< document.querySelectorAll('.get-inspired-wrapper-slider-image').length -quantitySliders; i++ ) {
            previousSlide.classList.add('slide-active');
            previousSlide = previousSlide.previousElementSibling;
        }
    }
}

function chooseMedia() {
    if (window.innerWidth <= 578 && !changedMediaSecond) {
        quantitySliders = 1;
        changedMediaFirst = false;
        changedMediaSecond = true;
        document.querySelector('.get-inspired-dots').remove();
        document.querySelector('.get-inspired-wrapper-arrow-left').style.display = 'none';
        document.querySelector('.get-inspired-wrapper-arrow-right').style.display = 'none';
    }
    if (window.innerWidth <= 768 && window.innerWidth >= 579 && !changedMediaFirst) {
        quantitySliders = 3;
        changedMediaFirst = true;
        changedMediaSecond = false;
        let dot = document.createElement('span');
        dot.dataset.action = "dot4";
        dot.classList.add('get-inspired-dots-dot');
        document.querySelector('.get-inspired-dots').appendChild(dot);
    }
    if (window.innerWidth >= 768) {
        quantitySliders = 4;
        changedMediaFirst = false;
        changedMediaSecond = false;
    }
    document.querySelectorAll('.get-inspired-wrapper-slider-image').forEach(function (slide) {
        slide.style.width = `${window.innerWidth/quantitySliders}px`;
    });
}

class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);
    }
    onLeft(callback) {
        this.onLeft = callback;
        return this;
    }
    onRight(callback) {
        this.onRight = callback;
        return this;
    }
    onUp(callback) {
        this.onUp = callback;
        return this;
    }
    onDown(callback) {
        this.onDown = callback;
        return this;
    }
    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;
        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }
        this.xDown = null;
        this.yDown = null;
    }
    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt);
        }.bind(this), false);
    }
}

(new Swipe(document.getElementById('wrapper'))).onLeft(function() {
    nextSlide();
}).run();
(new Swipe(document.getElementById('wrapper'))).onRight(function() {
    previousSlide();
}).run();


sliderInit(slider);