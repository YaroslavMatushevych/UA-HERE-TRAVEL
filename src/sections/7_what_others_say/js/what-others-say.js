let peoplePhoto = document.getElementsByClassName("photo-item");
let peopleSpeach = document.getElementsByClassName("people-speach");
let screens = document.getElementsByClassName("whatsapp-block-item");

let whatsappBlock = document.getElementById("whatsapp-block");
let overlay = document.getElementById("overlay");

let activeBlock = 0;

document.addEventListener('click', function(e){
    if(e.target.id === 'right-arrow' || e.target.id === 'right-arrow-screen'){
        if(activeBlock !== peoplePhoto.length - 1){
            activeBlock++;
            movePhotoBlock(activeBlock, activeBlock - 1);
        }
    }
    if(e.target.id === 'left-arrow' || e.target.id === 'left-arrow-screen'){
        if(activeBlock !== 0){
            activeBlock--;
            movePhotoBlock(activeBlock, activeBlock + 1);
        }
    }
    if(e.target.id === "whatsapp-btn"){
        whatsappBlock.hidden = false;
        overlay.hidden = false;
    }
    if(e.target.id === "close"){
        whatsappBlock.hidden = true;
        overlay.hidden = true;
    }
});

function movePhotoBlock(activeItem, hiddenItem){
    peoplePhoto[activeItem].hidden = false;
    peopleSpeach[activeItem].hidden = false;
    screens[activeItem].hidden = false;
    peoplePhoto[hiddenItem].hidden = true;
    peopleSpeach[hiddenItem].hidden = true;
    screens[hiddenItem].hidden = true;
}