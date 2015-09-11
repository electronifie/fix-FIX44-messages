var invert = require('invert-obj');

function CommType (commType) {
  this.message = commType;
}

CommType.prototype.value = function () {
  return this.message;
};


CommType.Keys = {
  'PER_UNIT': '1',
  'PERCENTAGE': '2',
  'ABSOLUTE': '3',
  '4': '4',
  '5': '5',
  'POINTS_PER_BOND_OR_CONTRACT_SUPPLY_CONTRACTMULTIPLIER': '6',
};

CommType.Tag = '13';

CommType.Type = 'CHAR';

CommType.Values = invert(CommType.Keys);

module.exports = CommType;