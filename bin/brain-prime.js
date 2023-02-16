#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainPrime from '../src/games/brain-prime.js';

const name = cli.greetUser();
cli.endgameMessage(name, brainPrime(cli.correctAnswersRequired));
