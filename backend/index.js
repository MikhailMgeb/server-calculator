const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Это Express, а я - разработчик');
});

app.get('/value', (req, res) => {
    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueStartCalc = JSON.parse(dataCalc);
    res.json(valueStartCalc);
});

app.post('/plus', (req, res) => {
    const numbers = req.body;

    const dataCalc = fs.readFileSync(path.join(__dirname, 'data-calc.json'), 'utf-8');
    const valueStartCalc = JSON.parse(dataCalc);
    res.json(valueStartCalc);
});

// app.post('/minus', (req, res) => {
//     res.json(valueStartCalc);
// });

// app.post('/multiply', (req, res) => {
//     res.json(valueStartCalc);
// });

// app.post('/divide', (req, res) => {
//     res.json(valueStartCalc);
// });


app.listen(port, () => {
    console.log(`Приложение запущено и слушает порт ${port}`);
});