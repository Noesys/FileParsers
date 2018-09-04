import { filter, parseInt, union, take, drop } from "lodash";
import { ParseTreeElement, RecordElement, SkipLine, Column, DataMarker, ParsedResult } from "./interfaces";
export const ParseTextUsingTree = (text: string, tree: ParseTreeElement[]): ParsedResult => {
    // If there are more than one EOL or one Ignore Line or SubRecord then
    // the datamarkers must be for all lines,
    // otherwise markers on one line should be ok

    let eolCount = filter(tree, t => t.action === "Column" && t.end.content === "EOL").length;
    let subRecord = filter(tree, t => t.action === "SubRecord").length;
    let ignoreLine = filter(tree, t => t.action === "IgnoreLine").length;
    let nextLine  = filter(tree, t => t.action === "NextLine").length;

    let useMultiLineMarkers = false;
    if (eolCount > 1 || subRecord > 0 || ignoreLine > 0 || nextLine > 0) {
        useMultiLineMarkers = true;
    }

    let textAsArray = text.split(/\r\n|\r|\n/);
    let currentLineIndex = 0;

    let currentIndex = 0;
    
    let lastPossibleLineIndex = textAsArray.length - 1;

    let recordName = "";
    let dataMarkers: DataMarker[] = [];
    
    // if there are ignore lines till record begin 
    if(tree[currentIndex].action === "SkipLine") {
        let noOfBeginLinesToSkip = parseInt((<SkipLine>tree[currentIndex]).begin.content);
        let noOfEndLinesToSkip = parseInt((<SkipLine>tree[currentIndex]).end.content);
        for(let i = 0; i < noOfBeginLinesToSkip; i++) {
            dataMarkers.push(createDataMarker("SkipLine", currentLineIndex + 1, currentLineIndex + 1, 1, textAsArray[currentLineIndex].length, "Skip Line"));
            currentLineIndex += 1;
        }
        lastPossibleLineIndex -= noOfEndLinesToSkip;
        currentIndex += 1;
        // Also Mark the the last lines to skipLine
        for(let i = 0; i < noOfEndLinesToSkip; i++) {
            dataMarkers.push(createDataMarker("SkipLine", textAsArray.length - i, textAsArray.length - i, 1, textAsArray[textAsArray.length - i - 1].length + 1, "Skip Line"));
        }
    }
    // Seek the tree and lines till the record begin
    if(tree[currentIndex].action === "Record" && (<RecordElement>tree[currentIndex]).type.content === "BEGIN") {
        currentIndex +=1;
    }
    // Get the record tree
    let recordTree = GetRecordTree(tree, currentIndex);

    let result: ParsedResult = {
        data: [],
        dataMarkers: [],
        errors: []
    };

    // using tree parse records 
    while (currentLineIndex <= lastPossibleLineIndex) {
        let recordResult = ParseOneRecord(recordTree, currentLineIndex, textAsArray, lastPossibleLineIndex);
        result.errors = union(result.errors, recordResult.errors);
        if (recordResult.errors.length > 0) {
            result.errors.push({ lineNumber : currentLineIndex + 1, column: 1, message: `Record No ${result.data.length} could not be completely parsed` })
        } else {
            result.data.push(recordResult.data);
            result.dataMarkers = union(result.dataMarkers, recordResult.dataMarkers);
        }
        if (recordResult.linesParsed == null) {
            throw "No Lines Parsed for a Record";
        }
        if (recordResult.linesParsed === 0) {
            // For whatever reason this comes as 0 we manualy set it to 1
            recordResult.linesParsed = 1;
        }
        currentLineIndex += recordResult.linesParsed;
    }
    return result;
}

