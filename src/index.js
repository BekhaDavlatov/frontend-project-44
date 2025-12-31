import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const ROUNDS = 3;

export default (rule, generateRound) => {
  const name = greetUser();
  console.log(rule);

  for (let i = 0; i < ROUNDS; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer (Correct answer was ${correctAnswer})`);
      console.log(`Lets try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
