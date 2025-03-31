function calculate(op) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = eval(num1 + op + num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}