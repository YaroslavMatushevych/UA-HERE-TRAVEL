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

$('.arrow-next').click(function() {
    //creating the variables so that we can target them in jQuery
    let currentSlide = $('.person__active-slide');
    let nextSlide = currentSlide.next();
    let currentDot = $('.active-dot');
    let nextDot= currentDot.next();
    //if the current slide is the last, make the next slide the first one
    if(nextSlide.length == 0 ) {
        nextSlide = $('.person__container').first() ;
    }
    //if the next dot is the last, make the next dot the first one
    if(nextDot.length == 0){
        nextDot = $('.dot').first()
    }
    //when the arrow is clicked, fade out the current img and fade in the next one
    currentSlide.fadeOut(600).removeClass('person__active-slide');
    nextSlide.fadeIn(600).addClass('person__active-slide');
    //when the arrow is clicked, remove the active class from the current dot and add it to the next one
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot')
});
$('.arrow-prev').click(function(){
    //creating the variables so that we can target them in jQuery
    let currentSlide = $('.person__active-slide');
    let prevSlide = currentSlide.prev();
    let currentDot= $('.active-dot');
    let prevDot= currentDot.prev();
    //if the current slide is the last, make the prev slide the last one
    if(prevSlide.length == 0){
        prevSlide = $('.person__container').last();
    }
    //if the current dot is the last, make the prev dot the last one
    if(prevDot.length==0){
        prevDot = $('.dot').last();
    }
    //fade out the current img and fade in the prev one when the arrow is clicked
    currentSlide.fadeOut(600).removeClass('person__active-slide');
    prevSlide.fadeIn(600).addClass('person__active-slide');
    //when the arrow is clicked, remove the active class from the current dot and add it to the next one
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot')
});
