var invert = require('invert-obj');

function StatusValue (statusValue) {
  this.message = statusValue;
}

StatusValue.prototype.value = function () {
  return this.message;
};


StatusValue.Keys = {
  'CONNECTED': '1',
  'NOT_CONNECTED_DOWN_EXPECTED_UP': '2',
  'NOT_CONNECTED_DOWN_EXPECTED_DOWN': '3',
  'IN_PROCESS': '4',
};

StatusValue.Tag = '928';

StatusValue.Type = 'INT';

StatusValue.Values = invert(StatusValue.Keys);

module.exports = StatusValue;