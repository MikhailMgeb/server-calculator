const fs = require('fs');
const path = require('path');

function calculator(req, res) {
    const numbers = req.body.value;

    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueCalcObject = JSON.parse(dataCalc);

    if (req.url === '/plus') {
        valueCalcObject.value = Number(valueCalcObject.value) + Number(numbers);
    }

    if (req.url === '/minus') {
        valueCalcObject.value = Number(valueCalcObject.value) - Number(numbers);
    }

    if (req.url === '/multiply') {
        valueCalcObject.value = Number(valueCalcObject.value) * Number(numbers);
    }

    if (req.url === '/divide') {
        valueCalcObject.value = Number(valueCalcObject.value) / Number(numbers);
    }

    fs.writeFileSync(path.join(__dirname, 'data-calc.json'), JSON.stringify(valueCalcObject), 'utf-8');
    const dataCalcNew = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    res.json(JSON.parse(dataCalcNew));
}

module.exports = { calculator };
