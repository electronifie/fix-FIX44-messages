var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var Stipulations = require('../components/Stipulations');
var InstrmtLegSecListGrp = require('../components/InstrmtLegSecListGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var Currency = require('../fields/Currency');
var RoundLot = require('../fields/RoundLot');
var MinTradeVol = require('../fields/MinTradeVol');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var ExpirationCycle = require('../fields/ExpirationCycle');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function SecListGrp (secListGrp) {
  this.message = secListGrp;
}

/* group */

/* component */
SecListGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
SecListGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
SecListGrp.prototype.financingDetails = function () {
  return this.message.groups[FinancingDetails.Tag]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

/* component */
SecListGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
SecListGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
SecListGrp.prototype.instrmtLegSecListGrp = function () {
  return this.message.groups[InstrmtLegSecListGrp.Tag]
    .map(function (instrmtLegSecListGrp) {
      return new InstrmtLegSecListGrp(instrmtLegSecListGrp);
  });
};

/* component */
SecListGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
SecListGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* field */
SecListGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
SecListGrp.prototype.roundLot = function () {
  return new RoundLot(this.message.tags[RoundLot.Tag]);
};

/* field */
SecListGrp.prototype.minTradeVol = function () {
  return new MinTradeVol(this.message.tags[MinTradeVol.Tag]);
};

/* field */
SecListGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
SecListGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
SecListGrp.prototype.expirationCycle = function () {
  return new ExpirationCycle(this.message.tags[ExpirationCycle.Tag]);
};

/* field */
SecListGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
SecListGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
SecListGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

SecListGrp.Tag = '146';

module.exports = SecListGrp;