var invert = require('invert-obj');

function PossDupFlag (possDupFlag) {
  this.message = possDupFlag;
}

PossDupFlag.prototype.value = function () {
  return this.message;
};


PossDupFlag.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

PossDupFlag.Tag = '43';

PossDupFlag.Type = 'BOOLEAN';

PossDupFlag.Values = invert(PossDupFlag.Keys);

module.exports = PossDupFlag;