var EncryptMethod = require('../fields/EncryptMethod');
var HeartBtInt = require('../fields/HeartBtInt');
var RawDataLength = require('../fields/RawDataLength');
var RawData = require('../fields/RawData');
var ResetSeqNumFlag = require('../fields/ResetSeqNumFlag');
var NextExpectedMsgSeqNum = require('../fields/NextExpectedMsgSeqNum');
var MaxMessageSize = require('../fields/MaxMessageSize');
var TestMessageIndicator = require('../fields/TestMessageIndicator');
var Username = require('../fields/Username');
var Password = require('../fields/Password');

function Logon (logon) {
  this.message = logon;
}

Logon.prototype.encryptMethod = function () {
  return new EncryptMethod(this.message.tags[Logon.Tags.EncryptMethod]);
};

Logon.prototype.heartBtInt = function () {
  return new HeartBtInt(this.message.tags[Logon.Tags.HeartBtInt]);
};

Logon.prototype.rawDataLength = function () {
  return new RawDataLength(this.message.tags[Logon.Tags.RawDataLength]);
};

Logon.prototype.rawData = function () {
  return new RawData(this.message.tags[Logon.Tags.RawData]);
};

Logon.prototype.resetSeqNumFlag = function () {
  return new ResetSeqNumFlag(this.message.tags[Logon.Tags.ResetSeqNumFlag]);
};

Logon.prototype.nextExpectedMsgSeqNum = function () {
  return new NextExpectedMsgSeqNum(this.message.tags[Logon.Tags.NextExpectedMsgSeqNum]);
};

Logon.prototype.maxMessageSize = function () {
  return new MaxMessageSize(this.message.tags[Logon.Tags.MaxMessageSize]);
};

Logon.prototype.testMessageIndicator = function () {
  return new TestMessageIndicator(this.message.tags[Logon.Tags.TestMessageIndicator]);
};

Logon.prototype.username = function () {
  return new Username(this.message.tags[Logon.Tags.Username]);
};

Logon.prototype.password = function () {
  return new Password(this.message.tags[Logon.Tags.Password]);
};

Logon.Tags = {
  EncryptMethod: '98',
  HeartBtInt: '108',
  RawDataLength: '95',
  RawData: '96',
  ResetSeqNumFlag: '141',
  NextExpectedMsgSeqNum: '789',
  MaxMessageSize: '383',
  TestMessageIndicator: '464',
  Username: '553',
  Password: '554',
};

Logon.msgType = 'A';

module.exports = Logon;