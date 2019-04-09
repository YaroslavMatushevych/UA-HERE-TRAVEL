let activeColor = document.getElementsByClassName("sidebar__nav-item_active");
let christ = document.getElementsByClassName("christ");
let sideBarNav = document.getElementById("sidebar__nav");
let sideBarNavItem = document.getElementsByClassName("sidebar__nav-item");
let personContainer = document.getElementsByClassName("person__container");

christ[1].style.display = "inline-block";
personContainer[1].style.display = "flex";

sideBarNav.addEventListener("click", function (e) {

    activeColor = document.getElementsByClassName("sidebar__nav-item_active");

    if (e.target.classList.contains("sidebar__nav-item")) {

        for (let i = 0; i < activeColor.length; i++) {
            activeColor[i].classList.remove("sidebar__nav-item_active");
        }

        for (let l = 0; l < christ.length; l++) {
            christ[l].style.display = "none";
        }

        for (let k = 0; k < personContainer.length; k++) {
            personContainer[k].style.display = "none";
        }

        e.target.classList.add("sidebar__nav-item_active");
        e.target.firstChild.style.display = "inline-block";

        for (let i = 0; i < sideBarNavItem.length; i++) {
            if (sideBarNavItem[i].classList.contains("sidebar__nav-item_active")) {
                personContainer[i].style.display = "flex";
                return true;
            }
        }
    }
});