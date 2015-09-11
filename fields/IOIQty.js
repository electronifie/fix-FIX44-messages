var invert = require('invert-obj');

function IOIQty (ioiqty) {
  this.message = ioiqty;
}

IOIQty.prototype.value = function () {
  return this.message;
};


IOIQty.Keys = {
  'SMALL': 'S',
  'MEDIUM': 'M',
  'LARGE': 'L',
};

IOIQty.Tag = '27';

IOIQty.Type = 'STRING';

IOIQty.Values = invert(IOIQty.Keys);

module.exports = IOIQty;