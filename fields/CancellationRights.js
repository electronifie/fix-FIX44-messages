var invert = require('invert-obj');

function CancellationRights (cancellationRights) {
  this.message = cancellationRights;
}

CancellationRights.prototype.value = function () {
  return this.message;
};


CancellationRights.Keys = {
  'YES': 'Y',
  'NO_EXECUTION_ONLY': 'N',
  'NO_WAIVER_AGREEMENT': 'M',
  'NO_INSTITUTIONAL': 'O',
};

CancellationRights.Tag = '480';

CancellationRights.Type = 'CHAR';

CancellationRights.Values = invert(CancellationRights.Keys);

module.exports = CancellationRights;