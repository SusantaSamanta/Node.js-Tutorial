//       url  : 'https://api.openweathermap.org/data/2.5/weather'
//       key :  0283f30a1aa2a19cedb2a0229971b6ac
//       email :  bofawa4467@hartaria.com
///      pw  :  Raju@2024

import readline from 'readline/promises';
import https from 'https';
import chalk from 'chalk';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '0283f30a1aa2a19cedb2a0229971b6ac';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const showResult = (data) => {
    // console.log(data);
    console.log(`\n${chalk.hex('#faebd7')('-------: Weather Details :------- ')}\n`)
    console.log(`${chalk.hex('#faebd7')('City :')} ${chalk.hex('#fff262')(data.name)}`)
    console.log(`${chalk.hex('#faebd7')('Country :')} ${chalk.hex('#fff262')(data.sys.country)}`)
    console.log(`${chalk.hex('#faebd7')('Temperature :')} ${chalk.hex('#fff262')(`${data.main.temp.toFixed()}°c`)}`)
    console.log(`${chalk.hex('#faebd7')('Feels Like :')} ${chalk.hex('#fff262')(`${data.main.feels_like.toFixed()}°c`)}`)
    console.log(`${chalk.hex('#faebd7')('Humidity :')} ${chalk.hex('#fff262')(`${data.main.humidity}%`)}`)
    console.log(`${chalk.hex('#faebd7')('Wind Speed')} ${chalk.hex('#fff262')(`${data.wind.speed.toFixed(1)}m/s`)}`)
    console.log(`${chalk.hex('#faebd7')('Sunrise :')} ${chalk.hex('#fff262')(`${ new Date(data.sys.sunrise*1000).toLocaleTimeString().toUpperCase()}`)}`)
    console.log(`${chalk.hex('#faebd7')('Sunset :')} ${chalk.hex('#fff262')(`${ new Date(data.sys.sunset*1000).toLocaleTimeString().toUpperCase()}`)}\n`)
    
    
}   

const weatherSearch = async (city) => {
    const finalUrl = `${url}?q=${city}&appid=${key}&units=metric`;
    try {
        const response = await fetch(finalUrl);
        if (response.status != 200) {
            throw new Error();
        } else {
            let finalData = await response.json();
            showResult(finalData);
            // console.log(finalData);
        }

    } catch (err) {
        console.log(`\n${chalk.red('Ops!')}`, chalk.hex('#ff8c45')(`${chalk.hex('#ffffff')(city)} city can't found, try again..... \n`));
    }

}

/// using https get method
const weatherSearch_1 = (city) => {F
    const finalUrl = `${url}?q=${city}&appid=${key}&units=metric`;
    let finalData = '';
    https.get(finalUrl, (res) => {
        res.on('data', (getData) => {
            finalData += getData;
        });
        res.on('end', () => {
            finalData = JSON.parse(finalData);
            console.log(finalData)
            console.log(finalData.cod);

        })
        res.on('error', (err) => {
            console.log(err)
        })
    });
}

const inputCity = await rl.question(chalk.hex('#ffa66b')('\nEnter a city name : '))
weatherSearch(inputCity);



