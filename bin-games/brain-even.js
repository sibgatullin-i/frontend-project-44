#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { checkAnswer } from '../src/cli.js';

let successCounter = 0;

export default function brainEven(name, correctAnswersRequired) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (successCounter < correctAnswersRequired) {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    if (checkAnswer(userAnswer, correctAnswer)) {
      successCounter += 1;
    } else { break; }
  }
  return successCounter === correctAnswersRequired;
}
