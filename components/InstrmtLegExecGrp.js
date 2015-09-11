var NoLegs = require('../fields/NoLegs');
var InstrumentLeg = require('../components/InstrumentLeg');
var LegStipulations = require('../components/LegStipulations');
var NestedParties = require('../components/NestedParties');
var LegQty = require('../fields/LegQty');
var LegSwapType = require('../fields/LegSwapType');
var LegPositionEffect = require('../fields/LegPositionEffect');
var LegCoveredOrUncovered = require('../fields/LegCoveredOrUncovered');
var LegRefID = require('../fields/LegRefID');
var LegPrice = require('../fields/LegPrice');
var LegSettlType = require('../fields/LegSettlType');
var LegSettlDate = require('../fields/LegSettlDate');
var LegLastPx = require('../fields/LegLastPx');

function InstrmtLegExecGrp (instrmtLegExecGrp) {
  this.message = instrmtLegExecGrp;
}

/* group */

/* component */
InstrmtLegExecGrp.prototype.instrumentLeg = function () {
  return this.message.groups[InstrumentLeg.Tag]
    .map(function (instrumentLeg) {
      return new InstrumentLeg(instrumentLeg);
  });
};

/* component */
InstrmtLegExecGrp.prototype.legStipulations = function () {
  return this.message.groups[LegStipulations.Tag]
    .map(function (legStipulations) {
      return new LegStipulations(legStipulations);
  });
};

/* component */
InstrmtLegExecGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* field */
InstrmtLegExecGrp.prototype.legQty = function () {
  return new LegQty(this.message.tags[LegQty.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSwapType = function () {
  return new LegSwapType(this.message.tags[LegSwapType.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legPositionEffect = function () {
  return new LegPositionEffect(this.message.tags[LegPositionEffect.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legCoveredOrUncovered = function () {
  return new LegCoveredOrUncovered(this.message.tags[LegCoveredOrUncovered.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legRefId = function () {
  return new LegRefID(this.message.tags[LegRefID.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legPrice = function () {
  return new LegPrice(this.message.tags[LegPrice.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSettlType = function () {
  return new LegSettlType(this.message.tags[LegSettlType.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legSettlDate = function () {
  return new LegSettlDate(this.message.tags[LegSettlDate.Tag]);
};

/* field */
InstrmtLegExecGrp.prototype.legLastPx = function () {
  return new LegLastPx(this.message.tags[LegLastPx.Tag]);
};

/* end group */

InstrmtLegExecGrp.Tag = '555';

module.exports = InstrmtLegExecGrp;