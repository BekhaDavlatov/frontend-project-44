#!/src/bin/env node

import runGame from '../src/games/engine.js';
import { description, generateRound } from '../src/games/even.js';

runGame(description, generateRound);
