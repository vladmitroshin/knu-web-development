'use strict';

// first part

let button = document.getElementById('menu-button');
let list = document.getElementById('menu-list');
let nav = document.getElementById('nav');

button.addEventListener('mouseover', function () {
    list.style.visibility = 'visible';
});
nav.addEventListener('mouseleave', function () {
    list.style.visibility = 'hidden';
});
nav.addEventListener('mouseleave', function () {
    list.style.visibility = 'hidden';
});


let labFrame = document.getElementById('lab-frame');
let listOfLabs = document.querySelectorAll('ul > li > a');

listOfLabs.forEach(function (listItem, index) {
    listItem.addEventListener('click', function () {
        labFrame.setAttribute('src', `../labs/lab${index + 1}.html`);
    });
});

// second part 

let img = document.getElementById('img');
let container = document.getElementById('second-part');
container.style.height = getComputedStyle(img).height;

img.addEventListener('click', function () {
    let pos = 0;
    let t = setInterval(move, 5);

    function move() {
        if (pos >= parseInt(getComputedStyle(container).width) - parseInt(getComputedStyle(img).width)) {
            clearInterval(t);
        }
        else {
            pos += 1;
            img.style.right = pos + 'px';
        }
    }
});

// Доступ к iframe с одного домена на дж квери можно сделать так
// $('iframe').contents().find('body'); - боди вашего фрейма
// на чистом джс так
// frames[0].contentWindow.document.body  - боди вашего фрейма