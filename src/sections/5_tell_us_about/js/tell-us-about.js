const formContainer = document.getElementById('form-container');
const calendarInput = document.getElementById('arrive-date');

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('next-btn')){
        let numBtn = e.target.id.split('-')[1];
        document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('active-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.add('left-form-slide');
        document.getElementsByClassName('form-slide')[numBtn].classList.add('active-form-slide');
    };
    if(e.target.classList.contains('prev-btn')){
        let numBtn = e.target.id.split('-')[1];
        document.getElementsByClassName('form-slide')[numBtn].classList.remove('active-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.remove('left-form-slide');
        document.getElementsByClassName('form-slide')[numBtn-1].classList.add('active-form-slide');
    };
});

if(!calendarInput.value){
    document.getElementById('arrive-date').style.color="#a3a2a2";
}
