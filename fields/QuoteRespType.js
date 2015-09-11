var invert = require('invert-obj');

function QuoteRespType (quoteRespType) {
  this.message = quoteRespType;
}

QuoteRespType.prototype.value = function () {
  return this.message;
};


QuoteRespType.Keys = {
  'HIT_LIFT': '1',
  'COUNTER': '2',
  'EXPIRED': '3',
  'COVER': '4',
  'DONE_AWAY': '5',
  'PASS': '6',
};

QuoteRespType.Tag = '694';

QuoteRespType.Type = 'INT';

QuoteRespType.Values = invert(QuoteRespType.Keys);

module.exports = QuoteRespType;