let buttons = document.querySelectorAll('button');
let inputText = document.getElementById('input_text');
let result;

buttons.forEach(function (element) {
  element.addEventListener('click', function (e) {
    inputText.value += element.innerHTML;
  })
});

document.getElementById('equal').addEventListener('click', (e) => {
  let formula = inputText.value.substring(0, inputText.value.length - 1);
  if(isNaN(formula[formula.length - 1])) {
    inputText.value = 'Error!';
  } else {
    result = eval(formula);
    inputText.value = result;
  }
});

document.getElementById('all_clean').addEventListener('click', () => {
  inputText.value = '';
});