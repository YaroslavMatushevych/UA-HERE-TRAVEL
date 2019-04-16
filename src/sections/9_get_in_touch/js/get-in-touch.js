console.log('get-in-touch');
$(document).ready(function(){
    $('.get-in-touch__btn').click(function (){
       $('.get-in-touch__modal-overlay').addClass('get-in-touch__modal_active');}
    );
    $('.get-in-touch__modal-button-cross, .get-in-touch__modal-button-close').click(function () {
        $('.get-in-touch__modal-overlay').removeClass('get-in-touch__modal_active');
    })
});
