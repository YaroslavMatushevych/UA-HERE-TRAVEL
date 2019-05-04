$(document).ready(function(){
    // $('.get-in-touch-btn').click(function (){
    //     $('.modal-overlay').addClass('modal-active');}
    // );
    $('.get-in-touch-btn').click(function(){
    validateForm();
});
    $('.warning-visible').hide();
    function validateForm(){
        let nameReg = /^[A-Za-z]+$/;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let name = $('#get-in-touch-name').val();
        let email = $('#get-in-touch-email').val();
        let inputVal = new Array(name, email);

        if(inputVal[0] == "" || !nameReg.test(name)){
            $('.name-warning').addClass('warning-visible');
        };
        if(inputVal[1] == "" || !emailReg.test(email)){
            $('.email-warning').addClass('warning-visible');
        };
    };

    const getModalSuccess = function() {
        $('.modal-overlay').addClass('modal-active');
        $('.modal-success').addClass('modal-active');
    };
    $('#success').click(getModalSuccess)

    const getModalFail = function() {
        $('.modal-overlay').addClass('modal-active');
        $('.modal-fail').addClass('modal-active');
    };
    $('#fail').click(getModalFail);

    $('.modal-button-cross, .modal-button-close, .modal-overlay').click(function () {
        $('.modal-overlay').removeClass('modal-active');
        $('.modal-success').removeClass('modal-active');
        $('.modal-fail').removeClass('modal-active');
    });
});
