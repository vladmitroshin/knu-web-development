let buttons = document.querySelectorAll('button:nth-child(n+4)');
let inputText = document.getElementById('input_text');
let result;

buttons.forEach(function (element) {
    element.addEventListener('click', function () {
        inputText.value += element.innerHTML;
    });
});

document.getElementById('equal').addEventListener('click', () => {
    let formula = inputText.value.substring(0, inputText.value.length - 1);
    try {
        result = eval(formula);
        inputText.value = parseFloat(result.toFixed(6));
    }
    catch (err) {
        inputText.value = 'Error!';
    }
});

document.getElementById('all_clean').addEventListener('click', () => {
    inputText.value = '';
});

document.getElementById('clean').addEventListener('click', () => {
    inputText.value = inputText.value.substring(0, inputText.value.length - 1);
});
