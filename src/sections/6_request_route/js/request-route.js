function toggleModal() {
    document.querySelector('.route-modal').classList.toggle('open');
    document.querySelector('.route-overlay').classList.toggle('fadeInOut');
}
function validateEmail(emailField){
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField.value) != false;
}
function validateName(name) {
    /^[A-Za-z]\s]+$/.test(name);
}
function validateForm (name, email){
    if (name.classList.contains('warning') || email.classList.contains('warning')) {
        document.querySelectorAll('.warning').forEach(function (item) {
            item.classList.remove('warning');
        });
        document.querySelectorAll('.route-warning').forEach(function (item) {
            item.classList.remove('warning-text');
        });
    }
    if (!validateName(name) || !validateEmail(email)) {
        if (!validateName(name)) {
            document.querySelectorAll('.route-warning')[0].classList.add('warning-text');
            name.classList.add('warning');
        }
        if (!validateEmail(email)) {
            document.querySelectorAll('.route-warning')[1].classList.add('warning-text');
            email.classList.add('warning');
        }
    }
    else return true;
}
document.addEventListener('click',function (e) {
    let target = e.target;
    if (target.classList.contains('route-button'))  {
        toggleModal();
    }
    if (target.id === 'route-modal-close-icon' || target.id === 'route-modal-successful-close-icon' || target.id === 'route-modal-fail-close-icon'){
        toggleModal();
    }

    if (target.id === 'route-form-submit') {
        if(validateForm(form.elements[0],form.elements[1])){

        }
    }
    if (target.classList.contains('route-overlay') || target.classList.contains('close-form')) {
        toggleFadeInOut();
    }
});