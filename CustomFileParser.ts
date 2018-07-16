import { ParseTextUsingTree } from "./FileContentParser";

export default function (callback, text, configuration) {
    try {
        const parseTree = JSON.parse(configuration.parseTree);
        const result = ParseTextUsingTree(text, parseTree);
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
}