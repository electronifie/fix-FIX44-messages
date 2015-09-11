var invert = require('invert-obj');

function LocateReqd (locateReqd) {
  this.message = locateReqd;
}

LocateReqd.prototype.value = function () {
  return this.message;
};


LocateReqd.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

LocateReqd.Tag = '114';

LocateReqd.Type = 'BOOLEAN';

LocateReqd.Values = invert(LocateReqd.Keys);

module.exports = LocateReqd;