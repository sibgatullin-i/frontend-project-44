#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { checkAnswer } from '../src/cli.js';

let successCounter = 0;

const primeNumbersPart1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
const primeNumbersPart2 = [43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const primeNumbers = [...primeNumbersPart1, ...primeNumbersPart2]; // the line was too long...

export default function brainPrime(correctAnswersRequired) {
  while (successCounter < correctAnswersRequired) {
    const randomSeed = (Math.random() > 0.5 ? 1 : 0);
    const randomItemIndex = Math.abs(Math.floor(Math.random() * (primeNumbers.length - 1)));
    const questionNumber = primeNumbers[randomItemIndex] + randomSeed;
    const correctAnswer = primeNumbers.includes(questionNumber) ? 'yes' : 'no';
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkAnswer(userAnswer, correctAnswer)) {
      successCounter += 1;
    } else { break; }
  }
  return successCounter === correctAnswersRequired;
}
