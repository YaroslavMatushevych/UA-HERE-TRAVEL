let obj = {
    quantitySlides : null,
    targetImg : null,
    divIndex : null,
    biggestHeight : 0,
    changedMediaFirst : 0,
    changedMediaSecond : 0,
    carousel : document.getElementById('slider-track'),
    slider : document.getElementById('slider'),
    slides : Array.prototype.slice.call(document.getElementsByClassName('get-inspired-slider-item')),
    src : ['img/get-inspired/photo-zoom-1.png','img/get-inspired/photo-zoom-2.png','img/get-inspired/photo-zoom-3.png','img/get-inspired/photo-zoom-4.png','img/get-inspired/photo-zoom-2.png','img/get-inspired/photo-zoom-3.png','img/get-inspired/photo-zoom-1.png','img/get-inspired/photo-zoom-4.png','img/get-inspired/photo-zoom-3.png','img/get-inspired/photo-zoom-1.png','img/get-inspired/photo-zoom-4.png','img/get-inspired/photo-zoom-2.png']
};

chooseMedia();

let slideWidth = document.querySelector('.get-inspired-slider-item').offsetWidth;
const margin = parseInt(getComputedStyle(obj.slides[0]).marginRight);
obj.carousel.style.width = `${(parseInt(slideWidth)+margin)*(12 + obj.quantitySlides*2)}px`;

