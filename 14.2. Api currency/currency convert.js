import https from 'https';
import chalk from 'chalk';
import readline from 'readline/promises';

const url = 'https://v6.exchangerate-api.com/v6/8cac80cec4bc5ee0ae6b85f0/latest/USD';
const key = '8cac80cec4bc5ee0ae6b85f0';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const mainControl = async () => {
    let inputUSD = await rl.question(chalk.hex('#d3c41a')('\nEnter currency in USD : '));
    let inputCurrencyCode = await rl.question(chalk.hex('#d3c41a')('Enter currency code in which you want to convert (like INR, EUR) : '));
    let a = Number(inputUSD)
    let b = inputCurrencyCode.replace(/\d/g, '');
    inputCurrencyCode = inputCurrencyCode.toUpperCase();
    if (a && b) {
        apiCall(inputUSD, inputCurrencyCode);
        // console.log(inputCurrencyCode);   
    } else {
        console.log(chalk.hex('#ff8c45')('\nInvalid input. Please try again ......!\n'));
    }
    rl.close();


}

mainControl();


const apiCall = (inputUSD, inputCurrencyCode) => {
    let result = 0;
    https.get(url, (response) => {
        let apiResult = '';
        response.on('data', (dataCatch) => {
            apiResult += dataCatch;
        });
        response.on('end', () => {
            let countryObj = JSON.parse(apiResult);
            if (inputCurrencyCode in countryObj.conversion_rates) {
                result = inputUSD * countryObj.conversion_rates[inputCurrencyCode];
                result = result.toFixed(2)
                console.log(`\n${chalk.hex('#ff8c45')(inputUSD)} ${chalk.hex('#d3c41a')('USD is approximately')} ${chalk.hex('#27d618')(result)} ${chalk.hex('#ffffff')(inputCurrencyCode)}\n`);
                
            } else {
                console.log(`\n${chalk.red('Ops!')}`,chalk.hex('#ff8c45')(`${chalk.hex('#ffffff')(inputCurrencyCode)} is not a currency code, try again..... \n`));
            }
        });
        response.on('error', (err) => {
            console.log(err);
        });
    });
}







