#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainEven from '../games/brain-even.js';

const name = cli.userGreet();
cli.endgameMessage(name, brainEven(cli.correctAnswersRequired));
