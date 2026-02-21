document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.querySelector('#operand-1 input');
    const num2Input = document.querySelector('#operand-2 input');
    const operatorSelect = document.getElementById('operation');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('results');
    
    let calculationHistory = [];
    
    function updateHistoryDisplay() {
    resultDiv.innerHTML = '';
    
    const lastItems = calculationHistory.slice(-3);
    
    lastItems.forEach((calc, index) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        if (index === lastItems.length - 1) { 
            item.classList.add('current-result');
        }
        item.textContent = `${calc.num1} ${calc.operator} ${calc.num2} = ${calc.result}`;
        resultDiv.appendChild(item);
    });
}
    
    function calculate() {
        
        const num1 = num1Input.value;
        const num2 = num2Input.value;
        const operator = operatorSelect.value;
        
        if (num1 === '' || isNaN(num1)) {
            alert('Некорректное число 1');
            return;
        }
        
        if (num2 === '' || isNaN(num2)) {
            alert('Некорректное число 2');
            return;
        }
        
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        
        let result;
        switch(operator) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            case '/':
                if (n2 === 0) {
                    alert('Деление на ноль');
                    return;
                }
                result = n1 / n2;
                break;
        }
        
        calculationHistory.push({
            num1: n1,
            operator: operator,
            num2: n2,
            result: result
        });
        
        updateHistoryDisplay();
        
        resultDiv.scrollTop = resultDiv.scrollHeight;
    }
    
    calculateBtn.addEventListener('click', calculate);
    
    updateHistoryDisplay();
});