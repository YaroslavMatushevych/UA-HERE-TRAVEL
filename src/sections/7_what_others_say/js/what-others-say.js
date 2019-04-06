let peoplePhoto = document.getElementsByClassName("photo-item");
let peopleSpeach = document.getElementsByClassName("people-speach");
let screens = document.getElementsByClassName("whatsapp-block-item");

let whatsappBlock = document.getElementById("whatsapp-block");
let overlayScreen = document.getElementById("overlay");

let activeBlock = 0;

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
    peoplePhoto[activeItem].hidden = false;
    peopleSpeach[activeItem].hidden = false;
    screens[activeItem].hidden = false;
    peoplePhoto[hiddenItem].hidden = true;
    peopleSpeach[hiddenItem].hidden = true;
    screens[hiddenItem].hidden = true;
}