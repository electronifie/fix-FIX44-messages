var invert = require('invert-obj');

function UnsolicitedIndicator (unsolicitedIndicator) {
  this.message = unsolicitedIndicator;
}

UnsolicitedIndicator.prototype.value = function () {
  return this.message;
};


UnsolicitedIndicator.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

UnsolicitedIndicator.Tag = '325';

UnsolicitedIndicator.Type = 'BOOLEAN';

UnsolicitedIndicator.Values = invert(UnsolicitedIndicator.Keys);

module.exports = UnsolicitedIndicator;