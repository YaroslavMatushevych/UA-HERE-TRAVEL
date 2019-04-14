const peoplePhoto = document.getElementsByClassName("photo-item");
const peopleSpeach = document.getElementsByClassName("people-speach");
const screens = document.getElementsByClassName("whatsapp-block-item");

let whatsappBlock = document.getElementById("whatsapp-block");
let overlayScreen = document.getElementById("overlay");

let activeBlock = 0;

(function createDots() {
    for (let i = 0; i < peoplePhoto.length; i++) {
        let wosDot = document.createElement('span');
        wosDot.classList.add('wos-dot-item');
        wosDot.style.padding = '8px';
        wosDot.style.margin = '1px';
        wosDot.style.border = '1px solid #ffd008';
        wosDot.style.borderRadius = '50%';
        document.querySelector('.wos-dots').appendChild(wosDot);
    }
    document.querySelector('.wos-dot-item').classList.add('wos-dot-item-active');
})();

const wosDots = document.getElementsByClassName("wos-dot-item");

document.addEventListener('click', function(e){
    if(e.target.id === 'right-arrow' || e.target.id === 'right-arrow-screen'){
        if(activeBlock === peoplePhoto.length - 1){
            activeBlock = 0;
            movePhotoBlock(activeBlock, peoplePhoto.length - 1);
        }
        else{
            activeBlock++;
            movePhotoBlock(activeBlock, activeBlock - 1);
        }
    }
    if(e.target.id === 'left-arrow' || e.target.id === 'left-arrow-screen'){
        if(activeBlock === 0){
            activeBlock = peoplePhoto.length - 1;
            movePhotoBlock(activeBlock, 0);
        }
        else{
            activeBlock--;
            movePhotoBlock(activeBlock, activeBlock + 1);
        }
    }
    if(e.target.className === "whatsapp-btn"){
        whatsappBlock.hidden = false;
        overlayScreen.hidden = false;
    }
    if(e.target.id === "close-icon" || e.target.id === "overlay"){
        whatsappBlock.hidden = true;
        overlayScreen.hidden = true;
    }
});

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
        screens[activeItem].hidden = false;
    }, 400);
    setTimeout(function(){
        peoplePhoto[activeItem].classList.toggle('photo-item-fade');
        peopleSpeach[activeItem].classList.toggle('people-speach-fade');
        screens[activeItem].classList.toggle('whatsapp-block-item-fade');
    }, 500);
}

