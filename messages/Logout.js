var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function Logout (logout) {
  this.message = logout;
}

Logout.prototype.text = function () {
  return new Text(this.message.tags[Logout.Tags.Text]);
};

Logout.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[Logout.Tags.EncodedTextLen]);
};

Logout.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[Logout.Tags.EncodedText]);
};

Logout.Tags = {
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

Logout.msgType = '5';

module.exports = Logout;