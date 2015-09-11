var invert = require('invert-obj');

function GapFillFlag (gapFillFlag) {
  this.message = gapFillFlag;
}

GapFillFlag.prototype.value = function () {
  return this.message;
};


GapFillFlag.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

GapFillFlag.Tag = '123';

GapFillFlag.Type = 'BOOLEAN';

GapFillFlag.Values = invert(GapFillFlag.Keys);

module.exports = GapFillFlag;