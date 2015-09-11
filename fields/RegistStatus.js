var invert = require('invert-obj');

function RegistStatus (registStatus) {
  this.message = registStatus;
}

RegistStatus.prototype.value = function () {
  return this.message;
};


RegistStatus.Keys = {
  'ACCEPTED': 'A',
  'REJECTED': 'R',
  'HELD': 'H',
  'REMINDER_IE_REGISTRATION_INSTRUCTIONS_ARE_STILL_OUTSTANDING': 'N',
};

RegistStatus.Tag = '506';

RegistStatus.Type = 'CHAR';

RegistStatus.Values = invert(RegistStatus.Keys);

module.exports = RegistStatus;