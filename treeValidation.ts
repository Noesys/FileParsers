import { isNumber, find, parseInt, isArray } from "lodash";
import { ParseTreeElement, ParseError, RecordElement, SubRecordElement } from "./interfaces";
const validateAndTransformTree = (result: { tree: ParseTreeElement[], errors: ParseError[] }) => {
    // 

    if (result.tree == null || !isArray(result.tree)) {
        if (result.errors == null) {
            result.errors = [];
        }
        result.errors.push({
            line: 1,
            column: 1,
            message: "Unable to Parse Program"
        })
    }
    let tree = [];
    let recordBeginEnd = 0;
    let subrecordBegin = 0;
    if (result.tree == null) {
        return result;
    }

    let addError = (line: number, start: string | number, end: string | number, message:string): void => {
        result.errors.push({
            line: line,
            startColumn: isNumber(start) ? start : parseInt(start),
            endColumn: isNumber(end) ? end : parseInt(end),
            message: message
        });
    }

    let itemCloseRule =  (t: RecordElement | SubRecordElement) => {
        let end = find(result.tree, et =>
            et.action ===  t.action &&
            et.type.content === "END" &&
            et.name.content === t.name.content
        );
        if (end == null) {
            addError(t.line, t.name.begin, t.name.end, `The ${t.action} ${t.name.content} is not closed`);
        }
    }

    for(let ti = 0; ti < result.tree.length; ti++) {
        let t = result.tree[ti];

        if (ti === 0 && t.action !== "Record" && t.action !== "SkipLine") {
            addError(t.line, 0, 10, `Program should start with a Begin Record or Skip Line Statement`);
        } 

        if (t.action === "Record" && t.type.content === "BEGIN") {
            recordBeginEnd += 1;
            itemCloseRule(t);
            if (recordBeginEnd > 1) {
                addError(t.line, t.name.begin, t.name.end, `Nested Record ${t.name.content} is not supported, Possibly use Sub Record`);
            }
        }
        if (t.action === "Record" && t.type.content === "END") {
            recordBeginEnd -= 1;
            if (recordBeginEnd < 0) {
                addError(t.line, t.name.begin, t.name.end, `The Record ${t.name.content} is imporperly closed`);
            }
        }
        if (t.action === "SubRecord" && t.type.content === "BEGIN") {
            subrecordBegin += 1;
            itemCloseRule(t);
            if (subrecordBegin > 1) {
                addError(t.line, t.name.begin, t.name.end, `The Sub Record ${t.name.content} is nested inside another Sub Record, which is not supported`);
            }
        }
        if (t.action === "SubRecord" && t.type.content === "END") {
            subrecordBegin -= 1;
            if (subrecordBegin < 0) {
                addError(t.line, t.name.begin, t.name.end, `The Sub Record ${t.name.content} is imporperly closed`);
            }
        }
        if (t.action === "Column" && recordBeginEnd < 1) {
            addError(t.line, t.name.begin, t.name.end, `The Column ${t.name.content} is not part of any record`);
        }
        /* if (t.action === "IgnoreLine"&& recordBeginEnd < 1) {
            addError(t.line, 0, 12, `The Ignore Line is not part of any record`);
        }*/
        if (t.action === "NextRecord") {
            let previousLine = result.tree[ti - 1];
            if (previousLine.action !== "Record" || previousLine.type.content !== "END") {
                addError(t.line, t.name.begin, t.name.end, `Next Record must be preceeded with a End Record`);
            }
        }
        if (t.action === "NextSubRecord") {
            let previousLine = result.tree[ti - 1];
            if (previousLine.action !== "SubRecord" || previousLine.type.content !== "END") {
                addError(t.line, t.name.begin, t.name.end, `Next Sub Record must be preceeded with a End Sub Record`);
            }
        }
    };
    return result;
}
export default validateAndTransformTree;