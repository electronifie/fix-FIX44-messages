var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var Currency = require('../fields/Currency');
var ExpirationCycle = require('../fields/ExpirationCycle');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function RelSymDerivSecGrp (relSymDerivSecGrp) {
  this.message = relSymDerivSecGrp;
}

/* group */

/* component */
RelSymDerivSecGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
RelSymDerivSecGrp.prototype.instrumentExtension = function () {
  return this.message.groups[InstrumentExtension.Tag]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

/* component */
RelSymDerivSecGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
RelSymDerivSecGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.expirationCycle = function () {
  return new ExpirationCycle(this.message.tags[ExpirationCycle.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
RelSymDerivSecGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

RelSymDerivSecGrp.Tag = '146';

module.exports = RelSymDerivSecGrp;