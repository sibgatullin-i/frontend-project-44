#!/usr/bin/env node

import readlineSync from 'readline-sync';

let successCounter = 0;

export default function brainCalc(name, correctAnswersRequired) {
  console.log('Calculate following equations correctly.');
  while (successCounter < correctAnswersRequired) {
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomNum2 = Math.floor(Math.random() * 10);
    const operatorRandomSeed = Math.random();
    let randomOperator = '';
    let correctAnswer = 0;
    if (operatorRandomSeed >= 0.66) {
      randomOperator = '*';
      correctAnswer = randomNum1 * randomNum2;
    } else if (operatorRandomSeed <= 0.33) {
      randomOperator = '+';
      correctAnswer = randomNum1 + randomNum2;
    } else {
      randomOperator = '-';
      correctAnswer = randomNum1 - randomNum2;
    }
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2} = ?`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === correctAnswer) {
      successCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  return successCounter === correctAnswersRequired;
}
