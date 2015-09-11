var invert = require('invert-obj');

function TradedFlatSwitch (tradedFlatSwitch) {
  this.message = tradedFlatSwitch;
}

TradedFlatSwitch.prototype.value = function () {
  return this.message;
};


TradedFlatSwitch.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

TradedFlatSwitch.Tag = '258';

TradedFlatSwitch.Type = 'BOOLEAN';

TradedFlatSwitch.Values = invert(TradedFlatSwitch.Keys);

module.exports = TradedFlatSwitch;