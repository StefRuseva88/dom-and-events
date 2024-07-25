function subtract() {
    let firstInput = document.getElementById("firstNumber");
    let secondInput = document.getElementById("secondNumber");
    let resultDiv = document.getElementById("result");

    let firstValue = Number(firstInput.value);
    let seconValue = Number(secondInput.value);

    let finalResult = firstValue - seconValue;

    resultDiv.textContent = finalResult;
} 