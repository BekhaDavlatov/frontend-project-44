import { randomInt } from '../utils.js';

const operators = ['+', '-', '*'];

const calculate = (a, op, b) => {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator ${op}`);
  }
};

export default () => {
  const a = randomInt(1, 25);
  const b = randomInt(1, 25);
  const op = operators[randomInt(0, operators.length - 1)];
  const question = `${a} ${op} ${b}`;
  const correctAnswer = String(calculate(a, op, b));
  return [question, correctAnswer];
};
