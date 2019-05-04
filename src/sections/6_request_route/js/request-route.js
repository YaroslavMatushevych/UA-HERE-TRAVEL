let price = null;
function toggleModal(modalClass) {
    document.querySelector(`.${modalClass}`).classList.toggle('opened');
    document.querySelector('.route-overlay').classList.toggle('route-overlay-fade');
}
function validateEmail(emailField){
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField.value) != false;
}
function validateName(name) {
    let reg = /^[[a-zA-﻿Z ,.'-]+$/i;
    return reg.test(name.value) != false;
}
function removeClassWarning (name, email) {
    if (name.classList.contains('warning') || email.classList.contains('warning')) {
        document.querySelectorAll('.warning').forEach(function (item) {
            item.classList.remove('warning');
        });
        document.querySelectorAll('.route-warning').forEach(function (item) {
            item.classList.remove('warning-text');
        });
    }
}
function validateForm (name, email){
    removeClassWarning(name, email);
    if (!validateName(name) || !validateEmail(email)) {
        if (!validateName(name)) {
            document.querySelectorAll('.route-warning')[0].classList.add('warning-text');
            name.classList.add('warning');
        }
        if (!validateEmail(email)) {
            document.querySelectorAll('.route-warning')[1].classList.add('warning-text');
            email.classList.add('warning');
        }
        return false;
    }
    else return true;
}
document.querySelector('.request-route').addEventListener('click',function (e) {
    let target = e.target;
    if (target.classList.contains('route-button') && !target.classList.contains('route-form-submit'))  {
        price = target.previousElementSibling.innerText;
        removeClassWarning(form.elements[0],form.elements[1]);
        toggleModal('route-modal-request');
    }
    if (!target.classList.contains('route-button') || target.classList.contains('route-form-submit'))  e.preventDefault();

    if (target.id === 'route-modal-close-icon') {
        toggleModal('route-modal-request');
    }
    if (target.id === 'route-modal-successful-close-icon' || target.id === 'route-form-successful'){
        toggleModal('route-modal-successful');
    }
    if (target.id === 'route-modal-fail-close-icon' || target.id === 'route-form-fail'){
        toggleModal('route-modal-fail');
    }

    if (target.id === 'route-form-submit') {
        if(validateForm(form.elements[0],form.elements[1])){
            toggleModal('route-modal-request');
            document.querySelectorAll('.route-modal-form-inputs')[2].innerText = `${price}`;
        }
    }
    if (target.classList.contains('route-overlay') || target.classList.contains('close-form')) {
        toggleModal();
    }
    if (target.id === 'route-button-successful-new-form'){
        toggleModal('route-modal-request');
        toggleModal('route-modal-successful');
    }
    if (target.id === 'route-button-fail-new-form'){
        toggleModal('route-modal-request');
        toggleModal('route-modal-fail');
    }
});