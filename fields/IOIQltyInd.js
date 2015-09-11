var invert = require('invert-obj');

function IOIQltyInd (ioiqltyInd) {
  this.message = ioiqltyInd;
}

IOIQltyInd.prototype.value = function () {
  return this.message;
};


IOIQltyInd.Keys = {
  'LOW': 'L',
  'MEDIUM': 'M',
  'HIGH': 'H',
};

IOIQltyInd.Tag = '25';

IOIQltyInd.Type = 'CHAR';

IOIQltyInd.Values = invert(IOIQltyInd.Keys);

module.exports = IOIQltyInd;