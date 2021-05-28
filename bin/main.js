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
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeBuildTest = void 0;
const showAllFiles_1 = require("./utils/showAllFiles");
const filterFiles_1 = require("./utils/filterFiles");
const executeCommand_1 = require("./utils/executeCommand");
const traverseFiles_1 = require("./utils/traverseFiles");
const filterIgnoreFiles_1 = require("./utils/filterIgnoreFiles");
function executeBuildTest(folderPath, _ignoreFile = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const filesArray = [];
        const fileNamesArray = [];
        traverseFiles_1.traverseFiles(folderPath, filesArray, fileNamesArray);
        const filteredFiles = filterFiles_1.filterFiles(fileNamesArray);
        const filteredDirFiles = filterFiles_1.filterFiles(filesArray);
        if (_ignoreFile) {
            filterIgnoreFiles_1.ignoreFiles(_ignoreFile, filteredDirFiles, filteredFiles);
        }
        showAllFiles_1.showAllFiles(filteredFiles);
        for (let i = 0; i < filteredDirFiles.length; i++) {
            const a = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const result = yield executeCommand_1.executeCommand(filteredDirFiles[i], filteredFiles[i]);
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