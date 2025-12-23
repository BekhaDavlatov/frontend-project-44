import readlineSync from 'readline-sync';

export default function greetUser() {
  console.log('Welcome to the brain games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Good time of the day, Mr.${name}`);
}
