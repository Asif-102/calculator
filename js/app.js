const calculate = [];

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if(number == 'C'){
            calcInput.value = '';
        }
        else if(number == '<'){
            calcInput.value = calcInput.value.slice(0, -1);
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})