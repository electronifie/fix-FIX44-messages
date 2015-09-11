var invert = require('invert-obj');

function TradeReportTransType (tradeReportTransType) {
  this.message = tradeReportTransType;
}

TradeReportTransType.prototype.value = function () {
  return this.message;
};

TradeReportTransType.Tag = '487';

TradeReportTransType.Type = 'INT';

module.exports = TradeReportTransType;