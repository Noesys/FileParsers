/// <reference path="./interfaces.d.ts" />
import antlr4 from 'antlr4/index';
import RLexer from "./R/RLexer.js";
import RParser from "./R/RParser.js";
import RVisitor from "./R/RVisitor";
import RErrorListner from "./R/RErrorListener";

export const ParseRCode = (input: string) => {
    var chars = new antlr4.InputStream(input);
    var lexer = new RLexer.RLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser: any = new RParser.RParser(tokens);
    var errorListener = new RErrorListner.RErrorListner();
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    var tree = parser.prog();
    var visitor = new RVisitor.RVisitor();
    var result;
    try {
        result = visitor.visitProg(tree);
    } catch (e) {
        errorListener.errors.push({ line: 1, column: 1, message: "Unable to Parse Expression" });
    };
    return {
        errors: errorListener.errors,
        tree: result
    }
}
