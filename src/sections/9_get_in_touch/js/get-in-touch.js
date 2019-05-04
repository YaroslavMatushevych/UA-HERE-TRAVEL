$(document).ready(function(){
    // $('.get-in-touch__btn').click(function (){
    //     $('.modal__overlay').addClass('modal_active');}
    // );
    $('.get-in-touch__btn').click(function(){
    validateForm();
});
    $('.warning_visible').hide();
    function validateForm(){
        let nameReg = /^[A-Za-z]+$/;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let name = $('#get-in-touch__name').val();
        let email = $('#get-in-touch__email').val();
        let inputVal = new Array(name, email);

        if(inputVal[0] == "" || !nameReg.test(name)){
            $('.name-warning').addClass('warning_visible');
        };
        if(inputVal[1] == "" || !emailReg.test(email)){
            $('.email-warning').addClass('warning_visible');
        };
    };

    const getModalSuccess = function() {
        $('.modal__overlay').addClass('modal_active');
        $('.modal_success').addClass('modal_active');
    };
    $('#success').click(getModalSuccess)

    const getModalFail = function() {
        $('.modal__overlay').addClass('modal_active');
        $('.modal_fail').addClass('modal_active');
    };
    $('#fail').click(getModalFail);

    $('.modal__button-cross, .modal__button-close, .modal__overlay').click(function () {
        $('.modal__overlay').removeClass('modal_active');
        $('.modal_success').removeClass('modal_active');
        $('.modal_fail').removeClass('modal_active');
    });
});
