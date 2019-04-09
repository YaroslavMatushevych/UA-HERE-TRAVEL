const triangle = document.querySelector('.center-guide__triangle');
const centerGuide = document.querySelector('.center-guide');
const topPosOfGuide = centerGuide.offsetTop;
// const bottomPosOfGuide = topPosOfGuide + centerGuide.clientHeight;
const viewPort = window.innerHeight;

window.addEventListener("scroll", function(){
    let together = window.pageYOffset + viewPort + 100;

    if(together - (topPosOfGuide+300) < 0) {
            triangle.style.transform = `translateX(${together - (topPosOfGuide+300)}px)`;
    }
    // if (together + (bottomPosOfGuide-300) > 0) {
    //     triangle.style.transform = `translateX(${together + (bottomPosOfGuide-300)}px)`;
    // }
});