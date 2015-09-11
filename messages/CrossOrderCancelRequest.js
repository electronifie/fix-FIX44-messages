var SideCrossOrdCxlGrp = require('../components/SideCrossOrdCxlGrp');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var OrderID = require('../fields/OrderID');
var CrossID = require('../fields/CrossID');
var OrigCrossID = require('../fields/OrigCrossID');
var CrossType = require('../fields/CrossType');
var CrossPrioritization = require('../fields/CrossPrioritization');
var TransactTime = require('../fields/TransactTime');

function CrossOrderCancelRequest (crossOrderCancelRequest) {
  this.message = crossOrderCancelRequest;
}

CrossOrderCancelRequest.prototype.sideCrossOrdCxlGrp = function () {
  return this.message.groups[CrossOrderCancelRequest.Tags.SideCrossOrdCxlGrp]
    .map(function (sideCrossOrdCxlGrp) {
      return new SideCrossOrdCxlGrp(sideCrossOrdCxlGrp);
  });
};

CrossOrderCancelRequest.prototype.instrument = function () {
  return this.message.groups[CrossOrderCancelRequest.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

CrossOrderCancelRequest.prototype.undInstrmtGrp = function () {
  return this.message.groups[CrossOrderCancelRequest.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

CrossOrderCancelRequest.prototype.instrmtLegGrp = function () {
  return this.message.groups[CrossOrderCancelRequest.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

CrossOrderCancelRequest.prototype.orderId = function () {
  return new OrderID(this.message.tags[CrossOrderCancelRequest.Tags.OrderID]);
};

CrossOrderCancelRequest.prototype.crossId = function () {
  return new CrossID(this.message.tags[CrossOrderCancelRequest.Tags.CrossID]);
};

CrossOrderCancelRequest.prototype.origCrossId = function () {
  return new OrigCrossID(this.message.tags[CrossOrderCancelRequest.Tags.OrigCrossID]);
};

CrossOrderCancelRequest.prototype.crossType = function () {
  return new CrossType(this.message.tags[CrossOrderCancelRequest.Tags.CrossType]);
};

CrossOrderCancelRequest.prototype.crossPrioritization = function () {
  return new CrossPrioritization(this.message.tags[CrossOrderCancelRequest.Tags.CrossPrioritization]);
};

CrossOrderCancelRequest.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[CrossOrderCancelRequest.Tags.TransactTime]);
};

CrossOrderCancelRequest.Tags = {
  SideCrossOrdCxlGrp: '552',
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  OrderID: '37',
  CrossID: '548',
  OrigCrossID: '551',
  CrossType: '549',
  CrossPrioritization: '550',
  TransactTime: '60',
};

CrossOrderCancelRequest.msgType = 'u';

module.exports = CrossOrderCancelRequest;