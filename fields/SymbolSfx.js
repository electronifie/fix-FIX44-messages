var invert = require('invert-obj');

function SymbolSfx (symbolSfx) {
  this.message = symbolSfx;
}

SymbolSfx.prototype.value = function () {
  return this.message;
};

SymbolSfx.Tag = '65';

SymbolSfx.Type = 'STRING';

module.exports = SymbolSfx;