// Generated from /Users/nareshjois/Projects/Infoveave/FileParser/InfoveaveFileParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var InfoveaveFileParserListener = require('./InfoveaveFileParserListener').InfoveaveFileParserListener;
var InfoveaveFileParserVisitor = require('./InfoveaveFileParserVisitor').InfoveaveFileParserVisitor;

var grammarFileName = "InfoveaveFileParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016\\\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0006\u0002\u0019\n\u0002\r\u0002\u000e\u0002\u001a\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003(\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u00057\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006>\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0006\nO\n\n\r\n\u000e\n",
    "P\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006",
    "\u000bX\n\u000b\r\u000b\u000e\u000bY\u0003\u000b\u0002\u0002\f\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0006\u0003\u0002\u0010",
    "\u0011\u0004\u0002\u000b\u000b\u000f\u000f\u0006\u0002\b\b\u000e\u000e",
    "\u0012\u0012\u0014\u0014\u0005\u0002\b\b\u0012\u0012\u0014\u0014\u0002",
    "_\u0002\u0018\u0003\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002\u0002",
    "\u0006+\u0003\u0002\u0002\u0002\b2\u0003\u0002\u0002\u0002\n8\u0003",
    "\u0002\u0002\u0002\f?\u0003\u0002\u0002\u0002\u000eC\u0003\u0002\u0002",
    "\u0002\u0010F\u0003\u0002\u0002\u0002\u0012I\u0003\u0002\u0002\u0002",
    "\u0014R\u0003\u0002\u0002\u0002\u0016\u0019\u0005\u0004\u0003\u0002",
    "\u0017\u0019\u0007\u0016\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002",
    "\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0002\u0002\u0003",
    "\u001d\u0003\u0003\u0002\u0002\u0002\u001e(\u0005\b\u0005\u0002\u001f",
    "(\u0005\f\u0007\u0002 (\u0005\n\u0006\u0002!(\u0007\u0013\u0002\u0002",
    "\"(\u0005\u000e\b\u0002#(\u0005\u0012\n\u0002$(\u0005\u0014\u000b\u0002",
    "%(\u0005\u0010\t\u0002&(\u0005\u0006\u0004\u0002\'\u001e\u0003\u0002",
    "\u0002\u0002\'\u001f\u0003\u0002\u0002\u0002\' \u0003\u0002\u0002\u0002",
    "\'!\u0003\u0002\u0002\u0002\'\"\u0003\u0002\u0002\u0002\'#\u0003\u0002",
    "\u0002\u0002\'$\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'",
    "&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)*\u0007\u0016\u0002",
    "\u0002*\u0005\u0003\u0002\u0002\u0002+,\u0007\u0004\u0002\u0002,-\u0007",
    "\t\u0002\u0002-.\u0007\n\u0002\u0002./\u0007\u000f\u0002\u0002/0\u0007",
    "\u000e\u0002\u000201\u0007\u000f\u0002\u00021\u0007\u0003\u0002\u0002",
    "\u000223\u0007\u0003\u0002\u000234\u0007\u0014\u0002\u000246\t\u0002",
    "\u0002\u000257\u0007\u000f\u0002\u000265\u0003\u0002\u0002\u000267\u0003",
    "\u0002\u0002\u00027\t\u0003\u0002\u0002\u000289\u0007\u0005\u0002\u0002",
    "9:\u0007\u0014\u0002\u0002:;\u0007\u000f\u0002\u0002;=\t\u0003\u0002",
    "\u0002<>\u0007\u0006\u0002\u0002=<\u0003\u0002\u0002\u0002=>\u0003\u0002",
    "\u0002\u0002>\u000b\u0003\u0002\u0002\u0002?@\u0007\u0007\u0002\u0002",
    "@A\u0007\u0014\u0002\u0002AB\t\u0002\u0002\u0002B\r\u0003\u0002\u0002",
    "\u0002CD\u0007\u0006\u0002\u0002DE\u0007\t\u0002\u0002E\u000f\u0003",
    "\u0002\u0002\u0002FG\u0007\f\u0002\u0002GH\u0007\t\u0002\u0002H\u0011",
    "\u0003\u0002\u0002\u0002IJ\u0007\f\u0002\u0002JK\u0007\u0003\u0002\u0002",
    "KL\u0007\u0014\u0002\u0002LN\u0007\r\u0002\u0002MO\t\u0004\u0002\u0002",
    "NM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002Q\u0013\u0003\u0002\u0002\u0002RS\u0007",
    "\f\u0002\u0002ST\u0007\u0007\u0002\u0002TU\u0007\u0014\u0002\u0002U",
    "W\u0007\r\u0002\u0002VX\t\u0005\u0002\u0002WV\u0003\u0002\u0002\u0002",
    "XY\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z\u0015\u0003\u0002\u0002\u0002\t\u0018\u001a\'6=PY"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "RECORD", "SKIPLINE", "COLUMN", "IGNORE", "SUBRECORD", 
                      "EMPTYLINE", "LINE", "BOF", "EOL", "NEXT", "TILL", 
                      "ENDOFFILE", "COLUMNIDENTIFIER", "BEGIN", "END", "SPECIALCHARWORD", 
                      "COMMENT", "IDENTIFIER", "WHITESPACE", "NEWLINE" ];

