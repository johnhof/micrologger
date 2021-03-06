'use strict';

const Level = require('./level');

class CriticalLevel extends Level {
  constructor (opts={}) {
    opts.severity  = 'critical';
    opts.keyword = 'crit';
    opts.value = 2;
    super(opts);
  }

  print (message) {
    this.stderr(this.colorize(message));
  }
}

module.exports = CriticalLevel;
