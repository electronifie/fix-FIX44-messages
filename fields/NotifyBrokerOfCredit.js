var invert = require('invert-obj');

function NotifyBrokerOfCredit (notifyBrokerOfCredit) {
  this.message = notifyBrokerOfCredit;
}

NotifyBrokerOfCredit.prototype.value = function () {
  return this.message;
};


NotifyBrokerOfCredit.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

NotifyBrokerOfCredit.Tag = '208';

NotifyBrokerOfCredit.Type = 'BOOLEAN';

NotifyBrokerOfCredit.Values = invert(NotifyBrokerOfCredit.Keys);

module.exports = NotifyBrokerOfCredit;