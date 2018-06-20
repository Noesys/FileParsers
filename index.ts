import { ParseCode } from "./LangaugeParser";
import { ParseTextUsingTree } from "./FileContentParser";
import { ParseRCode } from "./RParser";

const InfoveaveFileParsers = {
    ParseCode: ParseCode,
    ParseTextUsingTree: ParseTextUsingTree,
    ParseRCode: ParseRCode
};
export default InfoveaveFileParsers;
if (window != null) {
    (window as any).InfoveaveFileParsers = InfoveaveFileParsers;
}