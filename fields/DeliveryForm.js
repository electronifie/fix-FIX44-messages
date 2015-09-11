var invert = require('invert-obj');

function DeliveryForm (deliveryForm) {
  this.message = deliveryForm;
}

DeliveryForm.prototype.value = function () {
  return this.message;
};


DeliveryForm.Keys = {
  'BOOKENTRY': '1',
  'BEARER': '2',
};

DeliveryForm.Tag = '668';

DeliveryForm.Type = 'INT';

DeliveryForm.Values = invert(DeliveryForm.Keys);

module.exports = DeliveryForm;