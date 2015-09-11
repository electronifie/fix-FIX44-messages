var invert = require('invert-obj');

function PossResend (possResend) {
  this.message = possResend;
}

PossResend.prototype.value = function () {
  return this.message;
};


PossResend.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

PossResend.Tag = '97';

PossResend.Type = 'BOOLEAN';

PossResend.Values = invert(PossResend.Keys);

module.exports = PossResend;