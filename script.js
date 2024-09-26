const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const convertToRoman = (num) => {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' },
    ];

    let result = '';

    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    
    return result;
};

app.post('/romanConverter', (req, res) => {
    const { input } = req.body;

    if (typeof input !== 'number' || input <= 0 || input > 3999) {
        return res.status(400).json({ error: 'Input must be a number between 1 and 3999' });
    }

    const roman = convertToRoman(input);
    res.status(200).json({ roman });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
