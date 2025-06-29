import https from 'https';
import chalk from 'chalk';

const url = 'https://official-joke-api.appspot.com/random_joke';

const getJoke = () => {
    https.get(url, (response) => {
        let joke = '';
        response.on('data', (catchData) => {
            joke += catchData;
        });
        response.on('end', () => {
            let finalJoke = JSON.parse(joke);
            showData(finalJoke);
            // console.log(finalJoke);
        });
        response.on('error', (err) => {
            console.log(err.message);
        })
    });
}
getJoke();

const showData = (finalJoke) => {
    console.log('\n');
    console.log(chalk.whiteBright(`${finalJoke.setup}`));
    console.log(chalk.redBright(`${finalJoke.punchline}`));
    console.log('\n');
}

console.log('Searching for Jokes........');