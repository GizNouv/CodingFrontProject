var firstInput = document.getElementById("firstInput")
var secondInput = document.getElementById("secondInput")
var operator = document.getElementById("operator")
var calculate = document.getElementById("calculate")
var result = document.getElementById("result")
calculate.addEventListener("click", calculator)
function calculator(){
    if(operator.value === "+" || "-" || "*" || "/"){
        result.innerHTML = eval(parseFloat(firstInput.value) + (operator.value) + parseFloat(secondInput.value))
    }
}
