#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainEven from '../bin/brain-even.js';
import brainCalc from '../bin/brain-calc.js';

const correctAnswersRequired = 3; // you may later change it. Or even ask user to select

const endgameMessage = (name, state) => {
  console.log(state ? `Congratulations, ${name}!` : `Better luck next time, ${name}!`);
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

endgameMessage(name, brainEven(name, correctAnswersRequired));

endgameMessage(name, brainCalc(name, correctAnswersRequired));
