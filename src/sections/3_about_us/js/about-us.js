let activeColor = document.getElementsByClassName("active-color");
let christ = document.getElementsByClassName("christ");
let sideBarNav = document.getElementById("sidebar-nav");
let sideBarNavItem = document.getElementsByClassName("sidebar-nav-item");
let personContainer = document.getElementsByClassName("person-container");



christ[1].style.display = "inline-block";
personContainer[1].style.display = "flex";


sideBarNav.addEventListener("click", function (e) {

    activeColor = document.getElementsByClassName("active-color");

    if (e.target.classList.contains("sidebar-nav-item")) {

        for (let i = 0; i < activeColor.length; i++) {
            activeColor[i].classList.remove("active-color");
        }

        for (let l = 0; l < christ.length; l++) {
            christ[l].style.display = "none";
        }

        for (let k = 0; k < personContainer.length; k++) {
            personContainer[k].style.display = "none";
        }

        e.target.classList.add("active-color");
        e.target.firstChild.style.display = "inline-block";

        for (let i = 0; i < sideBarNavItem.length; i++) {
            if (sideBarNavItem[i].classList.contains("active-color")) {
                personContainer[i].style.display = "flex";
                return true;
            }
        }
    }
});