const sliderInit= (slider) => {
    const slides =Array.prototype.slice.call(document.getElementsByClassName('get-inspired-slider-item'));
    slides.forEach((slide) => {
        if (slide.classList.contains('slide-active')) slide.classList.remove('slide-active');
    });
    const dots = Array.prototype.slice.call(document.getElementsByClassName("get-inspired-dots-dot"));
    dots.forEach((dot) => {
        if (dot.classList.contains('dot-active')) dot.classList.remove('dot-active');
    });
    dots[0].classList.add('dot-active');
    const firstSlide = obj.slides.filter(function (slide, i) {
        return i< obj.quantitySlides;
    });
    const lastSlide = obj.slides.filter(function (slide, i) {
        return i > obj.slides.length - obj.quantitySlides -1;
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
    slider.insertBefore(lastSlideClone,firstSlide[0]);
    slider.appendChild(firstSlideClone);
    firstSlide.forEach(function (slide) {
        slide.classList.add('slide-active');
    });
    slider.style.width = slideWidth * (document.querySelectorAll('.get-inspired-slider-item').length) + margin + 'px';
    slider.style.transform = `translateX(${-slideWidth*obj.quantitySlides}px)`;
};

function nextSlide() {
    obj.carousel.style.transition = '';
    const sliderItems = [].slice.call(document.querySelectorAll('.get-inspired-slider-item'));
    const currentSlide = sliderItems[sliderItems.indexOf(obj.slider.querySelectorAll('.slide-active')[obj.quantitySlides-1])];
    const currentItem = sliderItems.indexOf(obj.slider.querySelector('.slide-active'));
    let nextSlide = currentSlide.nextElementSibling;
    let nextSlideNextSibling = nextSlide.nextElementSibling;
    for (let i = 0; i< obj.quantitySlides-1; i++ ) {
        nextSlideNextSibling = nextSlideNextSibling.nextElementSibling;
    }
    obj.carousel.style.transform = `translateX(${-slideWidth * (currentItem + obj.quantitySlides)}px)`;
    obj.slides.forEach(function (slide) {
        if (slide.classList.contains('slide-active')) slide.classList.remove('slide-active');
    });
    if (!nextSlideNextSibling) {
        for (let i = 0; i< obj.quantitySlides; i++ ) {
            sliderItems[i + obj.quantitySlides].classList.add('slide-active');
        }
        setTimeout(function(){
            obj.carousel.style.transition = 'none';
            obj.carousel.style.transform = `translateX(${-slideWidth * obj.quantitySlides}px)`
        },500);
    } else {
        for (let i = 0; i < obj.quantitySlides; i++ ) {
            nextSlide.classList.add('slide-active');
            nextSlide = nextSlide.nextElementSibling;
        }
    }
}

function previousSlide() {
    obj.carousel.style.transition = '';
    const sliderItems = [].slice.call(document.querySelectorAll('.get-inspired-slider-item'));
    const currentSlide = sliderItems[sliderItems.indexOf(obj.slider.querySelector('.slide-active'))];
    const currentItem = sliderItems.indexOf(obj.slider.querySelector('.slide-active'));
    let previousSlide = currentSlide.previousElementSibling;
    let previousSlidePreviousSibling = previousSlide.previousElementSibling;
    for (let i = 0; i < obj.quantitySlides - 1; i++ ) {
        previousSlidePreviousSibling = previousSlidePreviousSibling.previousElementSibling;
    }
    obj.carousel.style.transform = `translateX(${-slideWidth * (currentItem - obj.quantitySlides)}px)`;
    obj.slides.forEach(function (slide) {
        if (slide.classList.contains('slide-active')) slide.classList.remove('slide-active');
    });
    currentSlide.classList.remove('slide-active');
    if (!previousSlidePreviousSibling) {
        for (let i = document.querySelectorAll('.get-inspired-slider-item').length - 2*obj.quantitySlides; i< document.querySelectorAll('.get-inspired-slider-item').length - obj.quantitySlides; i++ ) {
            sliderItems[i].classList.add('slide-active');
        }
        setTimeout(function(){
            obj.carousel.style.transition = 'none';
            obj.carousel.style.transform = `translateX(${-slideWidth*(document.querySelectorAll('.get-inspired-slider-item').length - 2*obj.quantitySlides)}px)`
        },500);
    } else {
        for (let i = document.querySelectorAll('.get-inspired-slider-item').length - 2*obj.quantitySlides; i< document.querySelectorAll('.get-inspired-slider-item').length - obj.quantitySlides; i++ ) {
            previousSlide.classList.add('slide-active');
            previousSlide = previousSlide.previousElementSibling;
        }
    }
}

function toggleActiveDot(direction) {
    const dots = Array.prototype.slice.call(document.getElementsByClassName("get-inspired-dots-dot"));
    const dotsPrevActive = document.getElementsByClassName("dot-active")[0];
    if (direction === 'next' && dotsPrevActive.nextElementSibling) {
        dotsPrevActive.classList.remove('dot-active');
        dotsPrevActive.nextElementSibling.classList.add('dot-active');
    }
    if (direction === 'next' && dots.indexOf(dotsPrevActive) === dots.length - 1) {
        dotsPrevActive.classList.remove('dot-active');
        dots[0].classList.add('dot-active');
    }
    if (direction === 'previous' && dotsPrevActive.previousElementSibling) {
        dotsPrevActive.classList.remove('dot-active');
        dotsPrevActive.previousElementSibling.classList.add('dot-active');
    }
    if (direction === 'previous' && dots.indexOf(dotsPrevActive) === 0) {
        dotsPrevActive.classList.remove('dot-active');
        dots[dots.length -1].classList.add('dot-active');
    }
}

function getNodeIndex(elm){
    let attr =Array.prototype.slice.call(document.getElementsByClassName('get-inspired-slider-item-image')).map(function (image) {
        return image.getAttribute('src');
    });
    let attrFinal = attr.slice(obj.quantitySlides, obj.slides.length + obj.quantitySlides);
    return attrFinal.indexOf(elm.getAttribute('src'));
}

function replaceImg(src) {
    document.querySelector('.get-inspired-zoom-box-image').setAttribute('src', src);
}

function toggleFadeInOut() {
    document.querySelector('.get-inspired-overlay').classList.toggle('get-inspired-fadeInOut');
    document.querySelector('.get-inspired-zoom-box').classList.toggle('get-inspired-fadeInOut');
}

function removeClones(quantity) {
    let slides =Array.prototype.slice.call(document.getElementsByClassName('get-inspired-slider-item'));
    for (let i = slides.length -1; i > slides.length - quantity -1; i--){
        obj.carousel.removeChild(slides[i]);
    }
    for (let i = quantity-1; i > -1; i--){
        obj.carousel.removeChild(slides[i]);
    }
}

function removeDots (from, to) {
    for (let i= to; i> from; i--) {
        document.querySelector('.get-inspired-dots').removeChild(document.querySelectorAll('.get-inspired-dots-dot')[i]);
    }
}

function chooseMedia() {
    if (window.innerWidth <= 578 && !obj.changedMediaSecond) {
        obj.quantitySlides = 1;
        obj.changedMediaFirst = false;
        obj.changedMediaSecond = true;
        for (let i = 0; i < 9; i++) {
            let dot = document.createElement('span');
            dot.classList.add('get-inspired-dots-dot');
            document.querySelector('.get-inspired-dots').appendChild(dot);
        }
        document.querySelector('.get-inspired-arrow-left').style.display = 'none';
        document.querySelector('.get-inspired-arrow-right').style.display = 'none';
        document.querySelector('.get-inspired-overlay').style.display = 'none';
    }
    if (window.innerWidth <= 768 && window.innerWidth >= 579 && !obj.changedMediaFirst) {
        obj.quantitySlides = 3;
        obj.changedMediaFirst = true;
        obj.changedMediaSecond = false;
        let dot = document.createElement('span');
        dot.classList.add('get-inspired-dots-dot');
        document.querySelector('.get-inspired-dots').appendChild(dot);
    }
    if (window.innerWidth >= 768) {
        obj.quantitySlides = 4;
        obj.changedMediaFirst = false;
        obj.changedMediaSecond = false;
    }
    obj.biggestHeight = 0;
    let items = Array.prototype.slice.call(document.querySelectorAll('.get-inspired-slider-item'));
    items.forEach(function (slide) {
        slide.style.width = `${window.innerWidth/obj.quantitySlides}px`;
        setTimeout(()=> {
            if (parseInt(getComputedStyle(slide).height) > obj.biggestHeight) {
                obj.biggestHeight = parseInt(getComputedStyle(slide).height);
            }
        },500);
        setTimeout(()=> {
            obj.slider.style.height = `${obj.biggestHeight}px`;
        },500);
        slideWidth =slide.style.width;
        obj.carousel.style.width = `${(parseInt(slideWidth)+margin)*(12 + obj.quantitySlides*2)}px`;
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
    handleTouchMove(e) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }
        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;
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
        this.element.addEventListener('touchmove', function(e) {
            this.handleTouchMove(e);
        }.bind(this), false);
    }
}

document.addEventListener('click' ,function (e) {
    let target = e.target;
    if (target.getAttribute('data-action') === "slideRight"){
        nextSlide();
        toggleActiveDot('next');
    }
    if (target.getAttribute('data-action') === "slideLeft") {
        previousSlide();
        toggleActiveDot('previous');
    }
    if (target.classList.contains('get-inspired-dots-dot')) {
        const dots = Array.prototype.slice.call(document.getElementsByClassName("get-inspired-dots-dot"));
        const dotsPrevActive = document.querySelector(".dot-active");
        let step = Math.abs(dots.indexOf(dotsPrevActive) - dots.indexOf(target));
        if (dots.indexOf(dotsPrevActive) - dots.indexOf(target) < 0) {
            for (let i = 0; i < step; i++) {
                nextSlide();
                toggleActiveDot('next');
            }
        }
        if (dots.indexOf(dotsPrevActive) - dots.indexOf(target) > 0) {
            for (let i = 0; i < step; i++) {
                previousSlide();
                toggleActiveDot('previous');
            }
        }
    }
    if (target.classList.contains('get-inspired-slider-item-image')) {
        obj.divIndex = getNodeIndex(target);
        obj.targetImg = obj.src[obj.divIndex];
        replaceImg(obj.targetImg);
        toggleFadeInOut();
    }
    if (target.classList.contains('get-inspired-overlay') || target.classList.contains('get-inspired-zoom-close')) {
        toggleFadeInOut();
        setTimeout(function () {
            replaceImg('#');
        },400)
    }
    if (target.getAttribute('data-action') === "bigSlideLeft") {
        if (obj.divIndex > 0) {
            obj.targetImg = obj.src[obj.divIndex - 1];
            obj.divIndex --;
        }
        else {
            obj.targetImg = obj.src[obj.slides.length -1];
            obj.divIndex = obj.slides.length -1;
        }
        replaceImg(obj.targetImg);
    }
    if (target.getAttribute('data-action') === "bigSlideRight"  || target.id === 'zoom-image') {
        if ((obj.divIndex + 1) < obj.slides.length) {
            obj.targetImg = obj.src[obj.divIndex + 1];
            obj.divIndex ++;
        }
        else {
            obj.targetImg =obj.src[0];
            obj.divIndex=0;
        }
        replaceImg(obj.targetImg);
    }
});

window.addEventListener('resize', () => {
    let slides = Array.prototype.slice.call(document.getElementsByClassName('get-inspired-slider-item'));
    if (window.innerWidth >= 768) {
        if (obj.quantitySlides === 3 && slides.length < 19) {
            setTimeout(() => {
                removeClones(3);
                sliderInit(obj.carousel);
                removeDots(1, 2);
            }, 10);
        }
        if (obj.quantitySlides === 1 && slides.length < 18) {
            setTimeout(() => {
                removeClones(1);
                sliderInit(obj.carousel);
                removeDots(2, document.querySelectorAll('.get-inspired-dots-dot').length - 1);
                document.querySelector('.get-inspired-arrow-left').style.display = 'block';
                document.querySelector('.get-inspired-arrow-right').style.display = 'block';
                document.querySelector('.get-inspired-overlay').style.display = 'flex';
            }, 10);
        }
    }
    if (window.innerWidth <= 768 && window.innerWidth >= 579) {
        if (obj.quantitySlides === 4) {
            setTimeout(()=> {
                removeClones(4);
                sliderInit(obj.carousel);
            },10);
        }
        if (obj.quantitySlides === 1) {
            setTimeout(()=> {
                removeClones(1);
                sliderInit(obj.carousel);
                removeDots(3, [...document.querySelectorAll('.get-inspired-dots-dot')].length - 1);
                document.querySelector('.get-inspired-arrow-left').style.display = 'block';
                document.querySelector('.get-inspired-arrow-right').style.display = 'block';
                document.querySelector('.get-inspired-overlay').style.display = 'flex';
            },10);
        }
    }
    if (window.innerWidth <= 578) {
        let slides = Array.prototype.slice.call(document.getElementsByClassName('get-inspired-slider-item'));
        if (obj.quantitySlides === 3 && slides.length > 14){
            setTimeout(()=> {
                removeClones(3);
                sliderInit(obj.carousel);
                removeDots(1,2);
            },10);
        }
        if (obj.quantitySlides === 4 && slides.length === 20) {
            setTimeout(()=> {
                removeClones(4);
                sliderInit(obj.carousel);
            },10);
        }
    }
    chooseMedia();
    slideWidth = window.innerWidth/obj.quantitySlides;
    obj.carousel.style.width = `${(parseInt(slideWidth)+margin)*(12 + obj.quantitySlides*2)}px`;
    obj.carousel.style.transform = `translateX(${-slideWidth*obj.quantitySlides}px)`;
    setTimeout(()=> {
        obj.slider.style.height = obj.biggestHeight;
    },500);
});

(new Swipe(obj.slider)).onLeft(function() {
    nextSlide();
    toggleActiveDot('next');
}).run();
(new Swipe(obj.slider)).onRight(function() {
    previousSlide();
    toggleActiveDot('previous');
}).run();

sliderInit(obj.carousel);