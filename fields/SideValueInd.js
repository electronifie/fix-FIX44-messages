var invert = require('invert-obj');

function SideValueInd (sideValueInd) {
  this.message = sideValueInd;
}

SideValueInd.prototype.value = function () {
  return this.message;
};


SideValueInd.Keys = {
  'SIDEVALUE1': '1',
  'SIDEVALUE_2': '2',
};

SideValueInd.Tag = '401';

SideValueInd.Type = 'INT';

SideValueInd.Values = invert(SideValueInd.Keys);

module.exports = SideValueInd;