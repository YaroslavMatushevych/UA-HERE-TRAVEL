const triangle = document.querySelector('.center-guide-triangle');
const centerGuide = document.querySelector('.center-guide');
const topPosOfGuide = centerGuide.offsetTop;
const viewPort = window.innerHeight;
let windowScroll = window.pageYOffset + viewPort;
let alreadyPlayed = false;


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

$(".center-guide-alert").click(function(event) {
    if (!$(event.target).closest(".center-guide-alert__success, .center-guide-alert__fail, .alert-saltire").length) {
        $("body").find(".center-guide-alert").removeClass("visible");
        $('.center-guide-alert__fail, .center-guide-alert__success').css("display", "none");
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
    let ValidName = $(".form__valid-name");
    let ValidEmail = $(".form__valid-email");
    let name = $("#form__name").val();
    let email = $("#form__email").val();
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
        $('.center-guide-alert__fail').css("display", "flex");
    }
    return false;
}

$(".form__button").click(function(){
    validate();
});

$(".alert-saltire, .alert-message__close").click(function(){
    $(".center-guide-alert").removeClass("visible");
    $('.center-guide-alert__fail, .center-guide-alert__success').css("display", "none");
});


$(function() {
    $(".form__button").click(function(e) {
        e.preventdefault();
        let data = {
            name: $("#form__name").val(),
            email: $("#form__email").val(),
        };
        $.ajax({
            type: "POST",
            url: "email.php",
            data: data,
            success: function(){
                $(".center-guide-alert").addClass("visible");
                $('.center-guide-alert__success').css("display", "flex");
            }
        });

        return false;
    });
});
