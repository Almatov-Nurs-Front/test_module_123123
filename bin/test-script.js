#!/usr/bin/env node

// Modules
const spawn = require('cross-spawn');
// Scripts
const { start } = require('../scripts/start');

const args = process.argv.slice(2);

const result = spawn.sync(
  'react-scripts',
  ['start', ...args, '--progress', '--color', '--plugins'],
  { stdio: 'inherit' }
);

start(3000, 'purple');

process.exit(result.status);
