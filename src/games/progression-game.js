import { randomInt } from '../utils.js';
import { makeProgression } from '../progression.js';

const minLen = 5;
const maxLen = 10;

export const description = 'What number is missing in the progression?';
export const generateRound = () => {
  const start = randomInt(1, 50);
  const step = randomInt(1, 10);
  const length = randomInt(minLen, maxLen);
  const progression = makeProgression(start, step, length);
  const hiddenIndex = randomInt(0, length - 1);

  const answer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return { question, answer };
};
