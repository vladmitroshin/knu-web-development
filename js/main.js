'use strict';

let reportFrame = document.getElementById('report');
let solutionFrame = document.getElementById('solution');

let listOfLabs = document.querySelectorAll('nav > li > a');

listOfLabs.forEach(function (listItem, index) {
    listItem.addEventListener('click', function () {
        reportFrame.setAttribute('src', `reports/report${index + 1}.html`);
        solutionFrame.setAttribute('src', `labs/lab${index + 1}.html`);
    });
});

let clientScreenWidth = document.documentElement.clientWidth;
if (clientScreenWidth < 1700) {
    alert(`Ширина вашего монитора составляет ${clientScreenWidth} px. 
Рекомендуется увеличить ширину экрана до 1920 px в помощью веб-инспектора для корректного отображения проекта.`);
}

// Доступ к iframe с одного домена на дж квери можно сделать так
// $('iframe').contents().find('body'); - боди вашего фрейма
// на чистом джс так
// frames[0].contentWindow.document.body  - боди вашего фрейма