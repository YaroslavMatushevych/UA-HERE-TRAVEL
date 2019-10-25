$(document).ready(function(){

    let validFormFlag = false;
    // $('.get-in-touch-btn').click(function(){
    //     validateForm();
    //     ////ADDED AJAX REQUEST 'Misha'////
    //     if(validFormFlag){
    //         let data = {
    //             name: $('#get-in-touch-name').val(),
    //             email: $('#get-in-touch-email').val(),
    //             text: $('.get-in-touch-form').find('textarea').val(),
    //             subject: $(".get-in-touch-form>input[name='email-subject']").val()
    //         };
    //         console.log(data);
    //         $.ajax({
    //             type: "POST",
    //             data: data,
    //             url: "../php/mail.php",
    //             success: function(data) {
    //                 console.log(data);
    //                 getModalSuccess();
    //             },
    //             error:function () {
    //                 getModalFail();
    //             }
    //         });
    //     }
    //     return false;
    // });

    $('#contact-us').submit(function(event){
        event.preventDefault();
        validateForm();
        if(validFormFlag){
            $.ajax({
                type: "POST",
                data: $(this).serializeArray(),
                url: $(this).attr('action'),
                success: function (answer) {
                    if (answer) {
                        console.log(answer);
                        getModalSuccess();
                    }
                },
                error:function () {
                    getModalFail();
                }
            });
        }
    });

    console.log('this is new js file!');


    ////ADDED FLAGS 'Misha'////
    $('.warning-visible').hide();
    function validateForm(){
        let nameReg = /^[A-Za-z]+$/;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        let name = $('#get-in-touch-name').val();
        let email = $('#get-in-touch-email').val();
        let inputVal = new Array(name, email);

        if(inputVal[0] == "" || !nameReg.test(name)){
            $('.name-warning').addClass('warning-visible');
            validFormFlag=false;
        };
        if(inputVal[1] == "" || !emailReg.test(email)){
            $('.email-warning').addClass('warning-visible');
            validFormFlag=false;
        }else{
            $('.name-warning').removeClass('warning-visible');
            $('.email-warning').removeClass('warning-visible');
            validFormFlag=true;
        }
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
