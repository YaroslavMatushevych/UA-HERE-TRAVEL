let activeColor = document.getElementsByClassName("active-color");
let christ = document.getElementsByClassName("christ");
let sideBarNav = document.getElementById("sidebar-nav");
let sideBarNavItem = document.getElementsByClassName("sidebar-nav-item");
let persDescription = document.getElementsByClassName("pers-description");



christ[1].style.display = "inline-block";
persDescription[1].style.display = "flex";


sideBarNav.addEventListener("click", function (e) {

    activeColor = document.getElementsByClassName("active-color");
    christ = document.getElementsByClassName("christ");
    persDescription = document.getElementsByClassName("pers-description");


    if (e.target.classList.contains("sidebar-nav-item")) {

        for (let i = 0; i < activeColor.length; i++) {
            activeColor[i].classList.remove('active-color');
        }

        for (let l = 0; l < christ.length; l++) {
            christ[l].style.display = "none";
        }

        for (let k = 0; k < persDescription.length; k++) {
            persDescription[k].style.display = "none";
        }

        e.target.classList.add('active-color');
        e.target.firstChild.style.display = "inline-block";
    }

    for (let i = 0; i < sideBarNavItem.length; i++) {
        if (sideBarNavItem[0].classList.contains("active-color")){
            persDescription[0].style.display = "flex";
            return true;
        }
        if (sideBarNavItem[1].classList.contains("active-color")){
            persDescription[1].style.display = "flex";
            return true;
        }
        if (sideBarNavItem[2].classList.contains("active-color")){
            persDescription[2].style.display = "flex";
            return true;
        }
        if (sideBarNavItem[3].classList.contains("active-color")){
            persDescription[3].style.display = "flex";
            return true;
        }
        if (sideBarNavItem[4].classList.contains("active-color")){
            persDescription[4].style.display = "flex";
            return true;
        }
    }

});