var ruleNames =  [ "program", "line", "skipline", "record", "column", "subrecord", 
                   "ignoreline", "nextline", "nextrecord", "nextsubrecord" ];

function InfoveaveFileParserParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

InfoveaveFileParserParser.prototype = Object.create(antlr4.Parser.prototype);
InfoveaveFileParserParser.prototype.constructor = InfoveaveFileParserParser;

Object.defineProperty(InfoveaveFileParserParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

InfoveaveFileParserParser.EOF = antlr4.Token.EOF;
InfoveaveFileParserParser.RECORD = 1;
InfoveaveFileParserParser.SKIPLINE = 2;
InfoveaveFileParserParser.COLUMN = 3;
InfoveaveFileParserParser.IGNORE = 4;
InfoveaveFileParserParser.SUBRECORD = 5;
InfoveaveFileParserParser.EMPTYLINE = 6;
InfoveaveFileParserParser.LINE = 7;
InfoveaveFileParserParser.BOF = 8;
InfoveaveFileParserParser.EOL = 9;
InfoveaveFileParserParser.NEXT = 10;
InfoveaveFileParserParser.TILL = 11;
InfoveaveFileParserParser.ENDOFFILE = 12;
InfoveaveFileParserParser.COLUMNIDENTIFIER = 13;
InfoveaveFileParserParser.BEGIN = 14;
InfoveaveFileParserParser.END = 15;
InfoveaveFileParserParser.SPECIALCHARWORD = 16;
InfoveaveFileParserParser.COMMENT = 17;
InfoveaveFileParserParser.IDENTIFIER = 18;
InfoveaveFileParserParser.WHITESPACE = 19;
InfoveaveFileParserParser.NEWLINE = 20;

InfoveaveFileParserParser.RULE_program = 0;
InfoveaveFileParserParser.RULE_line = 1;
InfoveaveFileParserParser.RULE_skipline = 2;
InfoveaveFileParserParser.RULE_record = 3;
InfoveaveFileParserParser.RULE_column = 4;
InfoveaveFileParserParser.RULE_subrecord = 5;
InfoveaveFileParserParser.RULE_ignoreline = 6;
InfoveaveFileParserParser.RULE_nextline = 7;
InfoveaveFileParserParser.RULE_nextrecord = 8;
InfoveaveFileParserParser.RULE_nextsubrecord = 9;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(InfoveaveFileParserParser.EOF, 0);
};

ProgramContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

ProgramContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.NEWLINE);
    } else {
        return this.getToken(InfoveaveFileParserParser.NEWLINE, i);
    }
};


ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.ProgramContext = ProgramContext;

InfoveaveFileParserParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, InfoveaveFileParserParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 22;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case InfoveaveFileParserParser.RECORD:
            case InfoveaveFileParserParser.SKIPLINE:
            case InfoveaveFileParserParser.COLUMN:
            case InfoveaveFileParserParser.IGNORE:
            case InfoveaveFileParserParser.SUBRECORD:
            case InfoveaveFileParserParser.NEXT:
            case InfoveaveFileParserParser.COMMENT:
                this.state = 20;
                this.line();
                break;
            case InfoveaveFileParserParser.NEWLINE:
                this.state = 21;
                this.match(InfoveaveFileParserParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 24; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << InfoveaveFileParserParser.RECORD) | (1 << InfoveaveFileParserParser.SKIPLINE) | (1 << InfoveaveFileParserParser.COLUMN) | (1 << InfoveaveFileParserParser.IGNORE) | (1 << InfoveaveFileParserParser.SUBRECORD) | (1 << InfoveaveFileParserParser.NEXT) | (1 << InfoveaveFileParserParser.COMMENT) | (1 << InfoveaveFileParserParser.NEWLINE))) !== 0));
        this.state = 26;
        this.match(InfoveaveFileParserParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.NEWLINE = function() {
    return this.getToken(InfoveaveFileParserParser.NEWLINE, 0);
};

LineContext.prototype.record = function() {
    return this.getTypedRuleContext(RecordContext,0);
};

LineContext.prototype.subrecord = function() {
    return this.getTypedRuleContext(SubrecordContext,0);
};

LineContext.prototype.column = function() {
    return this.getTypedRuleContext(ColumnContext,0);
};

LineContext.prototype.COMMENT = function() {
    return this.getToken(InfoveaveFileParserParser.COMMENT, 0);
};

LineContext.prototype.ignoreline = function() {
    return this.getTypedRuleContext(IgnorelineContext,0);
};

LineContext.prototype.nextrecord = function() {
    return this.getTypedRuleContext(NextrecordContext,0);
};

LineContext.prototype.nextsubrecord = function() {
    return this.getTypedRuleContext(NextsubrecordContext,0);
};

LineContext.prototype.nextline = function() {
    return this.getTypedRuleContext(NextlineContext,0);
};

LineContext.prototype.skipline = function() {
    return this.getTypedRuleContext(SkiplineContext,0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitLine(this);
	}
};

LineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.LineContext = LineContext;

InfoveaveFileParserParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, InfoveaveFileParserParser.RULE_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 28;
            this.record();
            break;

        case 2:
            this.state = 29;
            this.subrecord();
            break;

        case 3:
            this.state = 30;
            this.column();
            break;

        case 4:
            this.state = 31;
            this.match(InfoveaveFileParserParser.COMMENT);
            break;

        case 5:
            this.state = 32;
            this.ignoreline();
            break;

        case 6:
            this.state = 33;
            this.nextrecord();
            break;

        case 7:
            this.state = 34;
            this.nextsubrecord();
            break;

        case 8:
            this.state = 35;
            this.nextline();
            break;

        case 9:
            this.state = 36;
            this.skipline();
            break;

        }
        this.state = 39;
        this.match(InfoveaveFileParserParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SkiplineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_skipline;
    return this;
}

SkiplineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkiplineContext.prototype.constructor = SkiplineContext;

SkiplineContext.prototype.SKIPLINE = function() {
    return this.getToken(InfoveaveFileParserParser.SKIPLINE, 0);
};

SkiplineContext.prototype.LINE = function() {
    return this.getToken(InfoveaveFileParserParser.LINE, 0);
};

SkiplineContext.prototype.BOF = function() {
    return this.getToken(InfoveaveFileParserParser.BOF, 0);
};

SkiplineContext.prototype.COLUMNIDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.COLUMNIDENTIFIER);
    } else {
        return this.getToken(InfoveaveFileParserParser.COLUMNIDENTIFIER, i);
    }
};


SkiplineContext.prototype.ENDOFFILE = function() {
    return this.getToken(InfoveaveFileParserParser.ENDOFFILE, 0);
};

SkiplineContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterSkipline(this);
	}
};

SkiplineContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitSkipline(this);
	}
};

SkiplineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitSkipline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.SkiplineContext = SkiplineContext;

