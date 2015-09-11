var invert = require('invert-obj');

function DiscretionLimitType (discretionLimitType) {
  this.message = discretionLimitType;
}

DiscretionLimitType.prototype.value = function () {
  return this.message;
};


DiscretionLimitType.Keys = {
  'OR_BETTER': '0',
  'STRICT_LIMIT_IS_A_STRICT_LIMIT': '1',
  'OR_WORSE_FOR_A_BUY_THE_DISCRETION_PRICE_IS_A_MINIMUM_AND_FOR_A_SELL_THE_DISCRETION_PRICE_IS_A_MAXIMUM': '2',
};

DiscretionLimitType.Tag = '843';

DiscretionLimitType.Type = 'INT';

DiscretionLimitType.Values = invert(DiscretionLimitType.Keys);

module.exports = DiscretionLimitType;