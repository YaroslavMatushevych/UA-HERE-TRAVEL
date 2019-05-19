// let navMenu = document.getElementsByClassName("anchors");
// for(let i= 0; i <= navMenu.length-1; i++) {
//     navMenu[i].addEventListener("click",function () {
//         for(let i = 0;i <= navMenu.length-1; i++) {
//             navMenu[i].classList.remove("active")
//         }
//         this.classList.add("active");
//     })
// }
/*document.body.addEventListener("click", function (e) {
    var elem = e.target;
    for (let i = 0; i <= document.getElementsByClassName('anchors').length -1; i++ ) {
       // console.log(document.getElementsByClassName('anchors'));
        document.getElementsByClassName('anchors')[i].classList.remove("active")
    }
    if (elem.classList.contains("anchors"))
        elem.classList.add('active');

});*/
/*
for (var i= 0; i< document.getElementsByClassName('anchors').length; i++){
    document.getElementsByClassName('anchors')[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}*/


// let navMenu = document.getElementsByClassName("anchors");
// for(let i= 0; i <= navMenu.length-1; i++) {
//     navMenu[i].addEventListener("click",function () {
//         for(let i = 0;i <= navMenu.length-1; i++) {
//             navMenu[i].classList.remove("active")
//         }
//         this.classList.add("active");
//     })
// }
/*document.body.addEventListener("click", function (e) {
    var elem = e.target;
    for (let i = 0; i <= document.getElementsByClassName('anchors').length -1; i++ ) {
       // console.log(document.getElementsByClassName('anchors'));
        document.getElementsByClassName('anchors')[i].classList.remove("active")
    }
    if (elem.classList.contains("anchors"))
        elem.classList.add('active');

});*/
/*
for (var i= 0; i< document.getElementsByClassName('anchors').length; i++){
    document.getElementsByClassName('anchors')[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}*/
// function myFunction(x) {
//     x.classList.toggle("change");
//
// }
const burger = document.getElementById('burgerIcon');
let newNavElement = document.createElement("a");
let toursExist = false;


burger.addEventListener('click',function () {

    let bItems = document.getElementById('burgerItems');
    let children = document.querySelectorAll(" div.navbar, a.anchors-a, a.anchors-a-active, img.logo, div.nav-wrapper, div.block a.s-anchors, div.social-media");

    if (!toursExist) {
        newNavElement.innerHTML = 'Tours';
        newNavElement.className += ' anchors-a ';
        bItems.appendChild(newNavElement);

        toursExist = true;
    }
    for ( let i = 0; i<children.length; i++){
        let child = children[i];
        // let freeGuide = children[i=2];
        // freeGuide.innerHTML = 'Get Free Guide';
        child.classList.toggle('opened');

    }
    burger.classList.toggle("change");
    bItems.classList.toggle('opened');


});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && newNavElement) {
        newNavElement.parentNode.removeChild(newNavElement);
    }
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
