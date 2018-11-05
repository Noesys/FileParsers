export type ParseTreeElement = RecordElement | SubRecordElement | Column | IgnoreLine | SkipLine | NextRecordElement | NextSubRecordElement | NextLine;

export interface ParseError {
    line: number;
    message: string;
    column?: number;
    startColumn?: number;
    endColumn?: number;
}
export interface DataMarker {
    type: "IgnoreLine" | "Column" | "SkipLine";
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
    title: string;
}

export interface ParsedResult {
    data: any[];
    dataMarkers: DataMarker[];
    errors: any[];
    linesParsed?: number;
}

interface ParseElementContent {
    content: string;
    begin: string;
    end: string;
}

export interface RecordElement {
    action : "Record";
    line: number;
    name: ParseElementContent;
    type: {
        content: "BEGIN" | "END";
        begin: string;
        end: string;
    };
    lineCount?: number;
}

export interface SubRecordElement {
    action : "SubRecord";
    line: number;
    name: ParseElementContent;
    type: ParseElementContent;
}

export interface Column {
    action: "Column";
    line: number;
    name: ParseElementContent;
    begin: ParseElementContent;
    end: ParseElementContent;
    canIgnore: boolean;
}

export interface IgnoreLine {
    action: "IgnoreLine";
    line: number;
    till?: string;
}

export interface NextLine {
    action: "NextLine";
    line: number;
}

export interface SkipLine {
    action: "SkipLine";
    line: number;
    begin: ParseElementContent;
    end: ParseElementContent;
}

export interface NextRecordElement {
    action : "NextRecord";
    line: number;
    name: ParseElementContent;
    till: ParseElementContent[];
}

export interface NextSubRecordElement {
    action : "NextSubRecord";
    line: number;
    name: ParseElementContent;
    till: ParseElementContent[];
}