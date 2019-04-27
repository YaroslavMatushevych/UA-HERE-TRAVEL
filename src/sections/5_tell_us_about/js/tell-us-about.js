$(document).ready(function () {

    ///////////VARIABLES/////////////////

    const kyivVisit = $('#kyiv-been');
    const arriveDate = $('#arrive-date');
    const daysVisit = $('#days-visit');
    const childrenVisit = $('#children-visit');
    const preferenceChoose = $('#preferences-choose');
    const budgetChoose = $('#budget');
    const tasteChoose = $('#taste');
    const serviceChoose = $('#service-form');
    const commentForm = $('#comment-form');
    const today = new Date().toISOString().substr(0, 10);
    let nameStatus = false;
    let emailStatus = false;
    let changedMediaFirst = false;
    let changedMediaSecond = false;
    let changedMediaThird = false;

    ///////////FUNCTIONS/////////////////

    let updatePagination = () => {
        for (let i = 0; i < $('.form-slide').length; i++) {
            $(`.form-slide:eq(${i})`).find('.pagination').html(`Step ${i + 1}/${$('.form-slide').length}`);
            $(`.form-slide:eq(${i})`).find('.prev-btn').attr('id', `#prev-${i}`);
        }
    };

    updatePagination();

    let hideErrorMessage = () => {
        if (kyivVisit.hasClass('filled-quest')) {
            kyivVisit.parent().find('.form-error').css({'opacity': '0'});
            kyivVisit.css('border-color', '#a3a2a2');
        }
        if (arriveDate.val()) {
            arriveDate.siblings('.form-error').css({'opacity': '0'});
            $('.form-calendar').addClass('filled-quest');
        }
        if (daysVisit.hasClass('filled-quest')) {
            daysVisit.parent().find('.form-error').css({'opacity': '0'});
            daysVisit.css('border-color', '#a3a2a2');
        }
        if (childrenVisit.hasClass('filled-quest')) {
            childrenVisit.parent().find('.form-error').css({'opacity': '0'});
            childrenVisit.css('border-color', '#a3a2a2');
        }
        if (preferenceChoose.hasClass('filled-quest')) {
            preferenceChoose.find('.form-error').css({'opacity': '0'});
        }
        if (budgetChoose.hasClass('filled-quest')) {
            budgetChoose.parent().find('.form-error').css({'opacity': '0'});
            budgetChoose.css('border-color', '#a3a2a2');
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
    };

    let showErrorMessage = () => {
        for (let k = 0; k < $('.form-slide_active').find('.form-quest').length; k++) {
            if (!$('.form-slide_active').find(`.form-quest:eq(${k})`).find('.filled-quest').length) {
                if ($('.form-slide_active').find(`.form-quest:eq(${k})`).find('.form-picker').length) {
                    $('.form-slide_active').find(`.form-quest:eq(${k})`).find('.form-error').css('opacity', '1');
                    $('.form-slide_active').find(`.form-quest:eq(${k})`).find('.form-picker').css('border-color', '#c92533');
                } else {
                    $('.form-slide_active').find(`.form-quest:eq(${k})`).find('.form-error').css('opacity', '1');
                }

            }
        }
    };

    let checkFilledForm = () => {
        hideErrorMessage();
        let numQuest = $(`.form-slide_active`).find('.form-quest').length;
        let numFilled = $(`.form-slide_active`).find('.filled-quest').length;
        if (numFilled >= numQuest) {
            $(`.form-slide_active`).find('.next-btn').addClass('active-next-btn');
        } else {
            $(`.form-slide_active`).find('.next-btn').removeClass('active-next-btn');
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
        const service = [];
        customer.taste = taste;
        customer.preferences = pref;
        customer.service = service;
        for (let i = 0; i < preferenceChoose.find('.active-form-tab').length; i++) {
            pref.push(preferenceChoose.find(`.active-form-tab:eq(${i})`).html().split('<')[0]);
        };
        for (let i = 0; i < tasteChoose.find('.active-form-tab').length; i++) {
            taste.push(tasteChoose.find(`.active-form-tab:eq(${i})`).html().split('<')[0]);
        };
        for (let i = 0; i < serviceChoose.find('.active-form-tab').length; i++) {
            service.push(serviceChoose.find(`.active-form-tab:eq(${i})`).html().split('<')[0]);
        };
        customer.comment = commentForm.val();
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
            alert(`New customer request is done! Results of the application form: 1.Kyiv been - ${newCustomer.kyivVisit}; 2.Arrive date - ${newCustomer.arriveDate}; 3.Visit days - ${newCustomer.daysNum}; 4.Children - ${newCustomer.children}; 5.Preferences - ${newCustomer.preferences}; 6.Budget - ${newCustomer.budget} 7.Taste - ${newCustomer.taste}; Additional info: ${newCustomer.service} Comment-${newCustomer.comment} Contact info - Name: ${newCustomer.name}; Email: ${newCustomer.email}.`);
        }
    };

    let getUptoDateQuests = () => {
        const quests = {};
        quests.kyivQuest = kyivVisit.parents('.form-quest');
        quests.dateQuest = arriveDate.parents('.form-quest');
        quests.daysQuest = daysVisit.parents('.form-quest');
        quests.childrenQuest = childrenVisit.parents('.form-quest');
        quests.preferenceQuest = preferenceChoose.parents('.form-quest');
        quests.budgetQuest = budgetChoose.parents('.form-quest');
        quests.tasteQuest = tasteChoose.parents('.form-quest');
        quests.additionalQuest = $('#service-form').parents('.form-quest');
        quests.commentQuest = $('#comment-form').parents('.form-quest');
        return quests;
    };

    ///////////MEDIA QUERIES/////////////////

    let adaptToDeviceScreen = () => {
        const currentQuest = getUptoDateQuests();
        if (window.innerWidth <= 578 && !changedMediaThird) {
            $('#slide-four').removeClass('hidden-slide');
            $('#slide-four').addClass('form-slide');
            $('#slide-five').removeClass('hidden-slide');
            $('#slide-five').addClass('form-slide');
            $('#slide-six').removeClass('hidden-slide');
            $('#slide-six').addClass('form-slide');
            updatePagination();
            currentQuest.childrenQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));
            currentQuest.preferenceQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));
            currentQuest.budgetQuest.appendTo($('#slide-four').find('.quest-container:eq(0)'));
            currentQuest.tasteQuest.appendTo($('#slide-five').find('.quest-container:eq(0)'));
            currentQuest.additionalQuest.appendTo($('#slide-six').find('.quest-container:eq(0)'));
            currentQuest.commentQuest.appendTo($('#slide-six').find('.quest-container:eq(0)'));

            changedMediaThird = true;
            changedMediaFirst = false;
            changedMediaSecond = false;
        }
        if (window.innerWidth <= 768 && window.innerWidth >= 579 && !changedMediaSecond) {
            $('#slide-four').removeClass('hidden-slide');
            $('#slide-four').addClass('form-slide');
            $('#slide-five').removeClass('form-slide');
            $('#slide-five').addClass('hidden-slide');
            $('#slide-six').removeClass('form-slide');
            $('#slide-six').addClass('hidden-slide');
            $('#next-4').addClass('active-next-btn');
            updatePagination();

            currentQuest.childrenQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));
            currentQuest.preferenceQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));

            currentQuest.budgetQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));
            currentQuest.tasteQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));

            currentQuest.additionalQuest.appendTo($('#slide-four').find('.quest-container:eq(0)'));
            currentQuest.commentQuest.appendTo($('#slide-four').find('.quest-container:eq(0)'));

            changedMediaSecond = true;
            changedMediaFirst = false;
            changedMediaThird = false;
        }
        if (window.innerWidth <= 993 && window.innerWidth >= 769 && !changedMediaFirst) {
            $('#slide-four').removeClass('form-slide');
            $('#slide-four').addClass('hidden-slide');
            $('#slide-five').removeClass('form-slide');
            $('#slide-five').addClass('hidden-slide');
            $('#slide-six').removeClass('form-slide');
            $('#slide-six').addClass('hidden-slide');
            updatePagination();

            currentQuest.childrenQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));
            currentQuest.preferenceQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));
            currentQuest.budgetQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));

            currentQuest.tasteQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));
            currentQuest.additionalQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));
            currentQuest.commentQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));

            changedMediaFirst = true;
            changedMediaSecond = false;
            changedMediaThird = false;
        }
        if (window.innerWidth >= 994) {
            $('#slide-four').removeClass('form-slide');
            $('#slide-four').addClass('hidden-slide');
            $('#slide-five').removeClass('form-slide');
            $('#slide-five').addClass('hidden-slide');
            $('#slide-six').removeClass('form-slide');
            $('#slide-six').addClass('hidden-slide');
            updatePagination();
            currentQuest.childrenQuest.appendTo($('#slide-two').find('.quest-container:eq(0)'));
            currentQuest.preferenceQuest.appendTo($('#slide-two').find('.quest-container:eq(0)'));
            currentQuest.budgetQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));
            currentQuest.tasteQuest.appendTo($('#slide-two').find('.quest-container:eq(1)'));

            currentQuest.additionalQuest.appendTo($('#slide-three').find('.quest-container:eq(0)'));
            currentQuest.commentQuest.appendTo($('#slide-three').find('.quest-container:eq(1)'));

            changedMediaFirst = false;
            changedMediaSecond = false;
            changedMediaThird = false;

        }
    };

    adaptToDeviceScreen();

    $(window).resize(() => {
        adaptToDeviceScreen();
    });


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
            showErrorMessage();
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
            $(e.target).find('.form-plus-icon').removeClass('form-plus-icon-turned');
            $(e.target).siblings('.form-error').css({'opacity': '1'});
        } else {
            $(e.target).parent().addClass('filled-quest');
            $(e.target).toggleClass('active-form-tab');
            $(e.target).find('.form-plus-icon').toggleClass('form-plus-icon-turned');
            hideErrorMessage();
        }
    });

    $(function () {
        $("#arrive-date").datepicker({
            dateFormat: 'dd/mm/yy',
            minDate: new Date(),
            firstDay: 1,
            hideIfNoPrevNext: true
        });

    });

});

