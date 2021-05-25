"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeBuildTest = void 0;
const showAllFiles_1 = require("./utils/showAllFiles");
const filterFiles_1 = require("./utils/filterFiles");
const executeCommand_1 = require("./utils/executeCommand");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function executeBuildTest(folderPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = fs_1.default.readdirSync(folderPath);
        const filteredFiles = filterFiles_1.filterFiles(files);
        showAllFiles_1.showAllFiles(filteredFiles);
        for (let i = 0; i < filteredFiles.length; i++) {
            const a = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const result = yield executeCommand_1.executeCommand(path_1.default.join(folderPath, filteredFiles[i]), filteredFiles[i]);
                    console.log(result);
                    return "success";
                }
                catch (e) {
                    console.error(e.message);
                    return null;
                }
            });
            if ((yield a()) !== "success") {
                return;
            }
        }
    });
}
exports.executeBuildTest = executeBuildTest;
//# sourceMappingURL=main.js.map