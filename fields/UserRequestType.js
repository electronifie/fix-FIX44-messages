var invert = require('invert-obj');

function UserRequestType (userRequestType) {
  this.message = userRequestType;
}

UserRequestType.prototype.value = function () {
  return this.message;
};


UserRequestType.Keys = {
  'LOGONUSER': '1',
  'LOGOFFUSER': '2',
  'CHANGEPASSWORDFORUSER': '3',
  'REQUEST_INDIVIDUAL_USER_STATUS': '4',
};

UserRequestType.Tag = '924';

UserRequestType.Type = 'INT';

UserRequestType.Values = invert(UserRequestType.Keys);

module.exports = UserRequestType;