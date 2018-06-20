import React from "react";
import * as ReactDOM from "react-dom";
import MonacoEditor from 'react-monaco-editor';
import { map, keys } from "lodash";
import * as monaco from "monaco-editor";
import InfoveaveFileParsers from "./index";
import { Table } from "antd";
import { ParseTreeElement, DataMarker } from "./interfaces";

interface UIState {
    code?: string;
    parseTree?: {
        errors: any[],
        tree: ParseTreeElement[]
    };
    fileContent?: string;
    dataMarkers?: DataMarker[];
    tableContent: any[];

}

class UI extends React.Component<{}, UIState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            code: ``,
            parseTree: {
                errors: [],
                tree: []
            },
            fileContent: "",
            dataMarkers: [],
            tableContent: [],
        }
    }

    fileSelect = (e) => {
        if (e.target.files.length === 0) {
            this.setState({ fileContent: "" });
            return;
        }
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (ev) => {
            if (ev.target == null) {
                return;
            }
            let content = ev.target.result;
            this.setState({ fileContent: content }, () => {
                this.contentFileEditor.editor.updateOptions({ readOnly: true });
                this.validateFile();
            });
        }
        reader.readAsBinaryString(file);
    }


    validateFile = () => {
        if (this.state.parseTree == null) {
            return;
        }
        let text = this.contentFileEditor.editor.getValue();
        if (text == null || text === "") {
            return;
        }
        try {
            let content = InfoveaveFileParsers.ParseTextUsingTree(text, this.state.parseTree.tree);
            this.setState({ dataMarkers: content.dataMarkers, tableContent: content.data }, this.updateFileContentEditor);
        } catch (e) {
            this.setState({ dataMarkers: [], tableContent: [] }, this.updateFileContentEditor);
        }


    }

    updateFileContentEditor = () => {
        this.contentFileEditor.editor.setValue(this.contentFileEditor.editor.getValue());
        let decos = map(this.state.dataMarkers, (d => {
            return {
                range: new monaco.Range(d.startLineNumber, d.startColumn, d.endLineNumber, d.endColumn),
                options: {
                    inlineClassName: `deco-${d.type}`,
                    isWholeLine: (d.type === "IgnoreLine"),
                    hoverMessage: { isTrusted: true, value: d.title },
                },
            }
        }));
        this.contentFileDecorations = this.contentFileEditor.editor.deltaDecorations([], decos);
    }

    onChange = (newValue) => {
        let parsedResult = InfoveaveFileParsers.ParseCode(newValue);
        this.setState({ code: newValue, parseTree: parsedResult }, () => {
            let model = this.sourceEditor.editor.getModel();
            monaco.editor.setModelMarkers(
                model,
                "ErrorListener",
                map(parsedResult.errors, (e) => {
                    return {
                        severity: monaco.MarkerSeverity.Error,
                        message: e.message,
                        startLineNumber: e.line,
                        endLineNumber: e.line,
                        startColumn: (e.column != null) ? e.column + 1 : e.startColumn + 1,
                        endColumn: (e.column != null) ? e.column + 1 : e.endColumn + 1
                    }
                })
            );
            this.validateFile();
        });
    }

    componentDidMount() {
        this.onChange(this.state.code);
    }

    editorWillMount = (monaco) => {
        monaco.languages.register({ id: 'InfoveaveFileParserLanguage' });
        monaco.languages.register({ id: 'textpreview' });
        monaco.languages.setMonarchTokensProvider('InfoveaveFileParserLanguage', {
            tokenizer: {
                root: [
                    [/(RECORD|COLUMN|SUBRECORD|IGNORE|LINE|NEXT|EMPTYLINE|TILL|SKIP)/, "keyword"],
                    [/(BEGIN|END)/, "action"],
                    [/#([A-Za-z0-9 <>()~!@#$%^&*()_+`={}[\]:";'?,./|\\-])+/, "comment"],
                    [/ [0-9 <>()~!@#$%^&*()_+`={}[\]:";'?,./|\\-]+/, "identifier"],
                    // [/ [A-Za-z0-9 <>()~!@#$%^&*()_+`={}[\]:";'?,./|\\-]+/,"column-name"]

                ]
            }
        });
        monaco.editor.defineTheme('InfoveaveFileParserLanguageTheme', {
            base: 'vs',
            inherit: false,
            rules: [
                { token: 'keyword', foreground: '1976D2' },
                { token: 'action', foreground: '0D47A1' },
                { token: 'identifier', foreground: '512DA8' },
                { token: 'column-name', foreground: '689F38' },
                { token: 'comment', foreground: '008800' }
            ]
        });
    }

    sourceEditor: any = null;
    resultEditor: any = null;
    contentFileEditor: any = null;
    contentFileDecorations = [];


    render() {
        const options = {
            selectOnLineNumbers: true,
            codeLens: true,
            minimap: {
                enabled: false,
            }
        };
        let columns = (this.state.tableContent.length === 0) ? [] :
            map(keys(this.state.tableContent[0]), c => { return { title: c, dataIndex: c, key: c } });

        return (
            <div>
                <div style={{ display: "inline-block", width: "35%" }}>
                    <MonacoEditor
                        ref={r => this.sourceEditor = r}
                        width="100%"
                        height="500"
                        language="InfoveaveFileParserLanguage"
                        theme="InfoveaveFileParserLanguageTheme"
                        value={this.state.code}
                        options={options}
                        onChange={this.onChange}
                        editorWillMount={this.editorWillMount}
                    />
                    <MonacoEditor
                        ref={r => this.resultEditor = r}
                        width="100%"
                        height="200"
                        language="json"
                        value={JSON.stringify(this.state.parseTree, null, 2)}
                        options={options}
                    />
                </div>
                <div style={{ display: "inline-block", width: "65%" }}>
                    <input type="file" onChange={this.fileSelect} />
                    <MonacoEditor
                        ref={r => this.contentFileEditor = r}
                        width="100%"
                        height="500"
                        language="textpreview"
                        value={this.state.fileContent}
                        options={options}
                    />
                    <div style={{ width: "100%", overflowX: "scroll" }}>
                        <div style={{ width: columns.length * 100 }}>
                            <Table columns={columns} dataSource={this.state.tableContent} size="small" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<UI />, document.querySelector("#app"));