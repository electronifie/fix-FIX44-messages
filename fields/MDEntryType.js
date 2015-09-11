var invert = require('invert-obj');

function MDEntryType (mdentryType) {
  this.message = mdentryType;
}

MDEntryType.prototype.value = function () {
  return this.message;
};


MDEntryType.Keys = {
  'BID': '0',
  'OFFER': '1',
  'TRADE': '2',
  'INDEX_VALUE': '3',
  'OPENING_PRICE': '4',
  'CLOSING_PRICE': '5',
  'SETTLEMENT_PRICE': '6',
  'TRADING_SESSION_HIGH_PRICE': '7',
  'TRADING_SESSION_LOW_PRICE': '8',
  'TRADING_SESSION_VWAP_PRICE': '9',
  'IMBALANCE': 'A',
  'TRADE_VOLUME': 'B',
  'OPEN_INTEREST': 'C',
};

MDEntryType.Tag = '269';

MDEntryType.Type = 'CHAR';

MDEntryType.Values = invert(MDEntryType.Keys);

module.exports = MDEntryType;