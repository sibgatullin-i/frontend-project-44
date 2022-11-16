#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainEven from '../bin-games/brain-even.js';
import brainCalc from '../bin-games/brain-calc.js';
import brainGCD from '../bin-games/brain-gcd.js';
import brainProgression from '../bin-games/brain-progression.js';
import brainPrime from '../bin-games/brain-prime.js';

const correctAnswersRequired = 3; // you may later change it. Or even ask user to select

console.log('Welcome to Brain Games!');
const name = cli.userGreet();

cli.endgameMessage(name, brainEven(name, correctAnswersRequired));
cli.endgameMessage(name, brainCalc(name, correctAnswersRequired));
cli.endgameMessage(name, brainGCD(name, correctAnswersRequired));
cli.endgameMessage(name, brainProgression(name, correctAnswersRequired));
cli.endgameMessage(name, brainPrime(name, correctAnswersRequired));

console.log('end of brain games');
