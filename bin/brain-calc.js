#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainCalc from '../games/brain-calc.js';

const name = cli.userGreet();
cli.endgameMessage(name, brainCalc(name, cli.correctAnswersRequired));
