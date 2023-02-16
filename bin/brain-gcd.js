#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainGCD from '../src/games/brain-gcd.js';

const name = cli.greetUser();
cli.endgameMessage(name, brainGCD(cli.correctAnswersRequired));
