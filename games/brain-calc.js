#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { checkAnswer, randomItem } from '../src/cli.js';

let successCounter = 0;
const multiplier = 10; // you may adjust it to really test yourself

export default function brainCalc(correctAnswersRequired) {
  console.log('What is the result of the expression?');
  while (successCounter < correctAnswersRequired) {
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    /* const operatorRandomSeed = Math.random();
    let randomOperator = '';
    let correctAnswer = 0;
    if (operatorRandomSeed >= 0.66) {
      randomOperator = '*';
      correctAnswer = randomNumbers[0] * randomNumbers[1];
    } else if (operatorRandomSeed <= 0.33) {
      randomOperator = '+';
      correctAnswer = randomNumbers[0] + randomNumbers[1];
    } else {
      randomOperator = '-';
      correctAnswer = randomNum1 - randomNum2;
    }
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2} = ?`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (checkAnswer(userAnswer, correctAnswer)) {
      successCounter += 1;
    } else { break; }
  }
  return successCounter === correctAnswersRequired;
}
