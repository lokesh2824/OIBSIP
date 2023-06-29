var opearand1;
var operator;

function appendValue(arg){
    const input = document.getElementById("result");
    input.value += arg;
    // console.log(document.getElementById("result").value)
}

function clearInputField(){
    const input = document.getElementById("result");
    const value = input.value;

    const updateValue = value.slice(0,-1);
    input.value = updateValue;
}

function clearInput(){
    document.getElementById("result").value="";

    const history = document.getElementById("log");
    history.innerHTML = ""
}

function appendOperand(arg){
    opearand1 = document.getElementById("result").value;
    console.log(opearand1)
    document.getElementById("result").value = "";
    operator = arg;
    console.log(operator)

    
}

function calculate(){
    let result = 0;
    const opearand2 = document.getElementById("result").value;
    console.log(opearand2)

    switch(operator){

        case "+":
            result = opearand1 + opearand2;
            break;
        case "-":
            result = opearand1 - opearand2;
            break;
        case "*":
            result = opearand1 * opearand2;
            break;
        case "/":
            result = opearand1 / opearand2;
            break;
        default :
            result = Invalid;
    }
    document.getElementById("result").value = result;

    const history = document.getElementById("log");
    history.innerHTML = opearand1 + operator + opearand2
}
