/// <reference path="./interfaces.d.ts" />
import antlr4 from "antlr4/index";
import Lexer from "./output/InfoveaveFileParserLexer.js";
import Parser from "./output/InfoveaveFileParserParser.js";
import Visitor from "./output/InfoveaveFileParserVisitor";
import ErrorListner from "./output/InfoveaveFileParserErrorListener";
import validateAndTransformTree from "./treeValidation";
import { RecordElement, SubRecordElement, SkipLine, Column, NextRecordElement,
    NextSubRecordElement, IgnoreLine, NextLine } from "./interfaces";
export const ParseCode: (input:string) => { errors: any[], tree: any } = function (input: string): { errors: any[], tree: any } {
    var chars: any = new antlr4.InputStream(input);
    var lexer: any = new Lexer.InfoveaveFileParserLexer(chars);
    var tokens: any = new antlr4.CommonTokenStream(lexer);
    var parser: any = new Parser.InfoveaveFileParserParser(tokens);
    parser.removeErrorListeners();
    var errorListener: any = new ErrorListner.InfoveaveFileParserErrorListner();
    parser.buildParseTrees = true;
    var parseError: any = null;
    parser.addErrorListener(errorListener);
    var tree: any = parser.program();

    Visitor.InfoveaveFileParserVisitor.prototype.visitProgram = function (ctx: any): any {
        let result: any = this.visitChildren(ctx);
        return result.filter(r => r != null);
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitRecord =  (ctx): RecordElement => {
        let lineCount: number = 0;
        if (ctx.children[3] != null && !isNaN(parseInt(ctx.children[3].getText(), 10))) {
            lineCount = parseInt(ctx.children[3].getText(), 10);
        }
        return {
            line: ctx.getRuleContext().start.line,
            action: "Record",
            name: {
                content: ctx.children[1].getText(),
                begin: ctx.getRuleContext().children[1].symbol.column,
                end: ctx.getRuleContext().children[1].symbol.column + ctx.children[1].getText().length
            },
            type: {
                content: ctx.children[2].getText(),
                begin: ctx.getRuleContext().children[2].symbol.column,
                end: ctx.getRuleContext().children[2].symbol.column + ctx.children[2].getText().length
            },
            lineCount: lineCount,
        };
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitSubrecord = (ctx): SubRecordElement => {
        return {
            line: ctx.getRuleContext().start.line,
            action: "SubRecord",
            name: {
                content: ctx.children[1].getText(),
                begin: ctx.getRuleContext().children[1].symbol.column,
                end: ctx.getRuleContext().children[1].symbol.column + ctx.children[1].getText().length
            },
            type: {
                content: ctx.children[2].getText(),
                begin: ctx.getRuleContext().children[2].symbol.column,
                end: ctx.getRuleContext().children[2].symbol.column + ctx.children[2].getText().length
            }
        };
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitSkipline = (ctx): SkipLine => {
        return {
            line: ctx.getRuleContext().start.line,
            action: "SkipLine",
            begin: {
                content: ctx.children[3].getText(),
                begin: ctx.getRuleContext().children[3].symbol.column,
                end: ctx.getRuleContext().children[3].symbol.column + ctx.children[3].getText().length
            },
            end : {
                content: ctx.children[5].getText(),
                begin: ctx.getRuleContext().children[5].symbol.column,
                end: ctx.getRuleContext().children[5].symbol.column + ctx.children[5].getText().length
            }
        };
    };


    Visitor.InfoveaveFileParserVisitor.prototype.visitLine = function (ctx: any): any {
        let result: any = this.visitChildren(ctx);
        return result[0];
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitColumn =  (ctx): Column => {
        return {
            line: ctx.getRuleContext().start.line,
            action: "Column",
            name: {
                content: ctx.children[1].getText(),
                begin: ctx.getRuleContext().children[1].symbol.column,
                end: ctx.getRuleContext().children[1].symbol.column + ctx.children[1].getText().length
            },
            begin: {
                content: ctx.children[2].getText(),
                begin: ctx.getRuleContext().children[2].symbol.column,
                end: ctx.getRuleContext().children[2].symbol.column + ctx.children[2].getText().length,
            },
            end: {
                content: ctx.children[3].getText(),
                begin: ctx.getRuleContext().children[3].symbol.column,
                end: ctx.getRuleContext().children[3].symbol.column + ctx.children[3].getText().length
            },
            canIgnore : (ctx.getRuleContext().children[4] != null && ctx.getRuleContext().children[4].getText() === "IGNORE")
        };
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitIgnoreline = (ctx): IgnoreLine => {
        return {
            line: ctx.getRuleContext().start.line,
            action: "IgnoreLine",
            till: ctx.children[2] != null ? ctx.children[2].getText() : null,
        };
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitNextline = function(ctx: any): NextLine {
        return {
            line: ctx.getRuleContext().start.line,
            action: "NextLine"
        };
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitNextrecord = (ctx: any): NextRecordElement =>  {
        let result : NextRecordElement = {
            line: ctx.getRuleContext().start.line,
            action: "NextRecord",
            name: {
                content: ctx.children[2].getText(),
                begin: ctx.getRuleContext().children[2].symbol.column,
                end: ctx.getRuleContext().children[2].symbol.column + ctx.children[2].getText().length
            },
            till: []
        };
        for(let i: number = 4; i < ctx.children.length; i ++) {
            result.till.push({
                content: ctx.children[i].getText(),
                begin: ctx.getRuleContext().children[i].symbol.column,
                end: ctx.getRuleContext().children[i].symbol.column + ctx.children[i].getText().length
            });
        }
        return result;
    };

    Visitor.InfoveaveFileParserVisitor.prototype.visitNextsubrecord = (ctx): NextSubRecordElement => {
        let result: NextSubRecordElement = {
            line: ctx.getRuleContext().start.line,
            action: "NextSubRecord",
            name: {
                content: ctx.children[2].getText(),
                begin: ctx.getRuleContext().children[2].symbol.column,
                end: ctx.getRuleContext().children[2].symbol.column + ctx.children[2].getText().length
            },
            till: []
        };
        for(let i: number = 4; i < ctx.children.length; i ++) {
            result.till.push({
                content: ctx.children[i].getText(),
                begin: ctx.getRuleContext().children[i].symbol.column,
                end: ctx.getRuleContext().children[i].symbol.column + ctx.children[i].getText().length
            });
        }
        return result;
    };

    var visitor: any = new Visitor.InfoveaveFileParserVisitor();
    var result: any;
    try {
        result = visitor.visitProgram(tree);
    } catch (e) {
        console.log(e);
        // errorListener.errors.push({ line: 1, column: 1, message: "Unable to Parse Expression" });
    }
    let c: any = {
        errors: errorListener.errors,
        tree: result
    };
    c = validateAndTransformTree(c);
    return c;
};