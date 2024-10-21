
function findLargerNumber() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    } else {
        var larger = num1 > num2 ? num1 : num2;
        document.getElementById("result").innerHTML = "The larger number is: " + larger;
    }
}