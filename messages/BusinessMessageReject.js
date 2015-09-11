var RefSeqNum = require('../fields/RefSeqNum');
var RefMsgType = require('../fields/RefMsgType');
var BusinessRejectRefID = require('../fields/BusinessRejectRefID');
var BusinessRejectReason = require('../fields/BusinessRejectReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function BusinessMessageReject (businessMessageReject) {
  this.message = businessMessageReject;
}

BusinessMessageReject.prototype.refSeqNum = function () {
  return new RefSeqNum(this.message.tags[BusinessMessageReject.Tags.RefSeqNum]);
};

BusinessMessageReject.prototype.refMsgType = function () {
  return new RefMsgType(this.message.tags[BusinessMessageReject.Tags.RefMsgType]);
};

BusinessMessageReject.prototype.businessRejectRefId = function () {
  return new BusinessRejectRefID(this.message.tags[BusinessMessageReject.Tags.BusinessRejectRefID]);
};

BusinessMessageReject.prototype.businessRejectReason = function () {
  return new BusinessRejectReason(this.message.tags[BusinessMessageReject.Tags.BusinessRejectReason]);
};

BusinessMessageReject.prototype.text = function () {
  return new Text(this.message.tags[BusinessMessageReject.Tags.Text]);
};

BusinessMessageReject.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[BusinessMessageReject.Tags.EncodedTextLen]);
};

BusinessMessageReject.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[BusinessMessageReject.Tags.EncodedText]);
};

BusinessMessageReject.Tags = {
  RefSeqNum: '45',
  RefMsgType: '372',
  BusinessRejectRefID: '379',
  BusinessRejectReason: '380',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

BusinessMessageReject.msgType = 'j';

module.exports = BusinessMessageReject;