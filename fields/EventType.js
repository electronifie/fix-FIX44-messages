var invert = require('invert-obj');

function EventType (eventType) {
  this.message = eventType;
}

EventType.prototype.value = function () {
  return this.message;
};


EventType.Keys = {
  'PUT': '1',
  'CALL': '2',
  'TENDER': '3',
  'SINKING_FUND_CALL': '4',
  'OTHER': '99',
};

EventType.Tag = '865';

EventType.Type = 'INT';

EventType.Values = invert(EventType.Keys);

module.exports = EventType;