#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainPrime from '../games/brain-prime.js';

const name = cli.userGreet();
cli.endgameMessage(name, brainPrime(cli.correctAnswersRequired));
