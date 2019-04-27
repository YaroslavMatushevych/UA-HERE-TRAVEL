const triangle = document.querySelector('.center-guide-triangle');
const centerGuide = document.querySelector('.center-guide');
const topPosOfGuide = centerGuide.offsetTop;
const viewPort = window.innerHeight;
let windowScroll = window.pageYOffset + viewPort;
let alreadyPlayed = false;

console.log(windowScroll);
console.log(topPosOfGuide);

if (window.innerWidth >= 481) {
    if (windowScroll > (topPosOfGuide + 100)) {
        triangle.style.transform = `translateX(0)`;
        alreadyPlayed = true;
    }
}


window.addEventListener("scroll", function() {
    windowScroll = window.pageYOffset + viewPort;

    if (window.innerWidth >= 481){
        if (windowScroll - (topPosOfGuide + 320) < 0 && !alreadyPlayed) {
            triangle.style.transform = `translateX(${windowScroll - (topPosOfGuide + 300)}px)`;
            if (windowScroll - (topPosOfGuide + 320) < 0 && windowScroll - (topPosOfGuide + 300) > -10) {
                alreadyPlayed = true;
            }
        }
    }
    if (window.innerWidth < 481) {
        triangle.style.transform = "translate(-50%, 0%)";
    }

});

window.addEventListener('resize', function(){
    if ($(window).width() >= 481 && !alreadyPlayed) {
        triangle.style.transform = `translateX(-100%)`;
    }

    if ($(window).width() >= 481 && alreadyPlayed) {
        triangle.style.transform = `translateX(0)`;
    }

    if (window.innerWidth < 481) {
        triangle.style.transform = "translate(-50%, 0%)";
    }
});


$(".form__button").click(function(){
    $(".center-guide-alert").addClass("visible");
});

$(".alert-saltire, .alert-message__close").click(function(){
    $(".center-guide-alert").removeClass("visible");
});

$(document).click(function(event) {
    if (!$(event.target).closest(".center-guide-alert__success, .alert-saltire").length) {
        $("body").find(".center-guide-alert").removeClass("visible");
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
        ValidEmail.text("Please enter a valid e-mail address.");
        ValidEmail.css("color", "red");
    }
    return false;
}

$(".form__button").on("click", validate);