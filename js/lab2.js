'use strict';

let button = document.getElementById('cone-surface-btn');
button.addEventListener('click', function () {
    let radius = +document.getElementById('cone-radius').value;
    let height = +document.getElementById('height').value;
    if (isNaN(radius) || isNaN(height)) {
        alert('Введите числовые значения!');
    } else if (radius <= 0 || height <= 0) {
        alert('Число должно быть больше нуля!');
    } else {
        let answerArea = document.getElementsByClassName('answer-area');
        let answer = (Math.PI * radius * (Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))));
        answer = answer.toFixed(2);
        answerArea[0].innerHTML = answer + ' см<sup>2</sup>';
    }
});


let circleButton = document.getElementById('arc-length-btn');
circleButton.addEventListener('click', function () {
    let radius = +document.getElementById('circle-radius').value;
    let centerAngle = +document.getElementById('center-angle').value;
    if (isNaN(radius) || isNaN(centerAngle)) {
        alert('Введите числовые значения!');
    } else if (radius <= 0) {
        alert('Радиус должен быть больше нуля!');
    } else if (centerAngle <= 0 || centerAngle >= 360) {
        alert('Угол должен быть в диапазоне от 0 до 360 градусов!');
    } else {
        let answerArea = document.getElementsByClassName('answer-area');
        let answer = Math.PI * radius * (centerAngle / 180);
        answer = answer.toFixed(2);
        answerArea[1].innerHTML = answer + ' см';
    }
});


let triangleButton = document.getElementById('triangle-area-btn');
triangleButton.addEventListener('click', function () {
    let firstSide = +document.getElementById('first-side').value;
    let secondSide = +document.getElementById('second-side').value;
    let angle = +document.getElementById('angle').value;
    if (isNaN(firstSide) || isNaN(secondSide) || isNaN(angle)) {
        alert('Введите числовые значения!');
    } else if (firstSide <= 0 || secondSide <= 0) {
        alert('Радиус должен быть больше нуля!');
    } else if (angle <= 0 || angle >= 180) {
        alert('Угол должен быть в диапазоне от 0 до 180 градусов!');
    } else {
        let answerArea = document.getElementsByClassName('answer-area');
        let answer = 0.5 * firstSide * secondSide * Math.sin(angle * Math.PI / 180);
        answer = answer.toFixed(2);
        answerArea[2].innerHTML = answer + ' см<sup>2</sup>';
    }
});