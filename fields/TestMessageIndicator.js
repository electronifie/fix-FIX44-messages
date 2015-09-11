var invert = require('invert-obj');

function TestMessageIndicator (testMessageIndicator) {
  this.message = testMessageIndicator;
}

TestMessageIndicator.prototype.value = function () {
  return this.message;
};


TestMessageIndicator.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

TestMessageIndicator.Tag = '464';

TestMessageIndicator.Type = 'BOOLEAN';

TestMessageIndicator.Values = invert(TestMessageIndicator.Keys);

module.exports = TestMessageIndicator;