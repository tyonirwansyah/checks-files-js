"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileName = void 0;
const path_1 = __importDefault(require("path"));
function getFileName(filename) {
    const extension = path_1.default.extname(filename);
    const file = path_1.default.basename(filename, extension);
    return file + extension;
}
exports.getFileName = getFileName;
//# sourceMappingURL=getFileName.js.map