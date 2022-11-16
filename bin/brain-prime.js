#!/usr/bin/env node

import readlineSync from 'readline-sync';

let successCounter = 0;

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

export default function brainPrime(name, correctAnswersRequired) {
  while (successCounter < correctAnswersRequired) {
    const randomSeed = (Math.random() > 0.5 ? 1 : 0);
    const randomItemIndex = Math.abs(Math.floor(Math.random() * primeNumbers.length - 1));
    const questionNumber = primeNumbers[randomItemIndex] + randomSeed;
    const correctAnswer = primeNumbers.includes(questionNumber) ? 'yes' : 'no';
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct');
      successCounter += 1;
    } else {
      console.log(`Answer "${userAnswer}" is incorrect. Correct answer was "${correctAnswer}".`);
      break;
    }
  }
  return successCounter === correctAnswersRequired;
}
