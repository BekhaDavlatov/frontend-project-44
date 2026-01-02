import { randomInt } from '../utils.js';
import { gcd } from '../gcd.js';

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return { question, answer };
};
