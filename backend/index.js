const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { calculator } = require('./calculator');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Это Express, а я - разработчик');
});

app.get('/value', (req, res) => {
    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueCalcObject = JSON.parse(dataCalc);

    fs.writeFileSync(path.join(__dirname, 'data-calc.json'), JSON.stringify(valueCalcObject), 'utf-8');
    const dataCalcNew = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    res.json(JSON.parse(dataCalcNew));
});

app.post('/plus', (req, res) => {
    calculator(req, res)
});

app.post('/minus', (req, res) => {
    calculator(req, res)
});

app.post('/multiply', (req, res) => {
    calculator(req, res)
});

app.post('/divide', (req, res) => {
    calculator(req, res)
});


app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});
