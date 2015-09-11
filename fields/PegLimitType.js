var invert = require('invert-obj');

function PegLimitType (pegLimitType) {
  this.message = pegLimitType;
}

PegLimitType.prototype.value = function () {
  return this.message;
};


PegLimitType.Keys = {
  'OR_BETTER': '0',
  'STRICT_LIMIT_IS_A_STRICT_LIMIT': '1',
  'OR_WORSE_FOR_A_BUY_THE_PEG_LIMIT_IS_A_MINIMUM_AND_FOR_A_SELL_THE_PEG_LIMIT_IS_A_MAXIMUM': '2',
};

PegLimitType.Tag = '837';

PegLimitType.Type = 'INT';

PegLimitType.Values = invert(PegLimitType.Keys);

module.exports = PegLimitType;