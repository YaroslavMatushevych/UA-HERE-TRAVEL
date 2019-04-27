const triangle = document.querySelector('.center-guide-triangle');
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


function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    let ValidName = $(".form__valid-name");
    let ValidEmail = $(".form__valid-email");
    let name = $(".form__name").val();
    let email = $(".form__email").val();
    ValidName.text("");
    ValidEmail.text("");

    if (/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/.test(name)) {
        ValidName.text(name + " is valid :)");
        ValidName.css("color", "green");
    } else {
        ValidName.text("Please enter a valid name.");
        ValidName.css("color", "red");
    }

    if (validateEmail(email)) {
        ValidEmail.text(email + " is valid :)");
        ValidEmail.css("color", "green");
    } else {
        ValidEmail.text("Please enter a valid email.");
        ValidEmail.css("color", "red");
    }
    return false;
}

$(".form__button").on("click", validate);