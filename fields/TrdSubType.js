var invert = require('invert-obj');

function TrdSubType (trdSubType) {
  this.message = trdSubType;
}

TrdSubType.prototype.value = function () {
  return this.message;
};

TrdSubType.Tag = '829';

TrdSubType.Type = 'INT';

module.exports = TrdSubType;