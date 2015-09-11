var invert = require('invert-obj');

function TradeReportType (tradeReportType) {
  this.message = tradeReportType;
}

TradeReportType.prototype.value = function () {
  return this.message;
};


TradeReportType.Keys = {
  'SUBMIT': '0',
  'ALLEGED': '1',
  'ACCEPT': '2',
  'DECLINE': '3',
  'ADDENDUM': '4',
  'NO_WAS': '5',
  'TRADE_REPORT_CANCEL': '6',
  'LOCKED_IN_TRADE_BREAK': '7',
};

TradeReportType.Tag = '856';

TradeReportType.Type = 'INT';

TradeReportType.Values = invert(TradeReportType.Keys);

module.exports = TradeReportType;