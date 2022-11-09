#!/usr/bin/env node

import readlineSync from 'readline-sync';
// okay let's go
let successCounter = 0;
const correctAnswersRequired = 3;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

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
if (successCounter === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}`);
}
