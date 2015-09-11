var invert = require('invert-obj');

function OddLot (oddLot) {
  this.message = oddLot;
}

OddLot.prototype.value = function () {
  return this.message;
};


OddLot.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

OddLot.Tag = '575';

OddLot.Type = 'BOOLEAN';

OddLot.Values = invert(OddLot.Keys);

module.exports = OddLot;