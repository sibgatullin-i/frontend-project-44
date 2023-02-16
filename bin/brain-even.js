#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainEven from '../src/games/brain-even.js';

const name = cli.greetUser();
cli.endgameMessage(name, brainEven(cli.correctAnswersRequired));
