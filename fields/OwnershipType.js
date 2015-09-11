var invert = require('invert-obj');

function OwnershipType (ownershipType) {
  this.message = ownershipType;
}

OwnershipType.prototype.value = function () {
  return this.message;
};


OwnershipType.Keys = {
  'JOINT_INVESTORS': 'J',
  'TENANTS_IN_COMMON': 'T',
  'JOINT_TRUSTEES': '2',
};

OwnershipType.Tag = '517';

OwnershipType.Type = 'CHAR';

OwnershipType.Values = invert(OwnershipType.Keys);

module.exports = OwnershipType;