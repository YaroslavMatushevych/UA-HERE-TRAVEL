
$(document).ready(function () {

    const kyivVisit = $('#kyiv-been');
    const arriveDate = $('#arrive-date');
    const daysVisit = $('#days-visit');
    const childrenVisit = $('#children-visit');
    const preferenceChoose = $('#preferences-choose');
    const budgetChoose = $('#budget');
    const tasteChoose = $('#taste');

    let hideErrorMessage=()=>{
        if(kyivVisit.hasClass('filled-quest')){
            kyivVisit.find('.form-error').css({'opacity':'0'});
        };
        if(arriveDate.val()){
            arriveDate.siblings('.form-error').css({'opacity':'0'});
        };
        if(daysVisit.hasClass('filled-quest')){
            daysVisit.find('.form-error').css({'opacity':'0'});
        }
        if(childrenVisit.hasClass('filled-quest')){
            childrenVisit.find('.form-error').css({'opacity':'0'});
        }
        if(preferenceChoose.hasClass('filled-quest')){
            preferenceChoose.find('.form-error').css({'opacity':'0'});
        }
        if(budgetChoose.hasClass('filled-quest')){
            budgetChoose.find('.form-error').css({'opacity':'0'});
        }
        if(tasteChoose.hasClass('filled-quest')){
            tasteChoose.find('.form-error').css({'opacity':'0'});
        }
    };

    let showErrorMessageFirst=()=>{
        if(!kyivVisit.hasClass('filled-quest')){
            kyivVisit.find('.form-error').css({'opacity':'1'});
        };
        if(!arriveDate.val()){
            arriveDate.siblings('.form-error').css({'opacity':'1'});
        };
        if(!daysVisit.hasClass('filled-quest')){
            daysVisit.find('.form-error').css({'opacity':'1'});
        }
    };

    let showErrorMessageSecond=()=>{
        if(!childrenVisit.hasClass('filled-quest')){
            childrenVisit.find('.form-error').css({'opacity':'1'});
        }
        if(!preferenceChoose.hasClass('filled-quest')){
            preferenceChoose.find('.form-error').css({'opacity':'1'});
        }
        if(!budgetChoose.hasClass('filled-quest')){
            budgetChoose.find('.form-error').css({'opacity':'1'});
        }
        if(!tasteChoose.hasClass('filled-quest')){
            tasteChoose.find('.form-error').css({'opacity':'1'});
        }
    };

    let checkFilledForm =()=>{
        if((kyivVisit.hasClass('filled-quest')) && (daysVisit.hasClass('filled-quest')) && ($('#arrive-date').val())){
            $('#next-1').addClass('active-next-btn');
        };
        if((childrenVisit.hasClass('filled-quest')) && (preferenceChoose.hasClass('filled-quest')) && (budgetChoose.hasClass('filled-quest')) && (tasteChoose.hasClass('filled-quest'))){
            $('#next-2').addClass('active-next-btn');
        };
    };


    $('.next-btn').click((e)=>{
        checkFilledForm();
        hideErrorMessage();
        let numBtn = e.target.id.split('-')[1];
            if(e.target.classList.contains('active-next-btn')){
                document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('active-form-slide');
                document.getElementsByClassName('form-slide')[numBtn-1].classList.add('left-form-slide');
                document.getElementsByClassName('form-slide')[numBtn].classList.add('active-form-slide');
            }else{
                if(numBtn==1){
                    showErrorMessageFirst();
                }
                if(numBtn==2){
                    showErrorMessageSecond();
                }
            }
        });

    $('.prev-btn').click((e)=>{
            let numBtn = e.target.id.split('-')[1];
            document.getElementsByClassName('form-slide')[numBtn].classList.remove('active-form-slide');
            document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('left-form-slide');
            document.getElementsByClassName('form-slide')[numBtn-1].classList.add('active-form-slide');
        });

    $('.form-tab').click((e)=>{
        $(e.target).siblings().removeClass('active-form-tab');
        $(e.target).addClass('active-form-tab');
        $('.active-form-tab').parent().addClass('filled-quest');
        hideErrorMessage();
    });

    $('.form-multi-tab').click((e)=>{
        $(e.target).toggleClass('active-form-tab');
        $(e.target).find('.fa-plus').toggleClass('fa-plus-turned');
        $('.active-form-tab').parent().addClass('filled-quest');
        hideErrorMessage();
    });

});

