#!/usr/bin/env node

import readlineSync from 'readline-sync';

let successCounter = 0;

export default function brainEven(name, correctAnswersRequired) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (successCounter < correctAnswersRequired) {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && userAnswer === 'yes') || (randomNum % 2 !== 0 && userAnswer === 'no')) {
      // corect
      successCounter += 1;
      console.log('Correct!');
    } else {
      // incorrect
      if (userAnswer === 'yes') {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
      }
      break;
    }
  }
  return successCounter === correctAnswersRequired;
}
