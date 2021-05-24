import { showAllFiles } from "./utils/showAllFiles";
import { filterFiles } from "./utils/filterFiles";
import { executeCommand } from "./utils/executeCommand";
import path from "path";
import fs from "fs";

const testFolder = "./dummy/";
const dir = path.join(__dirname, testFolder);
const files = fs.readdirSync(dir);
const filteredFiles = filterFiles(files);

showAllFiles(filteredFiles);

for (let i = 0; i < filteredFiles.length; i++) {
  executeCommand(dir + filteredFiles[i], filteredFiles[i]);
}
