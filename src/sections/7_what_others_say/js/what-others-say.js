$(function(){
    $( "#photo-speach" ).on( "swipeleft", swipeleftHandler );
    $( "#photo-speach" ).on( "swiperight", swiperightHandler );
    $( "#whatsapp-block" ).on( "swipeleft", swipeleftHandler );
    $( "#whatsapp-block" ).on( "swiperight", swiperightHandler );

    function swiperightHandler( event ){
        moveRight();
    }
    function swipeleftHandler( event ){
        moveLeft();
    }
});

const peoplePhoto = document.getElementsByClassName("photo-item");
const peopleSpeach = document.getElementsByClassName("people-speach");
const peopleSpeachItem = document.getElementsByClassName("people-speach-item");
const screens = document.getElementsByClassName("whatsapp-block-item");
let whatsappBlock = document.getElementById("whatsapp-block");
let overlayScreen = document.getElementById("overlay");
let speachHeight = 195;
//let speachHeight = parseInt(peopleSpeachItem[0].style.lineHeight) * 100;

let activeBlock = 0;

(function createDots() {
    for (let i = 0; i < peoplePhoto.length; i++) {
        let wosDot = document.createElement('span');
        wosDot.classList.add('wos-dot-item');
        document.querySelector('.wos-dots').appendChild(wosDot);
    }
    document.querySelector('.wos-dot-item').classList.add('wos-dot-item-active');
})();

const wosDots = document.getElementsByClassName("wos-dot-item");

document.addEventListener('click', function(e){
    if(e.target.id === 'right-arrow' || e.target.id === 'right-arrow-screen'){
        moveRight();
    }
    if(e.target.id === 'left-arrow' || e.target.id === 'left-arrow-screen'){
        moveLeft();
    }
    if(e.target.className === "whatsapp-btn"){
        whatsappBlock.hidden = false;
        overlayScreen.hidden = false;
    }
    if(e.target.id === "close-icon" || e.target.id === "overlay"){
        whatsappBlock.hidden = true;
        overlayScreen.hidden = true;
    }
    if(e.target.classList.contains("people-speach-item-over")){
        console.log('ok');
        e.target.classList.remove("people-speach-item-over");
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
    peopleSpeach[hiddenItem].classList.toggle('people-speach-fade');
    screens[hiddenItem].classList.toggle('whatsapp-block-item-fade');
    wosDots[hiddenItem].classList.toggle('wos-dot-item-active');
    wosDots[activeItem].classList.toggle('wos-dot-item-active');

    setTimeout(function(){
        peoplePhoto[hiddenItem].hidden = true;
        peopleSpeach[hiddenItem].hidden = true;
        screens[hiddenItem].hidden = true;

        peoplePhoto[activeItem].hidden = false;
        peopleSpeach[activeItem].hidden = false;
        if(peopleSpeachItem[activeItem].scrollHeight > speachHeight){
            peopleSpeachItem[activeItem].classList.add("people-speach-item-over");
        }

        screens[activeItem].hidden = false;
    }, 200);
    setTimeout(function(){
        peoplePhoto[activeItem].classList.toggle('photo-item-fade');
        peopleSpeach[activeItem].classList.toggle('people-speach-fade');
        screens[activeItem].classList.toggle('whatsapp-block-item-fade');
    }, 300);
}

// (new Swipe(document.getElementById('photo-speach'))).onLeft(function() {
//     moveLeft();
// }).run();
// (new Swipe(document.getElementById('photo-speach'))).onRight(function() {
//     moveRight();
// }).run();
