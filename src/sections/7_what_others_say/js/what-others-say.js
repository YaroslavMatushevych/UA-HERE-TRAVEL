const peoplePhoto = document.getElementsByClassName("photo-item");
const peopleSpeach = document.getElementsByClassName("speach-item");
const peopleSpeachItem = document.getElementsByClassName("speach-item-description");
const screens = document.getElementsByClassName("whatsapp-item");
let whatsappBlock = document.getElementById("whatsapp-container");
let overlayScreen = document.getElementById("wos-overlay");
let speachHeight = 195;


//console.log(getComputedStyle(peopleSpeachItem[0].lineHeight));
let activeBlock = 0;

(function createDots() {
    for (let i = 0; i < peoplePhoto.length; i++) {
        let wosDot = document.createElement('span');
        wosDot.classList.add('wos-dot-item');
        document.querySelector('.wos-dot').appendChild(wosDot);
    }
    document.querySelector('.wos-dot-item').classList.add('wos-dot-item-active');
})();

(function addOver(){
    if(peopleSpeachItem[activeBlock].scrollHeight > speachHeight){
        peopleSpeachItem[activeBlock].classList.add("speach-item-description-over");
    }
})();

const wosDots = document.getElementsByClassName("wos-dot-item");

document.addEventListener('click', function(e){
    if(e.target.id === 'right-arrow' || e.target.id === 'right-arrow-whatsapp'){
        moveRight();
    }
    if(e.target.id === 'left-arrow' || e.target.id === 'left-arrow-whatsapp'){
        moveLeft();
    }
    if(e.target.className === "whatsapp-btn"){
        whatsappBlock.hidden = false;
        overlayScreen.hidden = false;
    }
    if(e.target.id === "close-icon" || e.target.id === "wos-overlay"){
        whatsappBlock.hidden = true;
        overlayScreen.hidden = true;
    }
    if(e.target.classList.contains("speach-item-description-over")){
        e.target.classList.remove("speach-item-description-over");
    }
});

function moveLeft(){
    if(activeBlock === 0){
        activeBlock = peoplePhoto.length - 1;
        movePhotoBlock(activeBlock, 0);
    }
    else{
        activeBlock--;
        movePhotoBlock(activeBlock, activeBlock + 1);
    }
}
function moveRight(){
    if(activeBlock === peoplePhoto.length - 1){
        activeBlock = 0;
        movePhotoBlock(activeBlock, peoplePhoto.length - 1);
    }
    else{
        activeBlock++;
        movePhotoBlock(activeBlock, activeBlock - 1);
    }
}

function movePhotoBlock(activeItem, hiddenItem){
    peoplePhoto[hiddenItem].classList.toggle('photo-item-fade');
    peopleSpeach[hiddenItem].classList.toggle('speach-item-fade');
    screens[hiddenItem].classList.toggle('whatsapp-item-fade');
    wosDots[hiddenItem].classList.toggle('wos-dot-item-active');
    wosDots[activeItem].classList.toggle('wos-dot-item-active');

    setTimeout(function(){
        peoplePhoto[hiddenItem].hidden = true;
        peopleSpeach[hiddenItem].hidden = true;
        screens[hiddenItem].hidden = true;

        peoplePhoto[activeItem].hidden = false;
        peopleSpeach[activeItem].hidden = false;
        if(peopleSpeachItem[activeItem].scrollHeight > speachHeight){
            peopleSpeachItem[activeItem].classList.add("speach-item-description-over");
        }

        screens[activeItem].hidden = false;
    }, 200);
    setTimeout(function(){
        peoplePhoto[activeItem].classList.toggle('photo-item-fade');
        peopleSpeach[activeItem].classList.toggle('speach-item-fade');
        screens[activeItem].classList.toggle('whatsapp-item-fade');
    }, 300);
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

(new Swipe(document.getElementById('photo-speach'))).onLeft(function() {
    moveLeft();
}).run();
(new Swipe(document.getElementById('photo-speach'))).onRight(function() {
    moveRight();
}).run();
