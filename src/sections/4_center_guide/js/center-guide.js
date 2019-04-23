const triangle = document.querySelector('.center-guide__triangle');
const centerGuide = document.querySelector('.center-guide');
const topPosOfGuide = centerGuide.offsetTop;
const viewPort = window.innerHeight;
let alreadyPlayed = false;
triangle.style.transform = `translateX(-50%)`;


window.addEventListener("scroll", function() {
    let together = window.pageYOffset + viewPort - 400;
    if (window.innerWidth > 481){
        if (together - (topPosOfGuide + 300) < 0 && !alreadyPlayed) {
            triangle.style.transform = `translateX(${together - (topPosOfGuide + 300)}px)`;
            if (together - (topPosOfGuide + 300) < 0 && together - (topPosOfGuide + 300) > -6) {
                alreadyPlayed = true;
            }
        }
    }
});