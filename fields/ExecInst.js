var invert = require('invert-obj');

function ExecInst (execInst) {
  this.message = execInst;
}

ExecInst.prototype.value = function () {
  return this.message;
};


ExecInst.Keys = {
  'NOT_HELD': '1',
  'WORK': '2',
  'GO_ALONG': '3',
  'OVER_THE_DAY': '4',
  'HELD': '5',
  'PARTICIPATE_DONT_INITIATE': '6',
  'STRICT_SCALE': '7',
  'TRY_TO_SCALE': '8',
  'STAY_ON_BIDSIDE': '9',
  'STAY_ON_OFFERSIDE': '0',
  'NO_CROSS': 'A',
  'OK_TO_CROSS': 'B',
  'CALL_FIRST': 'C',
  'PERCENT_OF_VOLUME': 'D',
  'DO_NOT_INCREASE': 'E',
  'DO_NOT_REDUCE': 'F',
  'ALL_OR_NONE': 'G',
  'REINSTATE_ON_SYSTEM_FAILURE': 'H',
  'INSTITUTIONS_ONLY': 'I',
  'REINSTATE_ON_TRADING_HALT': 'J',
  'CANCEL_ON_TRADING_HALT': 'K',
  'LAST_PEG': 'L',
  'MID_PRICE_PEG': 'M',
  'NON_NEGOTIABLE': 'N',
  'OPENING_PEG': 'O',
  'MARKET_PEG': 'P',
  'CANCEL_ON_SYSTEM_FAILURE': 'Q',
  'PRIMARY_PEG': 'R',
  'SUSPEND': 'S',
  'CUSTOMER_DISPLAY_INSTRUCTION': 'U',
  'NETTING': 'V',
  'PEG_TO_VWAP': 'W',
  'TRADE_ALONG': 'X',
  'TRY_TO_STOP': 'Y',
  'CANCEL_IF_NOT_BEST': 'Z',
  'TRAILING_STOP_PEG': 'a',
  'STRICT_LIMIT': 'b',
  'IGNORE_PRICE_VALIDITY_CHECKS': 'c',
  'PEG_TO_LIMIT_PRICE': 'd',
  'WORK_TO_TARGET_STRATEGY': 'e',
};

ExecInst.Tag = '18';

ExecInst.Type = 'MULTIPLEVALUESTRING';

ExecInst.Values = invert(ExecInst.Keys);

module.exports = ExecInst;