InfoveaveFileParserParser.prototype.skipline = function() {

    var localctx = new SkiplineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, InfoveaveFileParserParser.RULE_skipline);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(InfoveaveFileParserParser.SKIPLINE);
        this.state = 42;
        this.match(InfoveaveFileParserParser.LINE);
        this.state = 43;
        this.match(InfoveaveFileParserParser.BOF);
        this.state = 44;
        this.match(InfoveaveFileParserParser.COLUMNIDENTIFIER);
        this.state = 45;
        this.match(InfoveaveFileParserParser.ENDOFFILE);
        this.state = 46;
        this.match(InfoveaveFileParserParser.COLUMNIDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RecordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_record;
    return this;
}

RecordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RecordContext.prototype.constructor = RecordContext;

RecordContext.prototype.RECORD = function() {
    return this.getToken(InfoveaveFileParserParser.RECORD, 0);
};

RecordContext.prototype.IDENTIFIER = function() {
    return this.getToken(InfoveaveFileParserParser.IDENTIFIER, 0);
};

RecordContext.prototype.BEGIN = function() {
    return this.getToken(InfoveaveFileParserParser.BEGIN, 0);
};

RecordContext.prototype.END = function() {
    return this.getToken(InfoveaveFileParserParser.END, 0);
};

RecordContext.prototype.COLUMNIDENTIFIER = function() {
    return this.getToken(InfoveaveFileParserParser.COLUMNIDENTIFIER, 0);
};

RecordContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterRecord(this);
	}
};

RecordContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitRecord(this);
	}
};

RecordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitRecord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.RecordContext = RecordContext;

InfoveaveFileParserParser.prototype.record = function() {

    var localctx = new RecordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, InfoveaveFileParserParser.RULE_record);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(InfoveaveFileParserParser.RECORD);
        this.state = 49;
        this.match(InfoveaveFileParserParser.IDENTIFIER);
        this.state = 50;
        _la = this._input.LA(1);
        if(!(_la===InfoveaveFileParserParser.BEGIN || _la===InfoveaveFileParserParser.END)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===InfoveaveFileParserParser.COLUMNIDENTIFIER) {
            this.state = 51;
            this.match(InfoveaveFileParserParser.COLUMNIDENTIFIER);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColumnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_column;
    return this;
}

ColumnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColumnContext.prototype.constructor = ColumnContext;

ColumnContext.prototype.COLUMN = function() {
    return this.getToken(InfoveaveFileParserParser.COLUMN, 0);
};

ColumnContext.prototype.IDENTIFIER = function() {
    return this.getToken(InfoveaveFileParserParser.IDENTIFIER, 0);
};

ColumnContext.prototype.COLUMNIDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.COLUMNIDENTIFIER);
    } else {
        return this.getToken(InfoveaveFileParserParser.COLUMNIDENTIFIER, i);
    }
};


ColumnContext.prototype.EOL = function() {
    return this.getToken(InfoveaveFileParserParser.EOL, 0);
};

ColumnContext.prototype.IGNORE = function() {
    return this.getToken(InfoveaveFileParserParser.IGNORE, 0);
};

ColumnContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterColumn(this);
	}
};

ColumnContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitColumn(this);
	}
};

ColumnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitColumn(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.ColumnContext = ColumnContext;

InfoveaveFileParserParser.prototype.column = function() {

    var localctx = new ColumnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, InfoveaveFileParserParser.RULE_column);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(InfoveaveFileParserParser.COLUMN);
        this.state = 55;
        this.match(InfoveaveFileParserParser.IDENTIFIER);
        this.state = 56;
        this.match(InfoveaveFileParserParser.COLUMNIDENTIFIER);
        this.state = 57;
        _la = this._input.LA(1);
        if(!(_la===InfoveaveFileParserParser.EOL || _la===InfoveaveFileParserParser.COLUMNIDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===InfoveaveFileParserParser.IGNORE) {
            this.state = 58;
            this.match(InfoveaveFileParserParser.IGNORE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubrecordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_subrecord;
    return this;
}

SubrecordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubrecordContext.prototype.constructor = SubrecordContext;

SubrecordContext.prototype.SUBRECORD = function() {
    return this.getToken(InfoveaveFileParserParser.SUBRECORD, 0);
};

SubrecordContext.prototype.IDENTIFIER = function() {
    return this.getToken(InfoveaveFileParserParser.IDENTIFIER, 0);
};

SubrecordContext.prototype.BEGIN = function() {
    return this.getToken(InfoveaveFileParserParser.BEGIN, 0);
};

SubrecordContext.prototype.END = function() {
    return this.getToken(InfoveaveFileParserParser.END, 0);
};

SubrecordContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterSubrecord(this);
	}
};

SubrecordContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitSubrecord(this);
	}
};

SubrecordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitSubrecord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.SubrecordContext = SubrecordContext;

InfoveaveFileParserParser.prototype.subrecord = function() {

    var localctx = new SubrecordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, InfoveaveFileParserParser.RULE_subrecord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(InfoveaveFileParserParser.SUBRECORD);
        this.state = 62;
        this.match(InfoveaveFileParserParser.IDENTIFIER);
        this.state = 63;
        _la = this._input.LA(1);
        if(!(_la===InfoveaveFileParserParser.BEGIN || _la===InfoveaveFileParserParser.END)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IgnorelineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_ignoreline;
    return this;
}

IgnorelineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IgnorelineContext.prototype.constructor = IgnorelineContext;

IgnorelineContext.prototype.IGNORE = function() {
    return this.getToken(InfoveaveFileParserParser.IGNORE, 0);
};

IgnorelineContext.prototype.LINE = function() {
    return this.getToken(InfoveaveFileParserParser.LINE, 0);
};

IgnorelineContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterIgnoreline(this);
	}
};

IgnorelineContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitIgnoreline(this);
	}
};

IgnorelineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitIgnoreline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.IgnorelineContext = IgnorelineContext;

InfoveaveFileParserParser.prototype.ignoreline = function() {

    var localctx = new IgnorelineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, InfoveaveFileParserParser.RULE_ignoreline);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(InfoveaveFileParserParser.IGNORE);
        this.state = 66;
        this.match(InfoveaveFileParserParser.LINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NextlineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_nextline;
    return this;
}

NextlineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NextlineContext.prototype.constructor = NextlineContext;

NextlineContext.prototype.NEXT = function() {
    return this.getToken(InfoveaveFileParserParser.NEXT, 0);
};

NextlineContext.prototype.LINE = function() {
    return this.getToken(InfoveaveFileParserParser.LINE, 0);
};

NextlineContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterNextline(this);
	}
};

NextlineContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitNextline(this);
	}
};

NextlineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitNextline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.NextlineContext = NextlineContext;

InfoveaveFileParserParser.prototype.nextline = function() {

    var localctx = new NextlineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, InfoveaveFileParserParser.RULE_nextline);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(InfoveaveFileParserParser.NEXT);
        this.state = 69;
        this.match(InfoveaveFileParserParser.LINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NextrecordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_nextrecord;
    return this;
}

NextrecordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NextrecordContext.prototype.constructor = NextrecordContext;

NextrecordContext.prototype.NEXT = function() {
    return this.getToken(InfoveaveFileParserParser.NEXT, 0);
};

NextrecordContext.prototype.RECORD = function() {
    return this.getToken(InfoveaveFileParserParser.RECORD, 0);
};

NextrecordContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.IDENTIFIER);
    } else {
        return this.getToken(InfoveaveFileParserParser.IDENTIFIER, i);
    }
};


NextrecordContext.prototype.TILL = function() {
    return this.getToken(InfoveaveFileParserParser.TILL, 0);
};

NextrecordContext.prototype.SPECIALCHARWORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.SPECIALCHARWORD);
    } else {
        return this.getToken(InfoveaveFileParserParser.SPECIALCHARWORD, i);
    }
};


NextrecordContext.prototype.EMPTYLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.EMPTYLINE);
    } else {
        return this.getToken(InfoveaveFileParserParser.EMPTYLINE, i);
    }
};


