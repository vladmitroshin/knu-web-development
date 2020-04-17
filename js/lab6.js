'use strict';

// first part
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let orgName = document.getElementById('org-name');
let cardNumber = document.getElementById('card-number');
let phoneNumber = document.getElementById('phone-number');
let userEmail = document.getElementById('email');

let listOfInputs = document.querySelectorAll('.first-part > form > li > input');

let userNamePattern = /^([А-Я][а-я]+|[A-Z][a-z]+)$/;
let orgNamePattern = /^[A-Za-zА-Яа-я0-9]+$/;
let cardNumberPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
let phoneNumberPatten = /^\+380(\s|-)\d{2}(\s|-)\d{3}(\s|-)\d{2}(\s|-)\d{2}$/;
let emailPattern = /^\w+@\w+\.\w+$/;

let errors = 0;

document.getElementById('submit-button-1').addEventListener('click', function () {

    listOfInputs.forEach((element) => {
        if (!element.value) {
            alert(`Не заполнено поле '${element.previousElementSibling.innerHTML}'`);
        }
    });

    if (!(userNamePattern.test(firstName.value) && userNamePattern.test(lastName.value))) {
        alert('Некорректное имя или фамилия!');
        return;
    }

    if (!orgNamePattern.test(orgName.value)) {
        alert('Начните с буквы или цифры!');
        return;
    }

    if (!cardNumberPattern.test(cardNumber.value)) {
        if (errors == 2) {
            alert('Попытки ввода окончены!');
            cardNumber.disabled = true;
            return;
        }
        errors++;
        alert('Некорретный формат номера карты!');
        return;
    }

    if (!phoneNumberPatten.test(phoneNumber.value)) {
        alert('Некорректный формат номера!\nПример корректных номеров: +380-98-123-45-67, +380 98 123 45 67');
        return;
    }

    if (!emailPattern.test(userEmail.value)) {
        alert('Некорректный адрес почты!\nПример корректного адреса: qwerty123@mail.com');
        return;
    }

    alert('Все данные введены корректно!');
});

document.getElementById('reset-button-1').addEventListener('click', function () {
    listOfInputs.forEach(element => element.value = '');
});

//input card code as 1234 5678 9012 3456
for (let i in ['input', 'change', 'blur', 'keyup']) {
    cardNumber.addEventListener('input', formatCardCode, false);
}
function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
}


// second part
let inputString = document.getElementById('input-string');
let result = document.getElementById('result');

document.getElementById('submit-button-2').addEventListener('click', function () {
    result.innerHTML = inputString.value.replace(/\s/g, '!');
});

document.getElementById('reset-button-2').addEventListener('click', function () {
    inputString.value = '';
});
