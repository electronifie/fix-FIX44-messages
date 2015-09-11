var invert = require('invert-obj');

function TrdType (trdType) {
  this.message = trdType;
}

TrdType.prototype.value = function () {
  return this.message;
};


TrdType.Keys = {
  'REGULAR_TRADE': '0',
  'BLOCK_TRADE': '1',
  'EFP': '2',
  'TRANSFER': '3',
  'LATE_TRADE': '4',
  'T_TRADE': '5',
  'WEIGHTED_AVERAGE_PRICE_TRADE': '6',
  'BUNCHED_TRADE': '7',
  'LATE_BUNCHED_TRADE': '8',
  'PRIOR_REFERENCE_PRICE_TRADE': '9',
  'AFTER_HOURS_TRADE': '10',
};

TrdType.Tag = '828';

TrdType.Type = 'INT';

TrdType.Values = invert(TrdType.Keys);

module.exports = TrdType;