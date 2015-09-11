var QuotReqGrp = require('../components/QuotReqGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var RFQReqID = require('../fields/RFQReqID');
var ClOrdID = require('../fields/ClOrdID');
var OrderCapacity = require('../fields/OrderCapacity');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function QuoteRequest (quoteRequest) {
  this.message = quoteRequest;
}

QuoteRequest.prototype.quotReqGrp = function () {
  return this.message.groups[QuoteRequest.Tags.QuotReqGrp]
    .map(function (quotReqGrp) {
      return new QuotReqGrp(quotReqGrp);
  });
};

QuoteRequest.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[QuoteRequest.Tags.QuoteReqID]);
};

QuoteRequest.prototype.rfqreqId = function () {
  return new RFQReqID(this.message.tags[QuoteRequest.Tags.RFQReqID]);
};

QuoteRequest.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[QuoteRequest.Tags.ClOrdID]);
};

QuoteRequest.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[QuoteRequest.Tags.OrderCapacity]);
};

QuoteRequest.prototype.text = function () {
  return new Text(this.message.tags[QuoteRequest.Tags.Text]);
};

QuoteRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[QuoteRequest.Tags.EncodedTextLen]);
};

QuoteRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[QuoteRequest.Tags.EncodedText]);
};

QuoteRequest.Tags = {
  QuotReqGrp: '146',
  QuoteReqID: '131',
  RFQReqID: '644',
  ClOrdID: '11',
  OrderCapacity: '528',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

QuoteRequest.msgType = 'R';

module.exports = QuoteRequest;