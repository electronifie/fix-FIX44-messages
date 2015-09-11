var invert = require('invert-obj');

function AllocType (allocType) {
  this.message = allocType;
}

AllocType.prototype.value = function () {
  return this.message;
};


AllocType.Keys = {
  'CALCULATED': '1',
  'PRELIMINARY': '2',
  'READY_TO_BOOK': '5',
  'WAREHOUSE_INSTRUCTION': '7',
  'REQUEST_TO_INTERMEDIARY': '8',
};

AllocType.Tag = '626';

AllocType.Type = 'INT';

AllocType.Values = invert(AllocType.Keys);

module.exports = AllocType;