const calculate = [];
const calcInput = document.getElementById('typed-numbers');
const result = document.getElementById('result');

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.innerText = '';
            calculate.length = null;
            result.innerText = '0';
        }
        else if (number == '<') {
            calcInput.innerText = calcInput.innerText.slice(0, -1);
            calculate.pop();
        }
        else if (number == '+' || number == '-' || number == '*' || number == '/') {
            if (calculate[calculate.length - 1] != '+' && calculate[calculate.length - 1] != '-' && calculate[calculate.length - 1] != '*' && calculate[calculate.length - 1] != '/') {
                updateInputAndArray(number);
            }
        }
    }
    else {
        updateInputAndArray(number);
    }
})

function updateInputAndArray(number) {
    calculate.push(number)
    if (calculate[0] == '+' || calculate[0] == '-' || calculate[0] == '*' || calculate[0] == '/') {
        calculate.pop();
    }
    else {
        const previousNumber = calcInput.innerText;
        const newNumber = previousNumber + number;
        calcInput.innerText = newNumber;
    }

}

function updateResult() {
    const typedKey = calcInput.innerText;
    console.log(typedKey)
    if (typedKey[typedKey.length - 1] != '+' || typedKey[typedKey.length - 1] != '-' || typedKey[typedKey.length - 1] != '*' || typedKey[typedKey.length - 1] != '/') {

        if(typedKey === "")
        {
            result.innerText = 0;
        }
        else
        {
            result.innerText = eval(typedKey);
        }
        
    }
}
