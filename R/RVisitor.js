// Generated from R.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var filter = require('lodash/filter');
var map = require('lodash/map');
var isArray = require('lodash/isArray');
// This class defines a complete generic visitor for a parse tree produced by RParser.

function RVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RVisitor.prototype.constructor = RVisitor;

// Visit a parse tree produced by RParser#prog.
RVisitor.prototype.visitProg = function(ctx) {
  let children = this.visitChildren(ctx);
  return filter(children, function(c) { return c != null });
};


// Visit a parse tree produced by RParser#expr.
RVisitor.prototype.visitExpr = function(ctx) {
  if (ctx.children.length == 1)  {
      // We know there is no other child for this expresion and just the text
      // so we return the value 
      return { value: ctx.getText(), position: ctx.getRuleContext().start.start };
  }
  let children = this.visitChildren(ctx);
  if (children[2].params != null) {
    // Meaning Sub Tree has been computed to be a object
    // we can safely return 
    return { func: children[0], params: children[2].params };
  }
  return filter(children, function(c) { return c != null });
};


// Visit a parse tree produced by RParser#exprlist.
RVisitor.prototype.visitExprlist = function(ctx) {
  let children = this.visitChildren(ctx);
  return filter(children, function(c) { return c != null });
};


// Visit a parse tree produced by RParser#formlist.
RVisitor.prototype.visitFormlist = function(ctx) {
  let children = this.visitChildren(ctx);
  return filter(children, function(c) { return c != null });
};


// Visit a parse tree produced by RParser#form.
RVisitor.prototype.visitForm = function(ctx) {
  let children = this.visitChildren(ctx);
  return filter(children, function(c) { return c != null });
};


// Visit a parse tree produced by RParser#sublist.
RVisitor.prototype.visitSublist = function(ctx) {
  let children = this.visitChildren(ctx);
  return { params : filter(children, function(c) { return c != null }) };
};


// Visit a parse tree produced by RParser#sub.
RVisitor.prototype.visitSub = function(ctx) {
  let concatChildern = function(childs) {
    if (!isArray(childs)){
      return childs.value;
    }
    let s = "";
    childs.forEach(c => {
       s += c.value + "$";
    });
    s = s.substr(0, s.length -1);
    return s;
  }

  if (ctx.children == null || ctx.children.length == 0) {
    return null;
  }
  if (ctx.children[0].children.length > 1) {
    let children = this.visitChildren(ctx)[0];
    // See if the Child Has already been parser as an expression if so 
    if (children.params != null) {
      if (isArray(children.func)) {

        let ixOfFirstEq = ctx.getText().indexOf("=");
        if (ixOfFirstEq === -1) {
          ixOfFirstEq = 0;
        }
        let text = ctx.getText().substring(ixOfFirstEq + 1, ctx.getText().length);
        return { name: children.func.shift(), text: text, value: { func: children.func[0], params: children.params  }  }
      }
      return { name: null, value: children }
    }
    // Logically we should end up only with 2 values
    // but we have to check which operators are present based on
    // which the return value is calulated
    // if there is only "=" then its an assignment
    // if there is only "$" then its an accessor
    // if there are both then its and assignement with the value of accessor

    if (ctx.getText().indexOf("=") > 0 && ctx.getText().indexOf("$") > 0) {
      // Here the value should be a concated version of children[1];
      return { name: children[0], value: concatChildern(children[1]), position: children[0].position };
    } else if (ctx.getText().indexOf("=") > 0) {
      return { name: children[0], value: children[1].value, position: children[0].position };
    } else {
      return { name: "", value: concatChildern(children), position: children[0].position };
    }
  }
  let children = this.visitChildren(ctx);
  var value = { name: "", value: children[0].value, position: children[0].position };
  return value;
};





exports.RVisitor = RVisitor;