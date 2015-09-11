var RFQReqGrp = require('../components/RFQReqGrp');
var RFQReqID = require('../fields/RFQReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');

function RFQRequest (rfqrequest) {
  this.message = rfqrequest;
}

RFQRequest.prototype.rfqreqGrp = function () {
  return this.message.groups[RFQRequest.Tags.RFQReqGrp]
    .map(function (rfqreqGrp) {
      return new RFQReqGrp(rfqreqGrp);
  });
};

RFQRequest.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[RFQRequest.Tags.RFQReqID]);
};

RFQRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[RFQRequest.Tags.SubscriptionRequestType]);
};

RFQRequest.Tags = {
  RFQReqGrp: '146',
  RFQReqID: '644',
  SubscriptionRequestType: '263',
};

RFQRequest.msgType = 'AH';

module.exports = RFQRequest;