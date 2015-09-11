var NoUnderlyings = require('../fields/NoUnderlyings');
var UnderlyingInstrument = require('../components/UnderlyingInstrument');
var PrevClosePx = require('../fields/PrevClosePx');
var ClOrdID = require('../fields/ClOrdID');
var SecondaryClOrdID = require('../fields/SecondaryClOrdID');
var Side = require('../fields/Side');
var Price = require('../fields/Price');
var Currency = require('../fields/Currency');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function UndInstrmtStrkPxGrp (undInstrmtStrkPxGrp) {
  this.message = undInstrmtStrkPxGrp;
}

/* group */

/* component */
UndInstrmtStrkPxGrp.prototype.underlyingInstrument = function () {
  return this.message.groups[UnderlyingInstrument.Tag]
    .map(function (underlyingInstrument) {
      return new UnderlyingInstrument(underlyingInstrument);
  });
};

/* field */
UndInstrmtStrkPxGrp.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[PrevClosePx.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.clOrdId = function () {
  return new ClOrdID(this.message.tags[ClOrdID.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.secondaryClOrdId = function () {
  return new SecondaryClOrdID(this.message.tags[SecondaryClOrdID.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
UndInstrmtStrkPxGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

UndInstrmtStrkPxGrp.Tag = '711';

module.exports = UndInstrmtStrkPxGrp;