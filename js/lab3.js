let buttons = document.querySelectorAll('button:nth-child(n+5)');
let inputText = document.getElementById('input_text');
let isAngularMeasureChange = false;
let result;

buttons.forEach(function (element) {
    element.addEventListener('click', function (e) {
        inputText.value += element.innerHTML;
    });
});

document.getElementById('angularMeasure').addEventListener('click', (e) => {
    isAngularMeasureChange = !isAngularMeasureChange;
    if (isAngularMeasureChange) e.target.innerHTML = 'rad';
    else e.target.innerHTML = 'deg';
});

document.getElementById('equal').addEventListener('click', () => {
    let formula = inputText.value.substring(0, inputText.value.length - 1);
    formula = formula.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan');
    if (isAngularMeasureChange) {
        formula = formula.replace(/sin\(/, 'sin(Math.PI / 180 * ').replace(/cos\(/, 'cos(Math.PI / 180 * ').replace(/tan\(/, 'tan(Math.PI / 180 * ');
    }
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
