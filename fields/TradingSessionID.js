var invert = require('invert-obj');

function TradingSessionID (tradingSessionId) {
  this.message = tradingSessionId;
}

TradingSessionID.prototype.value = function () {
  return this.message;
};

TradingSessionID.Tag = '336';

TradingSessionID.Type = 'STRING';

module.exports = TradingSessionID;