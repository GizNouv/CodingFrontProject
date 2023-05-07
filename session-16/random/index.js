var firstInput = document.getElementById("firstInput")
var secondInput = document.getElementById("secondInput")
var result = document.getElementById("result")
firstInput.addEventListener("keyup" , generate)
secondInput.addEventListener("keyup" , generate)
function generate(){
   result.innerHTML = Math.floor(Math.random() * (parseFloat(secondInput.value) - parseFloat(firstInput.value) + 1) + parseFloat(firstInput.value))
}