NextrecordContext.prototype.ENDOFFILE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.ENDOFFILE);
    } else {
        return this.getToken(InfoveaveFileParserParser.ENDOFFILE, i);
    }
};


NextrecordContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterNextrecord(this);
	}
};

NextrecordContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitNextrecord(this);
	}
};

NextrecordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitNextrecord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.NextrecordContext = NextrecordContext;

InfoveaveFileParserParser.prototype.nextrecord = function() {

    var localctx = new NextrecordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, InfoveaveFileParserParser.RULE_nextrecord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(InfoveaveFileParserParser.NEXT);
        this.state = 72;
        this.match(InfoveaveFileParserParser.RECORD);
        this.state = 73;
        this.match(InfoveaveFileParserParser.IDENTIFIER);
        this.state = 74;
        this.match(InfoveaveFileParserParser.TILL);
        this.state = 76; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 75;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << InfoveaveFileParserParser.EMPTYLINE) | (1 << InfoveaveFileParserParser.ENDOFFILE) | (1 << InfoveaveFileParserParser.SPECIALCHARWORD) | (1 << InfoveaveFileParserParser.IDENTIFIER))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 78; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << InfoveaveFileParserParser.EMPTYLINE) | (1 << InfoveaveFileParserParser.ENDOFFILE) | (1 << InfoveaveFileParserParser.SPECIALCHARWORD) | (1 << InfoveaveFileParserParser.IDENTIFIER))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NextsubrecordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = InfoveaveFileParserParser.RULE_nextsubrecord;
    return this;
}

NextsubrecordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NextsubrecordContext.prototype.constructor = NextsubrecordContext;

NextsubrecordContext.prototype.NEXT = function() {
    return this.getToken(InfoveaveFileParserParser.NEXT, 0);
};

NextsubrecordContext.prototype.SUBRECORD = function() {
    return this.getToken(InfoveaveFileParserParser.SUBRECORD, 0);
};

NextsubrecordContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.IDENTIFIER);
    } else {
        return this.getToken(InfoveaveFileParserParser.IDENTIFIER, i);
    }
};


NextsubrecordContext.prototype.TILL = function() {
    return this.getToken(InfoveaveFileParserParser.TILL, 0);
};

NextsubrecordContext.prototype.SPECIALCHARWORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.SPECIALCHARWORD);
    } else {
        return this.getToken(InfoveaveFileParserParser.SPECIALCHARWORD, i);
    }
};


NextsubrecordContext.prototype.EMPTYLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(InfoveaveFileParserParser.EMPTYLINE);
    } else {
        return this.getToken(InfoveaveFileParserParser.EMPTYLINE, i);
    }
};


NextsubrecordContext.prototype.enterRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.enterNextsubrecord(this);
	}
};

NextsubrecordContext.prototype.exitRule = function(listener) {
    if(listener instanceof InfoveaveFileParserListener ) {
        listener.exitNextsubrecord(this);
	}
};

NextsubrecordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof InfoveaveFileParserVisitor ) {
        return visitor.visitNextsubrecord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




InfoveaveFileParserParser.NextsubrecordContext = NextsubrecordContext;

InfoveaveFileParserParser.prototype.nextsubrecord = function() {

    var localctx = new NextsubrecordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, InfoveaveFileParserParser.RULE_nextsubrecord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(InfoveaveFileParserParser.NEXT);
        this.state = 81;
        this.match(InfoveaveFileParserParser.SUBRECORD);
        this.state = 82;
        this.match(InfoveaveFileParserParser.IDENTIFIER);
        this.state = 83;
        this.match(InfoveaveFileParserParser.TILL);
        this.state = 85; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 84;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << InfoveaveFileParserParser.EMPTYLINE) | (1 << InfoveaveFileParserParser.SPECIALCHARWORD) | (1 << InfoveaveFileParserParser.IDENTIFIER))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 87; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << InfoveaveFileParserParser.EMPTYLINE) | (1 << InfoveaveFileParserParser.SPECIALCHARWORD) | (1 << InfoveaveFileParserParser.IDENTIFIER))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.InfoveaveFileParserParser = InfoveaveFileParserParser;
