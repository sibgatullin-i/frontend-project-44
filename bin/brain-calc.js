#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainCalc from '../src/games/brain-calc.js';

const name = cli.greetUser();
cli.endgameMessage(name, brainCalc(cli.correctAnswersRequired));
