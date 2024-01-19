//popup
const basket = document.querySelector('.header__account-elem-basket');
const popup = document.querySelector('.basket__popup');
basket.addEventListener('click', function(){
    popup.classList.add('basket__popup_active')
})
//slider
let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider__button').addEventListener('click', function(){
    offset = offset + 395;
    if (offset > 790) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

const form = document.querySelector('.consultation__form');
const nameVal = form.elements.name;
const phone = form.elements.phone;

const popupForm = document.querySelector('.form__popup');
console.log(popupForm)
form.addEventListener('submit', function(e){
e.preventDefault();
if(nameVal.value && phone.value){
    popupForm.classList.add('form__popup_active');
    form.reset();
}
})

const closeEl = document.querySelector('.form__popup-close');
closeEl.addEventListener('click', function(){
    popupForm.classList.remove('form__popup_active');
})


