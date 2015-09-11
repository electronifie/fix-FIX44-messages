var TestReqID = require('../fields/TestReqID');

function TestRequest (testRequest) {
  this.message = testRequest;
}

TestRequest.prototype.testReqId = function () {
  return new TestReqID(this.message.tags[TestRequest.Tags.TestReqID]);
};

TestRequest.Tags = {
  TestReqID: '112',
};

TestRequest.msgType = '1';

module.exports = TestRequest;