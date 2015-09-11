var invert = require('invert-obj');

function LastRptRequested (lastRptRequested) {
  this.message = lastRptRequested;
}

LastRptRequested.prototype.value = function () {
  return this.message;
};

LastRptRequested.Tag = '912';

LastRptRequested.Type = 'BOOLEAN';

module.exports = LastRptRequested;