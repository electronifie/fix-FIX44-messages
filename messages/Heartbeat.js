var TestReqID = require('../fields/TestReqID');

function Heartbeat (heartbeat) {
  this.message = heartbeat;
}

Heartbeat.prototype.testReqId = function () {
  return new TestReqID(this.message.tags[Heartbeat.Tags.TestReqID]);
};

Heartbeat.Tags = {
  TestReqID: '112',
};

Heartbeat.msgType = '0';

module.exports = Heartbeat;