var antlr4 = require('antlr4/index');

function InfoveaveFileParserErrorListner() {
    antlr4.error.ErrorListener.call(this);
    this.errors = [];
	return this;
}
InfoveaveFileParserErrorListner.prototype = Object.create(antlr4.error.ErrorListener.prototype);
InfoveaveFileParserErrorListner.prototype.constructor = InfoveaveFileParserErrorListner;
InfoveaveFileParserErrorListner.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({
        line: line,
        column: column,
        message: msg
    });
};

exports.InfoveaveFileParserErrorListner = InfoveaveFileParserErrorListner;