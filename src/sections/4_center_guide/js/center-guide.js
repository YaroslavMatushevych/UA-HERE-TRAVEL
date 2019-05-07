const triangle = document.querySelector('.center-guide-triangle');
const centerGuide = document.querySelector('.center-guide');
const viewPort = window.innerHeight;
const centerGuideY = centerGuide.offsetTop + ((centerGuide.offsetHeight - 300) / 2);
let windowScroll = window.pageYOffset + viewPort;
let alreadyPlayed = false;

if (window.innerWidth >= 481) {
    if (windowScroll > centerGuideY) {
        triangle.style.transform = `translateX(0)`;
        alreadyPlayed = true;
    }
}

if (window.innerWidth < 481) {
    triangle.style.transform = "translate(-50%, 0%)";
    alreadyPlayed = true;
}


window.addEventListener("scroll", function() {
    windowScroll = window.pageYOffset + viewPort;

    if (window.innerWidth >= 481){
        if (windowScroll > centerGuideY && !alreadyPlayed) {
            triangle.classList.add("played");
            alreadyPlayed = true;
        }
    }
});

window.addEventListener('resize', function(){
    if (window.innerWidth >= 481 && !alreadyPlayed) {
        triangle.style.transform = `translateX(-100%)`;
    }

    if (window.innerWidth >= 481 && alreadyPlayed) {
        triangle.style.transform = `translateX(0)`;
    }

    if (window.innerWidth < 481) {
        triangle.style.transform = "translate(-50%, 0%)";
    }
});

$(".center-guide-alert").click(function(event) {
    if (!$(event.target).closest(".alert-success, .alert-fail, .saltire").length) {
        $("body").find(".center-guide-alert").removeClass("visible");
        $('.alert-fail, .alert-success').css("display", "none");
    }
});

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateName(name) {
    let res = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    return res.test(name);
}


function validate() {
    let ValidName = $(".valid-name");
    let ValidEmail = $(".valid-email");
    let name = $("#input-name").val();
    let email = $("#input-email").val();
    ValidName.text("");
    ValidEmail.text("");

    if (!validateName(name)) {
        ValidName.text("Please enter a valid name.");
        ValidName.css("color", "red");
    }

    if (!validateEmail(email)) {
        ValidEmail.text("Please enter a valid e-mail address.");
        ValidEmail.css("color", "red");
    }

    if (!validateName(name) || !validateEmail(email)) {
        $(".center-guide-alert").addClass("visible");
        $('.alert-fail').css("display", "flex");
    }
    return false;
}

$(document).on("submit", "#get-guide", function (e) {
    e.preventDefault();
    validate(this);
});



$(".saltire, .close").click(function(){
    $(".center-guide-alert").removeClass("visible");
    $('.alert-fail, .alert-success').css("display", "none");
});
