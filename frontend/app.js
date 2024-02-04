const calculator = document.querySelector('.calculator');
const value = document.querySelector('.value');

fetch('http://localhost:3000/value')
    .then(response => response.json())
    .then(answerFromServer => {
        value.value = answerFromServer.value;
    });

function checkOperations(dataSet) {

    if (!isNaN(Number(dataSet))) {
        return value.value += dataSet;
    }

    return fetch(`http://localhost:3000/${dataSet}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ value: value.value })
    })
        .then(response => response.json())
        .then(answerFromServer => {
            value.value = answerFromServer.value;
        })
}

calculator.addEventListener('click', (event) => {
    const target = event.target;
    const closest = target.closest('.calculator__num');

    if (closest === null) {
        return;
    }

    const dataAtr = closest.dataset.symbol;

    if (closest === null) {
        return;
    }

    if (dataAtr === 'c') {
        value.value = 0;
        return;
    }

    if (value.value === '0') {
        value.value = dataAtr;
        return;
    }

    checkOperations(dataAtr, value.value);
})

