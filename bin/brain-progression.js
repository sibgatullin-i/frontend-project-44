#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainProgression from '../games/brain-progression.js';

const name = cli.userGreet();
cli.endgameMessage(name, brainProgression(cli.correctAnswersRequired));
