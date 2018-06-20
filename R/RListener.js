// Generated from R.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var groupBy = require('lodash/groupBy');
var filter = require("lodash/filter");
// This class defines a complete listener for a parse tree produced by RParser.
function RListener() {
	antlr4.tree.ParseTreeListener.call(this);
	this.list = [];	
	return this;
}



RListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RListener.prototype.constructor = RListener;


// Enter a parse tree produced by RParser#prog.
RListener.prototype.enterProg = function(ctx) {

};

// Exit a parse tree produced by RParser#prog.
RListener.prototype.exitProg = function(ctx) {

};


// Enter a parse tree produced by RParser#expr.
RListener.prototype.enterExpr = function(ctx) {
	this.list.push({ type: "Expr", action : "Enter", text: ctx.getText() });
};

// Exit a parse tree produced by RParser#expr.
RListener.prototype.exitExpr = function(ctx) {
	this.list.push({ type: "Expr", action : "Exit", text: ctx.getText() });
};


// Enter a parse tree produced by RParser#exprlist.
RListener.prototype.enterExprlist = function(ctx) {
	this.list.push({ type: "Exprlist", action : "Enter", text: ctx.getText() });
};

// Exit a parse tree produced by RParser#exprlist.
RListener.prototype.exitExprlist = function(ctx) {
	this.list.push({ type: "Exprlist", action : "Exit", text: ctx.getText() });
};


// Enter a parse tree produced by RParser#formlist.
RListener.prototype.enterFormlist = function(ctx) {
	this.list.push({ type: "Formlist", action : "Enter", text: ctx.getText() });
};

// Exit a parse tree produced by RParser#formlist.
RListener.prototype.exitFormlist = function(ctx) {
	this.list.push({ type: "Formlist", action : "Exit", text: ctx.getText() });
};


// Enter a parse tree produced by RParser#form.
RListener.prototype.enterForm = function(ctx) {
	this.list.push({ type: "Form", action : "Enter", text: ctx.getText() });
};

// Exit a parse tree produced by RParser#form.
RListener.prototype.exitForm = function(ctx) {
	this.list.push({ type: "Form", action : "Exit", text: ctx.getText() });
};


// Enter a parse tree produced by RParser#sublist.
RListener.prototype.enterSublist = function(ctx) {
	this.list.push({ type: "Sublist", action : "Enter", text: ctx.getText() });
};

// Exit a parse tree produced by RParser#sublist.
RListener.prototype.exitSublist = function(ctx) {
	this.list.push({ type: "Sublist", action : "Exit", text: ctx.getText() });
};


// Enter a parse tree produced by RParser#sub.
RListener.prototype.enterSub = function(ctx) {
	this.list.push({ type: "Sub", action : "Enter", text: ctx.getText() });
};

// Exit a parse tree produced by RParser#sub.
RListener.prototype.exitSub = function(ctx) {
	this.list.push({ type: "Sub", action : "Exit", text: ctx.getText() });
};



exports.RListener = RListener;