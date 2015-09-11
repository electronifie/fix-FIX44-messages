var invert = require('invert-obj');

function ForexReq (forexReq) {
  this.message = forexReq;
}

ForexReq.prototype.value = function () {
  return this.message;
};


ForexReq.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

ForexReq.Tag = '121';

ForexReq.Type = 'BOOLEAN';

ForexReq.Values = invert(ForexReq.Keys);

module.exports = ForexReq;