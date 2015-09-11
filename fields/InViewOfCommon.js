var invert = require('invert-obj');

function InViewOfCommon (inViewOfCommon) {
  this.message = inViewOfCommon;
}

InViewOfCommon.prototype.value = function () {
  return this.message;
};


InViewOfCommon.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

InViewOfCommon.Tag = '328';

InViewOfCommon.Type = 'BOOLEAN';

InViewOfCommon.Values = invert(InViewOfCommon.Keys);

module.exports = InViewOfCommon;