function allClear(){
    document.getElementById('display').value = ' '
}
function removeLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}


function evaluateExpression() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
}
