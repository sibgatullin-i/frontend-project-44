#!/usr/bin/env node

import * as cli from '../src/cli.js';
import * as games from '../src/games.js';

console.log('Welcome to Brain Games!');
const name = cli.userGreet();
games.oddEven(name);

console.log('end of brain games');
