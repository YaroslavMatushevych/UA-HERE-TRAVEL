$(document).ready(function(){
    // $('.get-in-touch__btn').click(function (){
    //     $('.get-in-touch__modal-overlay').addClass('get-in-touch__modal_active');}
    // );
    $('.get-in-touch__btn').click(function(){
    validateForm();
});
    function validateForm(){
        let nameReg = /^[A-Za-z]+$/;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let name = $('#get-in-touch__name').val();
        let email = $('#get-in-touch__email').val();
        let inputVal = new Array(name, email);

        if(inputVal[0] == "" || !nameReg.test(name)){
            $('.name-warning').addClass('warning_visible');
            $('.modal-fail').addClass('get-in-touch__modal_active');
        }else{
            $('.modal-success').addClass('get-in-touch__modal_active');
        };
        if(inputVal[1] == "" || !emailReg.test(email)){
            $('.email-warning').addClass('warning_visible');
            $('.modal-fail').addClass('get-in-touch__modal_active');
        }else{
            $('.modal-success').addClass('get-in-touch__modal_active');
        }
    }
    $('.get-in-touch__modal-button-cross, .get-in-touch__modal-button-close').click(function () {
        $('.get-in-touch__modal-overlay').removeClass('get-in-touch__modal_active');
    });
});
