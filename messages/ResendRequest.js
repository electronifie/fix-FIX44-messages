var BeginSeqNo = require('../fields/BeginSeqNo');
var EndSeqNo = require('../fields/EndSeqNo');

function ResendRequest (resendRequest) {
  this.message = resendRequest;
}

ResendRequest.prototype.beginSeqNo = function () {
  return new BeginSeqNo(this.message.tags[ResendRequest.Tags.BeginSeqNo]);
};

ResendRequest.prototype.endSeqNo = function () {
  return new EndSeqNo(this.message.tags[ResendRequest.Tags.EndSeqNo]);
};

ResendRequest.Tags = {
  BeginSeqNo: '7',
  EndSeqNo: '16',
};

ResendRequest.msgType = '2';

module.exports = ResendRequest;