const ParseOneRecord = (recordTree: ParseTreeElement[], currentLineIndex: number, textAsArray: string[], lastPossibleLineIndex: number) : ParsedResult => {
    let remainingTreeLength = recordTree.length;
    let currentTreeIndex = 0;
    let result: {
        data: any;
        dataMarkers: DataMarker[];
        errors: any[];
        linesParsed: number
    } =  {
        data: {},
        dataMarkers: [],
        errors: [],
        linesParsed : 0
    }
    while(remainingTreeLength > 0) {
        let currentTree = FindTreePartTillNextLine(recordTree, currentTreeIndex);
        remainingTreeLength -= currentTree.length;
        currentTreeIndex += currentTree.length;
        if (currentLineIndex >= lastPossibleLineIndex) {
            result.linesParsed += 1;
            result.errors.push({ lineNumber : currentLineIndex + 1 , startColumn : 1, endColumn: textAsArray[currentLineIndex].length , message: "Reached End of File before parsing the record" });
            break;
        }
        let lineContent = ParseLineToContent(textAsArray[currentLineIndex], currentLineIndex, currentTree);
        result.data = {...result.data, ...lineContent.data};
        result.dataMarkers = union(result.dataMarkers, lineContent.dataMarkers);
        result.errors = union(result.errors, lineContent.errors);
        if (currentTree[0].action !== "NextLine") {
            result.linesParsed += 1;
            currentLineIndex += 1;
        }
    }
    return result;
    
}
// Get the record part of the tree which can be reused
const GetRecordTree = (tree: ParseTreeElement[], recordBeginIndex: number): ParseTreeElement[] => {
    let endIndex: number | null = null;
    for(let i = recordBeginIndex; i < tree.length; i++) {
        if (tree[i].action === "Record") {
            endIndex = i;
            break;
        }
    }
    if (endIndex == null) {
        throw "Unable to Parse Tree";
    }
    return take(drop(tree, recordBeginIndex), endIndex - recordBeginIndex);
}

const FindTreePartTillNextLine = (tree: ParseTreeElement[], index: number):  ParseTreeElement[] => {
    let endIndex: number | null = null;
    for(let i = index; i < tree.length; i++) {
        if (i === index && tree[i].action === "IgnoreLine") {
            endIndex = i + 1;
            break;
        }
        if (i === index && tree[i].action === "NextLine") {
            endIndex = i + 1;
            break;
        }
        if (tree[i].action === "Column" && (<Column>tree[i]).end.content === "EOL") {
            endIndex = i + 1;
            break;
        }
        if (tree[i].action === "IgnoreLine" || tree[i].action === "NextLine" || tree[i].action === "SubRecord" || tree[i].action === "Record") {
            endIndex = i;
            break;
        }
    };
    if (endIndex == null) {
        endIndex = tree.length;
    }
    return take(drop(tree, index), endIndex - index);
}

const createDataMarker = (type: "IgnoreLine" | "Column" | "SkipLine", startLine: number, endLine: number, startColumn: number, endColumn: number, title: string) : DataMarker  => {
    return {
        type: type,
        startLineNumber: startLine,
        startColumn: startColumn,
        endLineNumber: endLine,
        endColumn: endColumn,
        title: title,
    };
}

const ParseLineToContent = (lineText: string, currentLineIndex: number, currentTree: ParseTreeElement[]) : 
    { data: any, dataMarkers: DataMarker[], errors?: any[] } => {
    let content: any = {};
    let dataMarkers: DataMarker[] = [];
    for (let i = 0; i < currentTree.length; i++) {
        if (currentTree[i].action === "Column") {
            let beginIndex = FindIndexOfMarkerInLine(lineText, (<Column>currentTree[i]).begin.content);
            let endIndex = FindIndexOfMarkerInLine(lineText, (<Column>currentTree[i]).end.content);
            let title = (<Column>currentTree[i]).name.content;
            content[title] = lineText.substring(beginIndex, endIndex);
            dataMarkers.push(createDataMarker("Column", currentLineIndex + 1, currentLineIndex + 1, beginIndex + 1, endIndex + 1, title));
        }
        if (currentTree[i].action === "IgnoreLine") {
            dataMarkers.push(createDataMarker("IgnoreLine", currentLineIndex + 1, currentLineIndex + 1, 1, lineText.length, "Ignore Line"))
        }
    }
    return {
        data: content,
        dataMarkers: dataMarkers
    }
}


const FindIndexOfMarkerInLine = (lineText: string, marker: string): number => {
    let markerSpecialChars = marker.replace(/[0-9]*/g,"");
    if (markerSpecialChars.length === 0) {
        return parseInt(marker);
    }
    if (marker === "EOL") {
        return lineText.length;
    }
    let indeces = FindAllIndexesOfChar(lineText, markerSpecialChars);
    return indeces[0];
}

const FindAllIndexesOfChar = (lineText: string, char: string): number[] => {
    var indices: number[] = [];
    for (var i = 0; i < lineText.length; i++) {
        if (lineText[i] === char) indices.push(i);
    }
    return indices;
}

export default function (callback, text, configuration) {
    try {
        const parseTree = JSON.parse(configuration.parseTree);
        const result = ParseTextUsingTree(text, parseTree);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
}