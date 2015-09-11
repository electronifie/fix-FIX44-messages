var UserRequestID = require('../fields/UserRequestID');
var UserRequestType = require('../fields/UserRequestType');
var Username = require('../fields/Username');
var Password = require('../fields/Password');
var NewPassword = require('../fields/NewPassword');
var RawDataLength = require('../fields/RawDataLength');
var RawData = require('../fields/RawData');

function UserRequest (userRequest) {
  this.message = userRequest;
}

UserRequest.prototype.userRequestId = function () {
  return new UserRequestID(this.message.tags[UserRequest.Tags.UserRequestID]);
};

UserRequest.prototype.userRequestType = function () {
  return new UserRequestType(this.message.tags[UserRequest.Tags.UserRequestType]);
};

UserRequest.prototype.username = function () {
  return new Username(this.message.tags[UserRequest.Tags.Username]);
};

UserRequest.prototype.password = function () {
  return new Password(this.message.tags[UserRequest.Tags.Password]);
};

UserRequest.prototype.newPassword = function () {
  return new NewPassword(this.message.tags[UserRequest.Tags.NewPassword]);
};

UserRequest.prototype.rawDataLength = function () {
  return new RawDataLength(this.message.tags[UserRequest.Tags.RawDataLength]);
};

UserRequest.prototype.rawData = function () {
  return new RawData(this.message.tags[UserRequest.Tags.RawData]);
};

UserRequest.Tags = {
  UserRequestID: '923',
  UserRequestType: '924',
  Username: '553',
  Password: '554',
  NewPassword: '925',
  RawDataLength: '95',
  RawData: '96',
};

UserRequest.msgType = 'BE';

module.exports = UserRequest;