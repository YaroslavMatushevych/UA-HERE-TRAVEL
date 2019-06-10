const burgerButton = document.getElementById('burgerIcon');
const bItems = document.getElementById('burgerItems');
const children = document.querySelectorAll('div.navbar, a.anchors-a, a.anchors-a-active, img.logo, div.nav-wrapper, div.block a.s-anchors, div.social-media');

burgerButton.addEventListener('click',function () {
    for ( let i = 0; i<children.length; i++){
        let child = children[i];
        child.classList.toggle('opened');
    }
    burgerButton.classList.toggle('change');
    bItems.classList.toggle('opened');
});

bItems.addEventListener('click',function () {
    for ( let i = 0; i<children.length; i++){
        let child = children[i];
        child.classList.toggle('opened');
    }
    burgerButton.classList.toggle('change');
    bItems.classList.toggle('opened');
});

(function() {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();


let menuHeight = $('.navbar').height();
let scrollOffsetTop = menuHeight;
$('.burger-items>a').click((e) => {
  if (($(window).width()) < 767){
    let scrollOffsetTop = 0;
  }
    let clicked = $(e.target).index();
    switch (clicked) {
        case 0:
            $(document.documentElement).animate({
                scrollTop: $('#about-us').offset().top - scrollOffsetTop
            }, 1000);
            break;
        case 1:
            $(document.documentElement).animate({
                scrollTop: $('#free-guide').offset().top - scrollOffsetTop
            }, 1000);
            break;
        case 2:
            $(document.documentElement).animate({
                scrollTop: $('#routes').offset().top - scrollOffsetTop
            }, 1000);
            break;
        case 3:
            $(document.documentElement).animate({
                scrollTop: $('#others-say').offset().top - scrollOffsetTop
            }, 1000);
            break;
        case 4:
            $(document.documentElement).animate({
                scrollTop: $('#slider').offset().top - scrollOffsetTop
            }, 1000);
            break;
        case 5:
            $(document.documentElement).animate({
                scrollTop: $('#get-in-touch').offset().top - scrollOffsetTop
            }, 1000);
            break;
        case 6:
            $(document.documentElement).animate({
                scrollTop: $('#individual-tour').offset().top - scrollOffsetTop
            }, 1000);
            break;
        default:
            $(document.documentElement).animate({
                scrollTop: $(document.body).offset().top
            }, 1000);
    }
});

$('.free-guide-btn').click(function() {
  if (($(window).width()) < 767){
    let scrollOffsetTop = 0;
  };
  $(document.documentElement).animate({
      scrollTop: $('#free-guide').offset().top - scrollOffsetTop
  }, 1000);
});
