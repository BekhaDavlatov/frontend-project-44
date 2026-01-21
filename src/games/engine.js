import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function runGame(description, generateRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const round = generateRound();
    console.log(`Question: ${round.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== round.answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}