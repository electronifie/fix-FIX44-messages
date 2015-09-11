var invert = require('invert-obj');

function MsgDirection (msgDirection) {
  this.message = msgDirection;
}

MsgDirection.prototype.value = function () {
  return this.message;
};


MsgDirection.Keys = {
  'SEND': 'S',
  'RECEIVE': 'R',
};

MsgDirection.Tag = '385';

MsgDirection.Type = 'CHAR';

MsgDirection.Values = invert(MsgDirection.Keys);

module.exports = MsgDirection;