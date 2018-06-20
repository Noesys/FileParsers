var antlr4 = require('antlr4/index');

function RErrorListner() {
    antlr4.error.ErrorListener.call(this);
    this.errors = [];
	return this;
}
RErrorListner.prototype = Object.create(antlr4.error.ErrorListener.prototype);
RErrorListner.prototype.constructor = RErrorListner;
RErrorListner.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({
        line: line,
        column: column,
        message: msg
    });
};

exports.RErrorListner = RErrorListner;