#!/usr/bin/env node

import * as cli from '../src/cli.js';
import brainProgression from '../src/games/brain-progression.js';

const name = cli.greetUser();
cli.endgameMessage(name, brainProgression(cli.correctAnswersRequired));
