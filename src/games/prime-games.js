import randomInt from '../utils.js';
import isPrime from '../is-prime';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const generateRound = () => {
    const num = randomInt(2, 100);
    const question = String(num);
    const answer = isPrime(num) ? 'yes' : 'no';
    return { question, answer }
}