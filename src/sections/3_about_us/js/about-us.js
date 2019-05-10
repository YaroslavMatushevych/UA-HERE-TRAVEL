const sideBarNav = document.getElementsByClassName("sidebar-nav")[0];
const sideBarNavItem = document.getElementsByClassName("sidebar-nav-item");
const personContainer = document.getElementsByClassName("person-container");
let activePersonSlide = document.getElementsByClassName("person-slide_active");
let activeColor = document.getElementsByClassName("sidebar-nav-item_active");


personContainer[1].style.display = "flex";

function sliderScroll(e) {
    activePersonSlide = document.getElementsByClassName("person-slide_active");
    activeColor = document.getElementsByClassName("sidebar-nav-item_active");

    if (e.target.classList.contains("sidebar-nav-item")) {

        activeColor[0].classList.remove("sidebar-nav-item_active");

        activePersonSlide[0].classList.remove("person-slide_active");

        for (let k = 0; k < personContainer.length; k++) {
            personContainer[k].style.display = "none";
        }

        e.target.classList.add("sidebar-nav-item_active");

        for (let p = 0; p < sideBarNavItem.length; p++) {
            if (sideBarNavItem[p].classList.contains("sidebar-nav-item_active")) {
                personContainer[p].style.display = "flex";
                personContainer[p].classList.add("person-slide_active");
                break;
            }
        }
    }
}

sideBarNav.addEventListener("click", sliderScroll);


$('.next').click(function() {
    let personName = $('.person-desc-name');
    let currentSlide = $('.person-slide_active');
    let nextSlide = currentSlide.next();
    let firstSlideText = $(personName).first().text();
    let lastSlideText = $(personName).last().text();
    let currentDot = $('.active-dot');
    let nextDot= currentDot.next();

    if(!nextSlide.length) {
        nextSlide = $('.person-container').first();
    }

    if(nextDot.length == 0){
        nextDot = $('.dot').first()
    }

    currentSlide.fadeOut(0).removeClass('person-slide_active');
    nextSlide.fadeIn(0).addClass('person-slide_active');

    let activeSlide = $('.person-slide_active');
    console.log($(activeSlide).next().length);

    let prevName = $(activeSlide).prev().find(personName).text();
    let nextName = $(activeSlide).next().find(personName).text();

    $('.prev-name').text(prevName);
    $('.next-name').text(nextName);

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    if($(activeSlide).prev().length === 0){
        $('.prev-name').text(lastSlideText);
    }
    if($(activeSlide).next().length === 0){
        $('.next-name').text(firstSlideText);
    }
});
$('.previous').click(function(){
    let personName = $('.person-desc-name');
    let currentSlide = $('.person-slide_active');
    let prevSlide = currentSlide.prev();
    let firstSlideText = $(personName).first().text();
    let lastSlideText = $(personName).last().text();
    let currentDot= $('.active-dot');
    let prevDot= currentDot.prev();

    if(prevSlide.length == 0){
        prevSlide = $('.person-container').last();
    }

    if(prevDot.length==0){
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(0).removeClass('person-slide_active');
    prevSlide.fadeIn(0).addClass('person-slide_active');

    let activeSlide = $('.person-slide_active');

    let prevName = $(activeSlide).prev().find(personName).text();
    let nextName = $(activeSlide).next().find(personName).text();

    $('.prev-name').text(prevName);
    $('.next-name').text(nextName);

    if($(activeSlide).prev().prev().length == 0){
        $('.prev-name').text(lastSlideText);
    }
    if($(activeSlide).next().next().length == 0){
        $('.next-name').text(firstSlideText);
    }

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot')
});

$('.dot').click(function () {
    let currentSlide = $('.person-slide_active');
    let currentDot= $('.active-dot');
    let index = $('.dot').index(this);

    currentSlide.fadeOut(0).removeClass('person-slide_active');
    currentDot.removeClass('active-dot');

    $(this).addClass('active-dot');
    let nextSlide = $('.person-container').eq(index);
    nextSlide.fadeIn(0).addClass('person-slide_active')

});

window.addEventListener('resize', function(){
    if ($(window).width() < 481) {
        $(".person-photo").attr("src", "../../img/about-us/TeamKlimenko410px.png");
    }
    if ($(window).width() >= 481) {
        $(".person-photo").attr("src", "../../img/about-us/TeamKlimenko1.png");
    }
});
    if ($(window).width() < 481) {
        $(".person-photo").attr("src", "../../img/about-us/TeamKlimenko410px.png");
    }

