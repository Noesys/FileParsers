// Generated from /Users/nareshjois/Projects/Infoveave/FileParser/R.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RParser.

function RVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RVisitor.prototype.constructor = RVisitor;

// Visit a parse tree produced by RParser#prog.
RVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RParser#expr.
RVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RParser#exprlist.
RVisitor.prototype.visitExprlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RParser#formlist.
RVisitor.prototype.visitFormlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RParser#form.
RVisitor.prototype.visitForm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RParser#sublist.
RVisitor.prototype.visitSublist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RParser#sub.
RVisitor.prototype.visitSub = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RVisitor = RVisitor;