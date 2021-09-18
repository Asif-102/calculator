const calculate = [];
const calcInput = document.getElementById('typed-numbers');
const result = document.getElementById('result');

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
            calculate.length = null;
            result.innerText = '0';
        }
        else if (number == '<') {
            calcInput.value = calcInput.value.slice(0, -1);
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
        updateResult();
    }
})

function updateInputAndArray(number) {
    calculate.push(number)
    if (calculate[0] == '+' || calculate[0] == '-' || calculate[0] == '*' || calculate[0] == '/') {
        calculate.pop();
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

}

function updateResult() {
    const typedKey = calcInput.value;
    const numAr = []
    let num  = '';
    for(let i=0; i< typedKey.length; i++){
        if(!isNaN(typedKey[i])){
            num = num + typedKey[i]
        }else{
            numAr.push(num);
            num = '';
            numAr.push(typedKey[i]);
        }
    }
    console.log(numAr);
}
