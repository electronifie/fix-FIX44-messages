var invert = require('invert-obj');

function MessageEncoding (messageEncoding) {
  this.message = messageEncoding;
}

MessageEncoding.prototype.value = function () {
  return this.message;
};


MessageEncoding.Keys = {
  'JIS': 'ISO-2022-JP',
  'EUC': 'EUC-JP',
  'FOR_USING_SJIS': 'Shift_JIS',
  'UNICODE': 'UTF-8',
};

MessageEncoding.Tag = '347';

MessageEncoding.Type = 'STRING';

MessageEncoding.Values = invert(MessageEncoding.Keys);

module.exports = MessageEncoding;