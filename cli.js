import readlineSync from 'readline-sync';

export default function greetUser() {
    console.log('Welcome to the brain games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, Mr.${name} and very welcome to the brain games`);

}