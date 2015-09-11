var invert = require('invert-obj');

function TradingSessionSubID (tradingSessionSubId) {
  this.message = tradingSessionSubId;
}

TradingSessionSubID.prototype.value = function () {
  return this.message;
};

TradingSessionSubID.Tag = '625';

TradingSessionSubID.Type = 'STRING';

module.exports = TradingSessionSubID;