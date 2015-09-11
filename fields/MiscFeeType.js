var invert = require('invert-obj');

function MiscFeeType (miscFeeType) {
  this.message = miscFeeType;
}

MiscFeeType.prototype.value = function () {
  return this.message;
};


MiscFeeType.Keys = {
  'REGULATORY': '1',
  'TAX': '2',
  'LOCAL_COMMISSION': '3',
  'EXCHANGE_FEES': '4',
  'STAMP': '5',
  'LEVY': '6',
  'OTHER': '7',
  'MARKUP': '8',
  'CONSUMPTION_TAX': '9',
  'PER_TRANSACTION': '10',
  'CONVERSION': '11',
  'AGENT': '12',
};

MiscFeeType.Tag = '139';

MiscFeeType.Type = 'CHAR';

MiscFeeType.Values = invert(MiscFeeType.Keys);

module.exports = MiscFeeType;