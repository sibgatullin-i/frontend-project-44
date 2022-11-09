#!/usr/bin/env node

const correctAnswersRequired = 3;

import readlineSync from 'readline-sync';
import {brainEven} from '../bin/brain-even.js'

const endgameMessage = (name, state) => {
  console.log(state ? `Congratulations, ${name}!` : `Better luck next time, ${name}!`);
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

endgameMessage(name, brainEven(name, correctAnswersRequired));
