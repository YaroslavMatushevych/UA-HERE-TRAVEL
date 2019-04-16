const carousel = document.querySelector('.get-inspired-wrapper-slider');
const items = [...document.querySelectorAll('.get-inspired-wrapper-slider-image')];
const wrapperWidth = document.querySelector('.get-inspired-wrapper').offsetWidth;
const margin = parseInt(getComputedStyle(items[0]).marginRight);
const carouselWidth = wrapperWidth*3 + margin*4;
let carouselBlock = document.getElementsByClassName('slider-block');
let offset = -wrapperWidth- margin;
let counterBlocks = 1;
let targetImg = null;
let divIndex = null;
carousel.style.width = `${carouselWidth}px`;
let cloneStart = document.getElementsByClassName('slider-block')[0].cloneNode(true);
let cloneEnd = document.getElementsByClassName('slider-block')[carouselBlock.length - 1].cloneNode(true);
carousel.appendChild(cloneStart);
carousel.insertBefore(cloneEnd, carousel.children[0]);
carousel.style.transform = `translateX(${offset}px)`;

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

document.addEventListener('click' ,function (e) {
    let target = e.target;
    if (target.getAttribute('data-action') === "slideRight"){
        counterBlocks++;
        offset -= wrapperWidth + margin;
        carousel.style.transition = 'all 0.4s linear';
        carousel.style.transform = `translateX(${offset}px)`;
        if(counterBlocks === carouselBlock.length - 1){
            setTimeout(function () {
                counterBlocks = 1;
                offset = 0;
                carousel.style.transition = 'none';
                carousel.style.transform = 'none';
            }, 1100);
        }
        if (counterBlocks < 3) toggleActiveDot();
    }
    if (target.getAttribute('data-action') === "slideLeft") {
        counterBlocks--;
        offset += wrapperWidth + margin;
        carousel.style.transition = 'all 0.4s linear';
        carousel.style.transform = `translateX(${offset}px)`;
        if(counterBlocks === 0){
            setTimeout(function () {
                counterBlocks = carouselBlock.length - 2;
                offset = -(wrapperWidth + margin) * (carouselBlock.length - 1);
                carousel.style.transition = 'none';
                carousel.style.transform = `translateX(${offset}px)`;
            }, 1100);
        }
        if (counterBlocks > 0)toggleActiveDot();
    }
    if (target.classList.contains('get-inspired-dots-dot')) {
        let counterDots = +target.getAttribute('data-action').slice(3);
        let step = Math.abs(counterDots -counterBlocks);
        if (counterDots !== counterBlocks) {
            offset = (counterDots > counterBlocks) ? offset -(wrapperWidth+margin)*step : offset +(wrapperWidth+margin)*step;
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