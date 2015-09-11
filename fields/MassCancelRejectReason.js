var invert = require('invert-obj');

function MassCancelRejectReason (massCancelRejectReason) {
  this.message = massCancelRejectReason;
}

MassCancelRejectReason.prototype.value = function () {
  return this.message;
};


MassCancelRejectReason.Keys = {
  'MASS_CANCEL_NOT_SUPPORTED': '0',
  'INVALID_OR_UNKNOWN_SECURITY': '1',
  'INVALID_OR_UNKNOWN_UNDERLYING': '2',
  'INVALID_OR_UNKNOWN_PRODUCT': '3',
  'INVALID_OR_UNKNOWN_CFICODE': '4',
  'INVALID_OR_UNKNOWN_SECURITY_TYPE': '5',
  'INVALID_OR_UNKNOWN_TRADING_SESSION': '6',
  'OTHER': '99',
};

MassCancelRejectReason.Tag = '532';

MassCancelRejectReason.Type = 'CHAR';

MassCancelRejectReason.Values = invert(MassCancelRejectReason.Keys);

module.exports = MassCancelRejectReason;