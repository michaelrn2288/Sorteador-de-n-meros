const result = document.querySelector('#result');

function getResult() {
    const minNumber = Number(document.querySelector('#minNumber').value);
    const maxNumber = Number(document.querySelector('#maxNumber').value);

    result.innerHTML = '';

    function validateInputs() {
        if (!minNumber || !maxNumber) {
            return 'preencha ambos os campos com números positivos apenas'
        } else if (minNumber >= maxNumber) {
            return 'o número mínimo deve ser menor do que o máximo'
        } else if (minNumber >= 10) {
            return 'o número mínimo deve ser menor que 10'
        } else if (maxNumber <= 10) {
            return 'o número máximo deve ser maior do que 10'
        } else if (maxNumber > 200) {
            return 'o número máximo não pode ser maior que 200'
        } else { return 'ok' }
    }

    function createDivResult(cellContent) {
        const div = document.createElement('div');
        div.textContent = cellContent;
        result.appendChild(div)
    }

    if (validateInputs() !== 'ok') {
        return createDivResult(validateInputs());
    }

    const generatedNumbers = [drawNumber(minNumber, maxNumber)];

    function generateNumbers() {
        while (generatedNumbers[generatedNumbers.length - 1] !== 10) {
            generatedNumbers[generatedNumbers.length] = drawNumber(minNumber, maxNumber)
        }
    }

    function drawNumber(minNumber, maxNumber) {
        return Math.floor(Math.random(minNumber, maxNumber) * (maxNumber - minNumber) + minNumber);
    }

    generateNumbers();

    function renderResult() {
        for (let number of generatedNumbers) {
            createDivResult(number)
        }
    }

    renderResult()
}