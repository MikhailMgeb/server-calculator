const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Это Express, а я - разработчик');
});

app.get('/value', (req, res) => {
    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-start.json'), 'utf-8');
    const valueCalcStart = JSON.parse(dataCalc);
    res.json(valueCalcStart);
});

app.post('/plus', (req, res) => {
    /////РАЗОБРАТЬСЯ
    const numbers = req.body.value;
    console.log(numbers);

    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueCalcPlus = JSON.parse(dataCalc);

    valueCalcPlus.value = Number(valueCalcPlus.value) + Number(numbers);

    const dataCalcNew = fs.writeFileSync(path.join(__dirname, 'data-calc.json'), JSON.stringify(valueCalcPlus), 'utf-8');

    res.json(dataCalcNew);
});

app.post('/minus', (req, res) => {
    const numbers = req.body;

    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueCalcMinus = JSON.parse(dataCalc);
    res.json(valueCalcMinus);
});

app.post('/multiply', (req, res) => {
    const numbers = req.body;

    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueCalcMultiply = JSON.parse(dataCalc);
    res.json(valueCalcMultiply);
});

app.post('/divide', (req, res) => {
    const numbers = req.body;

    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueCalcDivide = JSON.parse(dataCalc);
    res.json(valueCalcDivide);
});


app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});