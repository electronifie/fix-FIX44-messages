var invert = require('invert-obj');

function PositionEffect (positionEffect) {
  this.message = positionEffect;
}

PositionEffect.prototype.value = function () {
  return this.message;
};


PositionEffect.Keys = {
  'OPEN': 'O',
  'CLOSE': 'C',
  'ROLLED': 'R',
  'FIFO': 'F',
};

PositionEffect.Tag = '77';

PositionEffect.Type = 'CHAR';

PositionEffect.Values = invert(PositionEffect.Keys);

module.exports = PositionEffect;