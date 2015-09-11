var invert = require('invert-obj');

function QuoteCondition (quoteCondition) {
  this.message = quoteCondition;
}

QuoteCondition.prototype.value = function () {
  return this.message;
};


QuoteCondition.Keys = {
  'OPEN': 'A',
  'CLOSED': 'B',
  'EXCHANGE_BEST': 'C',
  'CONSOLIDATED_BEST': 'D',
  'LOCKED': 'E',
  'CROSSED': 'F',
  'DEPTH': 'G',
  'FAST_TRADING': 'H',
  'NON_FIRM': 'I',
};

QuoteCondition.Tag = '276';

QuoteCondition.Type = 'MULTIPLEVALUESTRING';

QuoteCondition.Values = invert(QuoteCondition.Keys);

module.exports = QuoteCondition;