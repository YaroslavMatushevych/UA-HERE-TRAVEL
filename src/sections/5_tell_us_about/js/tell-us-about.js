$(document).ready(function () {

    ///////////VARIABLES/////////////////

    const kyivVisit = $('#kyiv-been');
    const arriveDate = $('#arrive-date');
    const daysVisit = $('#days-visit');
    const childrenVisit = $('#children-visit');
    const preferenceChoose = $('#preferences-choose');
    const budgetChoose = $('#budget');
    const tasteChoose = $('#taste');
    const today = new Date().toISOString().substr(0, 10);
    let nameStatus = false;
    let emailStatus = false;

    ///////////FUNCTIONS/////////////////

    let hideErrorMessage = () => {
        if (kyivVisit.hasClass('filled-quest')) {
            kyivVisit.parent().find('.form-error').css({'opacity': '0'});
            kyivVisit.css('border-color','#a3a2a2');
        }
        if (arriveDate.val()) {
            arriveDate.siblings('.form-error').css({'opacity': '0'});
        }
        if (daysVisit.hasClass('filled-quest')) {
            daysVisit.parent().find('.form-error').css({'opacity': '0'});
            daysVisit.css('border-color','#a3a2a2');
        }
        if (childrenVisit.hasClass('filled-quest')) {
            childrenVisit.parent().find('.form-error').css({'opacity': '0'});
            childrenVisit.css('border-color','#a3a2a2');
        }
        if (preferenceChoose.hasClass('filled-quest')) {
            preferenceChoose.find('.form-error').css({'opacity': '0'});
        }
        if (budgetChoose.hasClass('filled-quest')) {
            budgetChoose.parent().find('.form-error').css({'opacity': '0'});
            budgetChoose.css('border-color','#a3a2a2');
        }
        if (tasteChoose.hasClass('filled-quest')) {
            tasteChoose.find('.form-error').css({'opacity': '0'});
        }
    };

    let checkValidCustomerInfo = () => {
        if ($('#customer-name').val()) {
            nameStatus = true;
            $('#customer-name').siblings('.name-input-error').css('opacity', '0');
        }
        ;
        if ($('#customer-email').val()) {
            let currentMail = $('#customer-email').val().split('@');
            if (currentMail.length == 2) {
                let currentMailDot = currentMail[1].split('.').length;
                if (currentMailDot >= 2) {
                    $('#customer-email').siblings('.mail-input-error').css('opacity', '0');
                    emailStatus = true;
                }
            }
        }
        ;
    }

    let showErrorMessageFirst = () => {
        if (!kyivVisit.hasClass('filled-quest')) {
            kyivVisit.parent().find('.form-error').css({'opacity': '1'});
            kyivVisit.css('border-color','#c92533');
        }
        if (!arriveDate.val()) {
            arriveDate.siblings('.form-error').css({'opacity': '1'});
        }
        if (!daysVisit.hasClass('filled-quest')) {
            daysVisit.parent().find('.form-error').css({'opacity': '1'});
            daysVisit.css('border-color','#c92533');
        }
    };

    let showErrorMessageSecond = () => {
        if (!childrenVisit.hasClass('filled-quest')) {
            childrenVisit.parent().find('.form-error').css({'opacity': '1'});
            childrenVisit.css('border-color','#c92533');
        }
        if (!preferenceChoose.hasClass('filled-quest')) {
            preferenceChoose.find('.form-error').css({'opacity': '1'});
        }
        if (!budgetChoose.hasClass('filled-quest')) {
            budgetChoose.parent().find('.form-error').css({'opacity': '1'});
            budgetChoose.css('border-color','#c92533');
        }
        if (!tasteChoose.hasClass('filled-quest')) {
            tasteChoose.find('.form-error').css({'opacity': '1'});
        }
    };

    let checkFilledForm = () => {
        if ((kyivVisit.hasClass('filled-quest')) && (daysVisit.hasClass('filled-quest')) && (arriveDate.val())) {
            $('#next-1').addClass('active-next-btn');
        } else {
            $('#next-1').removeClass('active-next-btn');
        }
        if ((childrenVisit.hasClass('filled-quest')) && (preferenceChoose.hasClass('filled-quest')) && (budgetChoose.hasClass('filled-quest')) && (tasteChoose.hasClass('filled-quest'))) {
            $('#next-2').addClass('active-next-btn');
        } else {
            $('#next-2').removeClass('active-next-btn');
        }
    };

    let createNewCustomer = () => {
        const customer = {};
        customer.kyivVisit = kyivVisit.find('.active-form-tab').html();
        customer.arriveDate = arriveDate.val();
        customer.daysNum = daysVisit.find('.active-form-tab').html();
        customer.children = childrenVisit.find('.active-form-tab').html();
        customer.budget = budgetChoose.find('.active-form-tab').html();
        const taste = [];
        const pref = [];
        customer.taste = taste;
        customer.preferences = pref;
        for (let i = 0; i < preferenceChoose.find('.active-form-tab').length; i++) {
            pref.push(preferenceChoose.find(`.active-form-tab:eq(${i})`).html().split('<')[0]);
        }
        for (let i = 0; i < tasteChoose.find('.active-form-tab').length; i++) {
            taste.push(tasteChoose.find(`.active-form-tab:eq(${i})`).html().split('<')[0]);
        }
        customer.name = $('#customer-name').val();
        customer.email = $('#customer-email').val();
        return customer;
    };

    let checkFilledInputs = () => {
        checkValidCustomerInfo();
        if (!nameStatus) {
            $('#customer-name').siblings('.name-input-error').css('opacity', '1');
        }
        if (!emailStatus) {
            $('#customer-email').siblings('.mail-input-error').css('opacity', '1');
        } else {
            const newCustomer = createNewCustomer();
            alert(`New customer request is done! Results of the application form: 1.Kyiv been - ${newCustomer.kyivVisit}; 2.Arrive date - ${newCustomer.arriveDate}; 3.Visit days - ${newCustomer.daysNum}; 4.Children - ${newCustomer.children}; 5.Preferences - ${newCustomer.preferences}; 6.Budget - ${newCustomer.budget} 7.Taste - ${newCustomer.taste}; Contact info - Name: ${newCustomer.name}; Email: ${newCustomer.email}.`);
        }
    };

    ///////////CURRENT DATE CALENDAR SETTINGS/////////////////

    arriveDate.attr('min', `${today}`);

    ///////////CLICK EVENTS/////////////////

    $('.next-btn').click((e) => {
        checkFilledForm();
        hideErrorMessage();
        let numBtn = e.target.id.split('-')[1];
        if ($(e.target).hasClass('active-next-btn')) {
            $(`.form-slide:eq(${numBtn - 1})`).removeClass('form-slide_active').addClass('form-slide_left');
            $(`.form-slide:eq(${numBtn})`).addClass('form-slide_active');
        } else {
            if (numBtn == 1) {
                showErrorMessageFirst();
            }
            if (numBtn == 2) {
                showErrorMessageSecond();
            }
        }
    });

    $('.prev-btn').click((e) => {
        let numBtn = e.target.id.split('-')[1];
        $(`.form-slide:eq(${numBtn})`).removeClass('form-slide_active');
        $(`.form-slide:eq(${numBtn - 1})`).removeClass('form-slide_left').addClass('form-slide_active');
    });

    $('#finish-btn').click((e) => {
        checkFilledInputs();
    });

    $('.form-tab').click((e) => {
        $(e.target).siblings().removeClass('active-form-tab');
        $(e.target).addClass('active-form-tab');
        $('.active-form-tab').parent().addClass('filled-quest');
        $(e.target).siblings('.no-left-border-tab').removeClass('no-left-border-tab');
        $(e.target).prev().addClass('no-left-border-tab');
        hideErrorMessage();
    });

    $('.form-multi-tab').click((e) => {
        if (($(e.target).hasClass('active-form-tab')) && (!$(e.target).siblings().hasClass('active-form-tab')) && ($(e.target).parent().hasClass('filled-quest'))) {
            $(e.target).parent().removeClass('filled-quest');
            $(e.target).removeClass('active-form-tab');
            $(e.target).find('.fa-plus').removeClass('fa-plus-turned');
            $(e.target).siblings('.form-error').css({'opacity': '1'});
        } else {
            $(e.target).parent().addClass('filled-quest');
            $(e.target).toggleClass('active-form-tab');
            $(e.target).find('.fa-plus').toggleClass('fa-plus-turned');
            hideErrorMessage();
        }
    });

    $(function() {
        $( "#arrive-date" ).datepicker({
            dateFormat:'dd/mm/yy',
            minDate: new Date(),
            firstDay:1,
            hideIfNoPrevNext: true
        });

    });
    $('#arrive-date').hover(()=>{
        $('.fa-calendar-alt').css('color','$yellow');
    })

});

