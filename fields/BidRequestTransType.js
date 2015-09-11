var invert = require('invert-obj');

function BidRequestTransType (bidRequestTransType) {
  this.message = bidRequestTransType;
}

BidRequestTransType.prototype.value = function () {
  return this.message;
};


BidRequestTransType.Keys = {
  'NEW': 'N',
  'CANCEL': 'C',
};

BidRequestTransType.Tag = '374';

BidRequestTransType.Type = 'CHAR';

BidRequestTransType.Values = invert(BidRequestTransType.Keys);

module.exports = BidRequestTransType;