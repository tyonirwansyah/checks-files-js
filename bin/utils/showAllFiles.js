"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAllFiles = void 0;
const boxSettings_1 = require("./boxSettings");
const boxen_1 = __importDefault(require("boxen"));
let filesList = "";
function showAllFiles(files) {
    for (let i = 0; i < files.length; i++) {
        if (i === files.length - 1) {
            filesList += `-${files[i]}`;
        }
        else {
            filesList += `-${files[i]}\n`;
        }
    }
    return console.log(boxen_1.default(filesList, boxSettings_1.fileListBoxSettings));
}
exports.showAllFiles = showAllFiles;
//# sourceMappingURL=showAllFiles.js.map