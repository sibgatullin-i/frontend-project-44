#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { checkAnswer, selectRandomItem } from '../cli.js';

let successCounter = 0;
const multiplier = 10; // you may adjust it to really test yourself

export default function brainCalc(correctAnswersRequired) {
  console.log('What is the result of the expression?');
  while (successCounter < correctAnswersRequired) {
    const randomNumbers = [];
    for (let i = 0; i < 2; i += 1) {
      randomNumbers.push(Math.random());
      randomNumbers[i] *= multiplier;
      randomNumbers[i] = Math.floor(randomNumbers[i]);
    }
    const randomOperator = selectRandomItem(['+', '-', '*']);
    let correctAnswer = 0;
    correctAnswer = randomOperator === '+' ? randomNumbers[0] + randomNumbers[1] : correctAnswer;
    correctAnswer = randomOperator === '-' ? randomNumbers[0] - randomNumbers[1] : correctAnswer;
    correctAnswer = randomOperator === '*' ? randomNumbers[0] * randomNumbers[1] : correctAnswer;
    console.log(`Question: ${randomNumbers[0]} ${randomOperator} ${randomNumbers[1]} = ?`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (checkAnswer(userAnswer, correctAnswer)) {
      successCounter += 1;
    } else { break; }
  }
  return successCounter === correctAnswersRequired;
}
