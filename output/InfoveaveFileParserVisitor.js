// Generated from /Users/nareshjois/Projects/Infoveave/FileParser/InfoveaveFileParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by InfoveaveFileParserParser.

function InfoveaveFileParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

InfoveaveFileParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
InfoveaveFileParserVisitor.prototype.constructor = InfoveaveFileParserVisitor;

// Visit a parse tree produced by InfoveaveFileParserParser#program.
InfoveaveFileParserVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#line.
InfoveaveFileParserVisitor.prototype.visitLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#skipline.
InfoveaveFileParserVisitor.prototype.visitSkipline = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#record.
InfoveaveFileParserVisitor.prototype.visitRecord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#column.
InfoveaveFileParserVisitor.prototype.visitColumn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#subrecord.
InfoveaveFileParserVisitor.prototype.visitSubrecord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#ignoreline.
InfoveaveFileParserVisitor.prototype.visitIgnoreline = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#nextrecord.
InfoveaveFileParserVisitor.prototype.visitNextrecord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by InfoveaveFileParserParser#nextsubrecord.
InfoveaveFileParserVisitor.prototype.visitNextsubrecord = function(ctx) {
  return this.visitChildren(ctx);
};



exports.InfoveaveFileParserVisitor = InfoveaveFileParserVisitor;