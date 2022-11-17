#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainGCD from '../games/brain-gcd.js';

const name = cli.userGreet();
cli.endgameMessage(name, brainGCD(cli.correctAnswersRequired));
