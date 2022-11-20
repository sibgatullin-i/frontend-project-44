#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { checkAnswer, getGCD } from '../src/cli.js';

let successCounter = 0;

export default function brainGCD(correctAnswersRequired) {
  console.log('Find the greatest common divisor of given numbers.');
  while (successCounter < correctAnswersRequired) {
    const randomNum1 = Math.floor(Math.random() * 100) + 1;
    const randomNum2 = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum1, randomNum2);
    const correctAnswer = getGCD(randomNum1, randomNum2);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (checkAnswer(userAnswer, correctAnswer)) {
      successCounter += 1;
    } else { break; }
  }
  return successCounter === correctAnswersRequired;
}
