var invert = require('invert-obj');

function ExpirationCycle (expirationCycle) {
  this.message = expirationCycle;
}

ExpirationCycle.prototype.value = function () {
  return this.message;
};


ExpirationCycle.Keys = {
  'EXPIRE_ON_TRADING_SESSION_CLOSE': '0',
  'EXPIRE_ON_TRADING_SESSION_OPEN': '1',
};

ExpirationCycle.Tag = '827';

ExpirationCycle.Type = 'INT';

ExpirationCycle.Values = invert(ExpirationCycle.Keys);

module.exports = ExpirationCycle;