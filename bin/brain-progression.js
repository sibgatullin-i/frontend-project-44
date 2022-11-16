#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {checkAnswer} from '../src/cli.js';


let successCounter = 0;
const progressionLength = 10;
const progressionDifficulty = 10;

export default function brainProgression(name, correctAnswersRequired) {
  console.log('What number is missing in the progression?');
  while (successCounter < correctAnswersRequired) {
    const randomSeed = Math.floor(Math.random() * progressionDifficulty + 1);
    const firstItem = Math.floor(Math.random() * progressionDifficulty);
    const progression = [firstItem];
    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[progression.length - 1] + randomSeed);
    }
    const randomItemIndex = Math.abs(Math.floor(Math.random() * progressionLength - 1));
    const correctAnswer = progression[randomItemIndex];
    progression[randomItemIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (checkAnswer(userAnswer, correctAnswer)){
      successCounter += 1;
    } else { break; }
  }
  return successCounter === correctAnswersRequired;
}
