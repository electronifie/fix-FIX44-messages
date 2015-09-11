var invert = require('invert-obj');

function ResetSeqNumFlag (resetSeqNumFlag) {
  this.message = resetSeqNumFlag;
}

ResetSeqNumFlag.prototype.value = function () {
  return this.message;
};


ResetSeqNumFlag.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

ResetSeqNumFlag.Tag = '141';

ResetSeqNumFlag.Type = 'BOOLEAN';

ResetSeqNumFlag.Values = invert(ResetSeqNumFlag.Keys);

module.exports = ResetSeqNumFlag;