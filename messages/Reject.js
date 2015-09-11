var RefSeqNum = require('../fields/RefSeqNum');
var RefTagID = require('../fields/RefTagID');
var RefMsgType = require('../fields/RefMsgType');
var SessionRejectReason = require('../fields/SessionRejectReason');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function Reject (reject) {
  this.message = reject;
}

Reject.prototype.refSeqNum = function () {
  return new RefSeqNum(this.message.tags[Reject.Tags.RefSeqNum]);
};

Reject.prototype.refTagId = function () {
  return new RefTagID(this.message.tags[Reject.Tags.RefTagID]);
};

Reject.prototype.refMsgType = function () {
  return new RefMsgType(this.message.tags[Reject.Tags.RefMsgType]);
};

Reject.prototype.sessionRejectReason = function () {
  return new SessionRejectReason(this.message.tags[Reject.Tags.SessionRejectReason]);
};

Reject.prototype.text = function () {
  return new Text(this.message.tags[Reject.Tags.Text]);
};

Reject.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[Reject.Tags.EncodedTextLen]);
};

Reject.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[Reject.Tags.EncodedText]);
};

Reject.Tags = {
  RefSeqNum: '45',
  RefTagID: '371',
  RefMsgType: '372',
  SessionRejectReason: '373',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

Reject.msgType = '3';

module.exports = Reject;