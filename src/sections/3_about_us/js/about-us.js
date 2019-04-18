let activeColor = document.getElementsByClassName("sidebar__nav-item_active");
let navItemArrow = document.getElementsByClassName("nav-item__arrow");
let sideBarNav = document.getElementById("sidebar__nav");
let sideBarNavItem = document.getElementsByClassName("sidebar__nav-item");
let personContainer = document.getElementsByClassName("person__container");


navItemArrow[1].style.display = "inline-block";
personContainer[1].style.display = "flex";

sideBarNav.addEventListener("click", function (e) {

    activeColor = document.getElementsByClassName("sidebar__nav-item_active");

    if (e.target.classList.contains("sidebar__nav-item")) {

        for (let i = 0; i < activeColor.length; i++) {
            activeColor[i].classList.remove("sidebar__nav-item_active");
        }

        for (let l = 0; l < navItemArrow.length; l++) {
            navItemArrow[l].style.display = "none";
        }

        for (let k = 0; k < personContainer.length; k++) {
            personContainer[k].style.display = "none";
        }

        e.target.classList.add("sidebar__nav-item_active");
        e.target.firstChild.style.display = "inline-block";

        for (let i = 0; i < sideBarNavItem.length; i++) {
            if (sideBarNavItem[i].classList.contains("sidebar__nav-item_active")) {
                personContainer[i].style.display = "flex";
                return true;
            }
        }
    }
});

$('.arrow-next, .next').click(function() {

    let currentSlide = $('.person__active-slide');
    let nextSlide = currentSlide.next();
    let prevSlide = currentSlide.prev();
    let firstSlideText = $('.person-desc__name').first().text();
    let lastSlideText = $('.person-desc__name').last().text();
    let nextName = nextSlide.next().find('.person-desc__name').text();
    let prevName = prevSlide.prev().find('.person-desc__name').text();
    let currentDot = $('.active-dot');
    let nextDot= currentDot.next();

    $('.next-name').text(nextName);
    $('.prev-name').text(prevName);

    if(nextSlide.length == 0 ) {
        nextSlide = $('.person__container').first();
    }

    if(nextDot.length == 0){
        nextDot = $('.dot').first()
    }

    currentSlide.fadeOut(0).removeClass('person__active-slide');
    nextSlide.fadeIn(0).addClass('person__active-slide');

    // if($(".person__container").last().hasClass('person__active-slide')) {
    //     $('.next-name').text(firstSlideText);
    // }
    // if($(".person__container").first().hasClass('person__active-slide')){
    //     $('.prev-name').text(lastSlideText);
    // }

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot')
});
$('.arrow-prev, .previous').click(function(){

    let currentSlide = $('.person__active-slide');
    let prevSlide = currentSlide.prev();
    let nextSlide = currentSlide.next();
    let firstSlideText = $('.person-desc__name').first().text();
    let lastSlideText = $('.person-desc__name').last().text();
    let prevName = prevSlide.prev().find('.person-desc__name').text();
    let nextName = nextSlide.next().find('.person-desc__name').text();
    let currentDot= $('.active-dot');
    let prevDot= currentDot.prev();

    $('.prev-name').text(prevName);
    $('.next-name').text(nextName);

    if(prevSlide.length == 0){
        prevSlide = $('.person__container').last();
    }

    if(prevDot.length==0){
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(0).removeClass('person__active-slide');
    prevSlide.fadeIn(0).addClass('person__active-slide');

    // if($(".person__container").last().hasClass('person__active-slide')) {
    //     $('.next-name').text(firstSlideText);
    // }
    // if($(".person__container").first().hasClass('person__active-slide')){
    //     $('.prev-name').text(lastSlideText);
    // }

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot')
});

$('.dot').click(function () {
    let currentSlide = $('.person__active-slide');
    let currentDot= $('.active-dot');
    let index = $('.dot').index(this);

    currentSlide.fadeOut(0).removeClass('person__active-slide');
    currentDot.removeClass('active-dot');

    $(this).addClass('active-dot');
    let nextSlide = $('.person__container').eq(index);
    nextSlide.fadeIn(0).addClass('person__active-slide')

});


    if ($(window).width() < 481) {
        $(".person-photo").attr("src", "../../img/about-us/TeamKlimenko410px.png");
    }

